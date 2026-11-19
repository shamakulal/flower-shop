function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-image">
        <img
          src="https://images.unsplash.com/photo-1444392061186-9fc38f9d0c5e?auto=format&fit=crop&w=1100&q=85"
          alt="Florist arranging flowers in a studio"
        />
      </div>
      <div className="about-copy">
        <p className="eyebrow">Made by hand</p>
        <h2>Beautiful flowers,<br />personal to you.</h2>
        <p>
          Every bouquet begins with the season. Our florists pair thoughtful
          textures and colors into arrangements that feel natural, warm, and
          completely unique.
        </p>
        <a className="text-link" href="#about">Our story <span aria-hidden="true">→</span></a>
      </div>
    </section>
  )
}

export default About
