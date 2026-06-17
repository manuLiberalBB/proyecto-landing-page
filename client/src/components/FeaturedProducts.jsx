import CardFeaturedProduct from '../components/CardFeaturedProduct.jsx';
import { getProducts } from '../services/contentfulService.js';
import { useState, useEffect } from 'react';

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  // const products = [
  //   {
  //     name: 'Fender Stratocaster',
  //     category: 'Guitarra Eléctrica',
  //     price: '$1,299',
  //     image: 'https://images.unsplash.com/photo-1685603084426-2fdb03be0931?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  //     badge: 'Más Vendido'
  //   },
  //   {
  //     name: 'Yamaha P-125',
  //     category: 'Piano Digital',
  //     price: '$899',
  //     image: 'https://images.unsplash.com/photo-1645336745172-28aab41f5c53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  //     badge: 'Nuevo'
  //   },
  //   {
  //     name: 'Gibson Les Paul',
  //     category: 'Guitarra Eléctrica',
  //     price: '$2,499',
  //     image: 'https://images.unsplash.com/photo-1685603084426-2fdb03be0931?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  //     badge: 'Premium'
  //   },
  //   {
  //     name: 'Kawai Grand Piano',
  //     category: 'Piano Acústico',
  //     price: '$4,999',
  //     image: 'https://images.unsplash.com/photo-1625873378628-2ca373964b39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  //     badge: 'Exclusivo'
  //   }
  // ];

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getProducts("featuredProducts");
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  return (
    <section id="destacados" className="py-24 px-6 bg-[var(--vintage-cream)] relative noise-texture">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="flex items-center gap-6 mb-6">
            <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-[var(--vintage-gold)]"></div>
            <h2 className="display-font text-6xl md:text-8xl text-[var(--vintage-dark)]">
              DESTACADOS
            </h2>
            <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent to-[var(--vintage-gold)]"></div>
          </div>
          <p className="text-center text-xl text-[var(--vintage-brown)] italic">
            Nuestra selección exclusiva de instrumentos premium
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <CardFeaturedProduct
              key={product.id ?? product.name}
              product={product}
              index={index}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="group px-12 py-4 border-2 border-[var(--vintage-dark)] text-[var(--vintage-dark)] subtitle-font tracking-widest uppercase relative overflow-hidden">
            <span className="relative z-10 group-hover:text-[var(--vintage-cream)] transition-colors duration-300">
              Ver Todo el Catálogo
            </span>
            <div className="absolute inset-0 bg-[var(--vintage-dark)] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
}
