import { Link, useParams } from "react-router-dom";
import { products } from "./products";
import { useDocumentMeta } from "./useDocumentMeta";

function Product() {
  const { slug } = useParams();

  const product = products.find((p) => p.slug === slug);

  useDocumentMeta({
    title: product
      ? `${product.name} | CycloShop`
      : "Produit introuvable | CycloShop",
    description: product
      ? product.description
      : "Ce produit est introuvable sur CycloShop.",
  });

  if (!product) {
    return (
      <main>
        <h1>Produit introuvable</h1>
        <Link to="/">Retour à l'accueil</Link>
      </main>
    );
  }

  const similarProducts = products
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3);

  return (
    <main>
      <Link to="/">Retour à l'accueil</Link>

      <article>
        <h1>{product.name}</h1>

        <p>{product.description}</p>

        <p>
          <strong>Prix :</strong> {product.price} €
        </p>
      </article>

      <section>
        <h2>Produits similaires</h2>

        <div>
          {similarProducts.map((similarProduct) => (
            <article key={similarProduct.slug}>
              <h3>{similarProduct.name}</h3>

              <p>{similarProduct.description}</p>

              <Link to={`/produits/${similarProduct.slug}`}>
                Découvrir ce produit
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Product;
