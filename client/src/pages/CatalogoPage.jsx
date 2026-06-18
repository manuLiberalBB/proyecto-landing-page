import { getProducts } from "../services/contentfulService";
import { useState, useEffect } from "react";
import CatalogProduct from "../components/CatalogProduct.jsx";
import Pagination from "../components/Pagination.jsx";
import Navbar from "../components/Navbar.jsx";

const PRODUCTS_PER_PAGE = 8;
const CATEGORIES = ["Todas", "Guitarras", "Teclados", "Baterias"];

export default function CatalogoPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [categorie, setCategorie] = useState("Todas");

  function handlerSelectCategorie(event) {
    setCategorie(event.target.value);
    setCurrentPage(1);
  }

  useEffect(() => {
    async function fetchProducts() {
      const products = await getProducts("catalogProducts");
      setProducts(products);
      setLoading(false);
    }
    fetchProducts();
  }, []);

  const filteredProducts = categorie !== "Todas"
    ? products.filter((product) => product.category === categorie)
    : products;
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE,
  );

  return (
    <>
    <Navbar />
      <section className="min-h-screen py-24 px-6 bg-[var(--vintage-cream)] relative noise-texture">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 mt-10">
            <div className="flex items-center gap-6 mb-6">
              <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-[var(--vintage-gold)]" />
              <h1 className="display-font text-5xl md:text-7xl text-[var(--vintage-dark)]">
                CATÁLOGO
              </h1>
              <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent to-[var(--vintage-gold)]" />
            </div>
            <p className="text-center text-xl text-[var(--vintage-brown)] italic">
              Todos nuestros instrumentos disponibles
            </p>
          </div>
          <div className="max-w-7xl mx-auto px-6 pt-1 mb-10">
            <label htmlFor="category-select" className="sr-only">
              Categoría
            </label>
            <select
              id="category-select"
              value={categorie}
              onChange={handlerSelectCategorie}
              className="w-full sm:w-64 px-4 py-3 border-2 border-[var(--vintage-gold)]/40 bg-[var(--vintage-cream)] text-[var(--vintage-dark)] subtitle-font tracking-wider uppercase focus:border-[var(--vintage-gold)] focus:outline-none"
            >
              {CATEGORIES.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          {loading ? (
            <p className="text-center subtitle-font tracking-widest uppercase text-[var(--vintage-brown)]">
              Cargando catálogo...
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {paginatedProducts.map((product) => (
                <CatalogProduct key={product.id} product={product} />
              ))}
            </div>
          )}

          {!loading && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </div>
      </section>
    </>
  );
}
