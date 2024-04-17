import logoimg from "../../assets/guvi-logo.svg";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <section className="logo-container">
          <img src={logoimg} alt="Guvi logo" className="logo" />
          <h1 className="title">Blog</h1>
          <input
            type="text"
            className="nav-search"
            placeholder="What do you want to read"
          />
        </section>
        <button className="btn btn-signUp">Sign Up</button>
      </nav>
    </>
  );
}

export default Navbar;
