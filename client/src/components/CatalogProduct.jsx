import { useCart } from '../store/cartStore';

export default function CatalogProduct({ product }) {
  const addToCart = useCart((state) => state.addToCart);
  const removeFromCart = useCart((state) => state.removeFromCart);
  const estaEnCarrito = useCart((state) =>
    state.cart.some((item) => item.id === product.id)
  );

  function handleAddToCart() {
    addToCart(product);
  }

  function handleRemoveFromCart() {
    removeFromCart(product);
  }

  return (
    <article className="group bg-white overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
      <div className="relative h-64 overflow-hidden bg-[var(--vintage-cream)]">
        {product.badge && (
          <span className="absolute top-4 left-4 z-10 px-3 py-1 bg-[var(--vintage-red)] text-[var(--vintage-cream)] subtitle-font text-xs tracking-wider uppercase">
            {product.badge}
          </span>
        )}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--vintage-dark)]/50 via-transparent to-transparent" />
      </div>

      <div className="p-5 relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-[var(--vintage-gold)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

        {product.category && (
          <p className="text-xs subtitle-font tracking-wider text-[var(--vintage-brown)] mb-2 uppercase">
            {product.category}
          </p>
        )}
        <h3 className="display-font text-2xl text-[var(--vintage-dark)] mb-2 leading-tight">
          {product.name}
        </h3>
        {product.description && (
          <p className="text-sm text-[var(--vintage-brown)] mb-4 line-clamp-3">
            {product.description}
          </p>
        )}
        <p className="text-xl text-[var(--vintage-red)] font-medium">
          {product.price}
        </p>
        {estaEnCarrito ? (
          <button
            type="button"
            className="w-full bg-[var(--vintage-red)] mt-2 text-[var(--vintage-cream)] px-4 py-2 rounded-md hover:bg-[var(--vintage-dark)] transition-colors duration-25"
            onClick={handleRemoveFromCart}
          >
            Quitar del carrito
          </button>
        ) : (
          <button
            type="button"
            className="w-full bg-[var(--vintage-dark)] mt-2 text-[var(--vintage-cream)] px-4 py-2 rounded-md hover:bg-[var(--vintage-dark)] transition-colors duration-25"
            onClick={handleAddToCart}
          >
            Añadir al carrito
          </button>
        )}
      </div>
    </article>
  );
}
