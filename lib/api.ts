import fs from "fs";
import { join } from "path";

const dataDir = join(process.cwd(), "data");

export function getDataCategories() {
  return fs.readdirSync(dataDir);
}

export function getCategoryBySlug(slug: string) {
  try {
    const realSlug = slug;
    return { slug: realSlug };
  } catch (error) {
    console.error(error);
  }
}

export function getAllCategories() {
  const categories = getDataCategories();
  const finalCategories = [];
  for (const category of categories) {
    const finalCategory = getCategoryBySlug(category);
    finalCategories.push(finalCategory as any);
  }
  finalCategories.sort((cat1, cat2) => cat1.slug.localeCompare(cat2.slug));
  return finalCategories;
}

export function getPartialData(category: string) {
  const fullPathDir = join(dataDir, `/${category}`);
  const files = fs.readdirSync(fullPathDir);
  const data = files.map((file) => {
    const fullPath = join(fullPathDir, file);
    const content = fs.readFileSync(fullPath, "utf8");
    const jsonContent = JSON.parse(content);
    jsonContent.slug = file.replace(/\.json$/, "");
    return { slug: jsonContent.slug, name: jsonContent.name };
  });
  return data;
}

export function getDataFile(category: string, dataset: string) {
  const fullPath = join(dataDir, `/${category}/${dataset}.json`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const jsonContent = JSON.parse(fileContents);
  return jsonContent;
}
