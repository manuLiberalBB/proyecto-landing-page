import { Link } from "react-router";

export default function Logo({dataCompany}) {
  return (
      <Link to="/" className="group flex items-center gap-3">
        <div className="w-12 h-12 border-2 border-[var(--vintage-gold)] flex items-center justify-center transform group-hover:rotate-45 transition-transform duration-500">
          <span className="text-2xl transform group-hover:-rotate-45 transition-transform duration-500">
            🎸
          </span>
        </div>
        <div>
          <h1 className="display-font text-3xl text-[var(--vintage-cream)] leading-none group-hover:text-[var(--vintage-gold)] transition-colors duration-300">
            {dataCompany.name}
          </h1>
          <p className="text-xs subtitle-font tracking-widest text-[var(--vintage-gold)]">
            {dataCompany.since}
          </p>
        </div>
      </Link>
  );
}
