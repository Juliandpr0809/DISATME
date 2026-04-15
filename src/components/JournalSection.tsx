import { motion } from "framer-motion";
import { siteImages } from "@/lib/siteImages";

const articles = [
  {
    title: "COMPLEMENTOS",
    image: siteImages.journal[0],
  },
  {
    title: "CENTROS DE TV",
    image: siteImages.journal[1],
  },
  {
    title: "COCINAS Y CLOSETS",
    image: siteImages.journal[2],
  },
];

export function JournalSection() {
  return (
    <section id="journal" className="bg-background px-6 md:px-12 lg:px-16 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
            GALERIA
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-foreground"
          >
            IDEAS QUE SE VUELVEN <span className="italic font-light">R</span>EALIDAD
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <motion.a
              key={article.title}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden mb-4">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="font-sans text-sm tracking-[0.08em] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                {article.title}
              </h3>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
