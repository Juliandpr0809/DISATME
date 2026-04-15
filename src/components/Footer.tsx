import logoImage from "@/assets/new_img/LOGO.png";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      {/* Marquee */}
      <div className="overflow-hidden py-6 border-b border-border">
        <div className="animate-marquee whitespace-nowrap flex">
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="font-serif text-5xl md:text-7xl text-muted-foreground/15 tracking-wide mx-8"
            >
              DISATME REMODELACION Y DISEÑO &middot;
            </span>
          ))}
        </div>
      </div>

      {/* Footer content */}
      <div className="px-6 md:px-12 lg:px-16 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo */}
          <div>
            <img src={logoImage} alt="Logo DISATME" className="h-12 w-auto" />
            <p className="mt-3 text-[11px] tracking-[0.08em] text-muted-foreground">
              Diseño interior, remodelacion y mobiliario a medida.
            </p>
          </div>

          {/* Menu */}
          <div>
            <span className="text-[10px] tracking-[0.15em] text-muted-foreground uppercase mb-4 block">
              MENU
            </span>
            <nav className="flex flex-col gap-2">
              {[
                { label: "Nosotros", href: "#about" },
                { label: "Proyectos", href: "#portfolio" },
                { label: "Servicios", href: "#services" },
                { label: "Galeria", href: "#journal" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[11px] tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Follow us */}
          <div>
            <span className="text-[10px] tracking-[0.15em] text-muted-foreground uppercase mb-4 block">
              REDES
            </span>
            <nav className="flex flex-col gap-2">
              {["Instagram @disatme_", "WhatsApp +57 324 518 9838"].map((item) => (
                <a
                  key={item}
                  href={item.startsWith("Instagram") ? "https://www.instagram.com/disatme_/" : "https://wa.me/573245189838"}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[11px] tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <span className="text-[10px] tracking-[0.15em] text-muted-foreground uppercase mb-4 block">
              CONTACTO
            </span>
            <div className="flex flex-col gap-2 text-[11px] tracking-[0.05em] text-muted-foreground">
              <span>BARRANQUILLA, COLOMBIA</span>
              <span className="mt-2">INSTAGRAM: @DISATME_</span>
              <span>WHATSAPP: +57 324 518 9838</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
