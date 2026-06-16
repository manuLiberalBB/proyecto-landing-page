export default function CardFeaturedProduct({ product, index }) {
  return (
    <div
      className="group relative bg-white overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-500 hover:shadow-2xl"
      style={{
        animationDelay: `${index * 0.15}s`,
      }}
    >
      {/* Badge */}
      <div className="absolute top-4 left-4 z-20 px-4 py-1 bg-[var(--vintage-red)] text-[var(--vintage-cream)] subtitle-font text-sm tracking-wider">
        {product.badge}
      </div>

      {/* Image container */}
      <div className="relative h-80 overflow-hidden bg-[var(--vintage-cream)]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--vintage-dark)] via-transparent to-transparent opacity-60" />

        {/* Quick view button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            type="button"
            className="px-6 py-3 bg-[var(--vintage-cream)] text-[var(--vintage-dark)] subtitle-font tracking-wider uppercase transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
          >
            Ver Detalles
          </button>
        </div>
      </div>

      {/* Product info */}
      <div className="p-6 bg-white relative">
        {/* Decorative element */}
        <div className="absolute top-0 left-0 w-full h-1 bg-[var(--vintage-gold)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

        <p className="text-sm subtitle-font tracking-wider text-[var(--vintage-brown)] mb-2 uppercase">
          {product.category}
        </p>
        <h3 className="display-font text-2xl text-[var(--vintage-dark)] mb-3">
          {product.name}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-2xl text-[var(--vintage-red)]">
            {product.price}
          </span>
          <button
            type="button"
            className="w-10 h-10 border-2 border-[var(--vintage-dark)] flex items-center justify-center hover:bg-[var(--vintage-dark)] hover:text-[var(--vintage-cream)] transition-colors duration-300"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 5m4-5a2 2 0 100 4 2 2 0 000-4zm10 0a2 2 0 100 4 2 2 0 000-4z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
