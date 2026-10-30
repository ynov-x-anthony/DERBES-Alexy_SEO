import { Link } from "react-router-dom";
import { products } from "../data";
import { useDocumentMeta } from "../useDocumentMeta";

function Home() {
  useDocumentMeta({
    title: "Vélos électriques | CycloShop",
    description:
      "Découvrez CycloShop, votre boutique spécialisée dans les vélos électriques. Retrouvez notre sélection de vélos et accessoires.",
  });

  return (
    <main>
      <h1>Bienvenue chez CycloShop</h1>

      <p>
        Découvrez notre sélection de vélos électriques et
        trouvez le vélo adapté à vos besoins.
      </p>

      <section>
        <h2>Nos produits</h2>

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
      </section>
    </main>
  );
}

export default Home;
