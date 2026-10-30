import { Link } from "react-router-dom";
import { products } from "./products";
import { useDocumentMeta } from "./useDocumentMeta";

function Home() {
  useDocumentMeta({
    title: "Vélos électriques et accessoires | CycloShop",
    description:
      "Découvrez CycloShop, votre boutique de vélos électriques et d'accessoires. Trouvez le vélo adapté à vos déplacements.",
  });

  return (
    <main>
      <h1>Bienvenue chez CycloShop</h1>

      <p>
        Découvrez notre sélection de vélos électriques et
        d'accessoires pour vos déplacements.
      </p>

      <section>
        <h2>Nos produits</h2>

        <div>
          {products.map((product) => (
            <article key={product.slug}>
              <h3>{product.name}</h3>

              <p>{product.description}</p>

              <p>{product.price} €</p>

              <Link to={`/produits/${product.slug}`}>
                Voir le produit
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
