
function Brandcollab() {
    const brandCollabData = [{
        id: 1,
        title: "ebay"},
        {
        id: 2,
        title: "amazon"},
        {
        id: 3,
        title: "AJIO"}
    ]
  return (
    <section className="bg-black border-y border-white/10 py-6">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-4 px-6 sm:px-8">
        {brandCollabData.map((brand) => (
          <div
            key={brand.id}
            className="flex h-14 min-w-[120px] items-center justify-center rounded-full   px-6 text-sm font-semibold uppercase  text-white shadow-[0_10px_30px_rgba(0,0,0,0.18)] "
          >
            {brand.title}
          </div>
        ))}
      </div>
    </section>
  )
}
export default Brandcollab;