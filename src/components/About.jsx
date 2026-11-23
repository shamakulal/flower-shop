
const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-visual">
        <img
          src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1000"
          alt="Beautiful pastel flowers arranged in a bouquet"
        />
        <div className="about-image-note">
          <span>OUR LITTLE PHILOSOPHY</span>
          <strong>✿Beauty in every bloom✿</strong>
        </div>
      </div>

      <div className="about-content">
        <p className="about-eyebrow">✿ A LITTLE ABOUT US ✿</p>

        <h2>
          More than flowers,
          <span> it's a feeling.</span>
        </h2>

        <p className="about-description">
          At Bloom & Bliss, we believe that flowers have a
          beautiful way of saying what words sometimes cannot.
          Every bouquet is thoughtfully curated to celebrate
          life's little moments and make them unforgettable.
        </p>

        <p className="about-description">
          From soft romantic roses to dreamy seasonal blooms,
          we bring together colours, textures and emotions
          to create something truly special.
        </p>

        <div className="about-signature">
          <span>With love,</span>
          <strong>Bloom & Bliss ♡</strong>
        </div>

        <a href="#shop" className="about-button">
          Explore Our Flowers <span>↗</span>
        </a>
      </div>
    </section>
  );
};

export default About;
