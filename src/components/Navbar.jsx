
const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#home" className="navbar-logo">
        <span className="logo-flower">✿</span>
        <span className="logo-name">Bloom <em>& Bliss</em></span>
        <span className="logo-tagline">THE ART OF GIVING FLOWERS</span>
      </a>

      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#shop">The Collection</a></li>
        <li><a href="#about">Our Story</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="navbar-actions">
        <a href="#shop" className="cart-button" aria-label="Shopping bag">
          <span className="cart-icon">♡</span>
          <span className="cart-label">Your Bag</span>
          <span className="cart-count">0</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
