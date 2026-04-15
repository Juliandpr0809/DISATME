import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import logoIcon from "@/assets/new_img/LOGO.png";
import appCss from "../styles.css?url";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "DISATME",
  areaServed: "Barranquilla, Colombia",
  telephone: "+57 3245189838",
  url: "https://www.instagram.com/disatme_/",
  sameAs: ["https://www.instagram.com/disatme_/"],
  description:
    "Empresa de remodelaciones, diseño de interiores y fabricacion de mobiliario a medida en Barranquilla.",
  knowsAbout: [
    "remodelaciones en Barranquilla",
    "diseño de interiores",
    "fabricacion de mobiliario",
    "cocinas integrales",
    "closets a medida",
  ],
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Pagina no encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          La pagina que buscas no existe o fue movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "DISATME | Remodelaciones, Diseño Interior y Mobiliario en Barranquilla" },
      {
        name: "description",
        content:
          "DISATME en Barranquilla, Colombia. Expertos en remodelaciones, diseño de interiores, fabricacion de mobiliario, cocinas, closets, centros de TV y mantenimiento preventivo y correctivo.",
      },
      {
        name: "keywords",
        content:
          "remodelaciones barranquilla, diseño interior barranquilla, fabricacion de mobiliario, cocinas integrales barranquilla, closets a medida, centros de tv, mantenimiento preventivo y correctivo, disatme",
      },
      { name: "author", content: "DISATME" },
      { name: "robots", content: "index, follow" },
      {
        property: "og:title",
        content: "DISATME | Remodelaciones y Diseño Interior en Barranquilla",
      },
      {
        property: "og:description",
        content:
          "Empresa de remodelacion, diseño y fabricacion a medida en Barranquilla. Cotiza por WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_CO" },
      { property: "og:url", content: "https://www.instagram.com/disatme_/" },
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:title",
        content: "DISATME | Remodelaciones y Diseño Interior en Barranquilla",
      },
      {
        name: "twitter:description",
        content:
          "Remodelaciones, diseño interior y mobiliario a medida en Barranquilla, Colombia.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
        {
          rel: "icon",
          type: "image/png",
          href: logoIcon,
        },
        {
          rel: "shortcut icon",
          type: "image/png",
          href: logoIcon,
        },
        {
          rel: "apple-touch-icon",
          href: logoIcon,
        },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
