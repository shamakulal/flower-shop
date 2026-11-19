
const FlowerCard = ({ flower }) => {
  return (
    <article className="flower-card">
      <div className="flower-image">
        <img src={flower.image} alt={flower.name} />
        <span className="flower-category">
          {flower.category}
        </span>
        <button className="flower-favorite" aria-label="Add to favorites">
          ♡
        </button>
      </div>

      <div className="flower-details">
        <div>
          <h3>{flower.name}</h3>
          <p>{flower.description}</p>
        </div>

        <div className="flower-card-footer">
          <span className="flower-price">₹{flower.price}</span>
          <button className="add-cart-btn">
            Add to bag <span>↗</span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default FlowerCard;
