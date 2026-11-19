
import flowers from "../data/flowers";
import FlowerCard from "./FlowerCard";

const ProductSection = () => {
  return (
    <section className="products-section" id="shop">
      <div className="section-heading">
        <p className="section-eyebrow">✳ CURATED WITH LOVE ✳</p>

        <h2>
          A little piece of <span>floral magic.</span>
        </h2>

        <p className="section-description">
          Thoughtfully gathered blooms to make
          every ordinary moment extraordinary.
        </p>
      </div>

      <div className="flower-grid">
        {flowers.map((flower) => (
          <FlowerCard key={flower.id} flower={flower} />
        ))}
      </div>

      <div className="collection-bottom">
        <span>MADE WITH LOVE, BLOOMED WITH CARE</span>
        <span>✿ ✿ ✿</span>
      </div>
    </section>
  );
};

export default ProductSection;
