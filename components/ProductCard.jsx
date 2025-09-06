export default function ProductCard({ item }) {
  return (
    <article className="card p-4">
      <div className="aspect-[4/3] w-full overflow-hidden rounded-xl2 bg-neutral-100">
        {/* Reemplaza por /images/... si subes fotos reales */}
        <img
          src={item.image || "/placeholder.png"}
          alt={item.name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-carbón">{item.name}</h3>
          <p className="text-sm text-neutral-600">{item.desc}</p>
        </div>
        <span className="whitespace-nowrap rounded-xl2 bg-vino px-3 py-1 text-sm font-bold text-blanco">
          ${item.price}
        </span>
      </div>
    </article>
  );
}
