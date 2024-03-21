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
