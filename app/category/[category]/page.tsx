export default function CategoryPage({ params }: any) {
  const { category } = params;
  return (
    <main>
      <div className="pt-20 px-[15%] text-center">
        <h1 className="text-4xl mb-6 uppercase">{category}</h1>
      </div>
    </main>
  );
}
