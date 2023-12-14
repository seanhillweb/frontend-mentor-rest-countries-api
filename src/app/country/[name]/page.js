export default function CountryDetail({ params }) {
  return (
    <main className="py-12" aria-label="Content">
      <div className="mx-auto max-w-[1352px] px-[13px] md:px-[26px] lg:px-[38px]">
        <h2>Country Detail Page: {params.name}</h2>
      </div>
    </main>
  );
}
