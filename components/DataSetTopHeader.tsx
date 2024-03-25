export default function DataSetTopheader(params: any) {
  const { name, desc } = params;
  return (
    <>
      <h1>{name}</h1>
      <p>{desc}</p>
      <hr className="my-8" />
    </>
  );
}
