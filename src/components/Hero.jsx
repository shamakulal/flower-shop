
const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-subtitle">
          ✿ YOUR LITTLE FLORAL ESCAPE
        </p>

        <h1>
          Flowers that
          <span> feel like poetry.</span>
        </h1>

        <p className="hero-description">
          A beautiful collection of thoughtfully
          curated blooms, made to bring softness,
          joy and a little magic into your everyday.
        </p>

        <div className="hero-buttons">
          <a href="#shop" className="hero-primary-btn">
            Explore Collection <span>↗</span>
          </a>

          <a href="#about" className="hero-secondary-btn">
            Discover Our Story
          </a>
        </div>

        <div className="hero-note">
          <span>✿</span>
          A little love, delivered in every bouquet.
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-image-frame">
          <img
            src="https://images.unsplash.com/photo-1494972308805-463bc619d34e?w=1200"
            alt="Soft pastel floral bouquet"
          />
        </div>

        <div className="hero-floating-card">
          <span>THE ART OF FLOWERS</span>
          <strong>Made with love ♡</strong>
        </div>

        <div className="hero-decoration">✿</div>
      </div>
    </section>
  );
};

export default Hero;
