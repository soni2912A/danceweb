

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav- left">
        <h2 className="logo">Movement Studios.</h2>
      </div>

      <div className="nav-center">
        <a href="#home">Home</a>
        <a href="#classes">Classes</a>
        <a href="#about">About</a>
      </div>

      <div className="nav-right">
        <p>224 Nostrand Ave, Brooklyn, NY</p>
      </div>
    </nav>
  );
}

export default Navbar;