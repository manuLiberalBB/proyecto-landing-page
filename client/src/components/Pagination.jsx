export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  function goToPage(page) {
    if (page < 1 || page > totalPages || page === currentPage) return;
    onPageChange(page);
  }

  return (
    <nav
      aria-label="Paginación"
      className="flex items-center justify-center gap-2 mt-12 pb-12"
    >
      <button
        type="button"
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 border-2 border-[var(--vintage-dark)] text-[var(--vintage-dark)] subtitle-font text-sm tracking-wider uppercase transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed hover:enabled:bg-[var(--vintage-dark)] hover:enabled:text-[var(--vintage-cream)]"
      >
        Anterior
      </button>

      {pages.map((page) => (
        <button
          key={page}
          type="button"
          onClick={() => goToPage(page)}
          className={`w-10 h-10 subtitle-font text-sm tracking-wider border-2 transition-colors duration-300 ${
            page === currentPage
              ? 'bg-[var(--vintage-red)] border-[var(--vintage-red)] text-[var(--vintage-cream)]'
              : 'border-[var(--vintage-dark)] text-[var(--vintage-dark)] hover:bg-[var(--vintage-gold)] hover:border-[var(--vintage-gold)]'
          }`}
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 border-2 border-[var(--vintage-dark)] text-[var(--vintage-dark)] subtitle-font text-sm tracking-wider uppercase transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed hover:enabled:bg-[var(--vintage-dark)] hover:enabled:text-[var(--vintage-cream)]"
      >
        Siguiente
      </button>
    </nav>
  );
}
