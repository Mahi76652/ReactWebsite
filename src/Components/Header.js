const Header = () => {
    return (  
       
        <>
  {/* Navigation */}
  <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
    <div className="container">
      <a className="navbar-brand" href="#"></a>
      <div className="container">
        <a className="navbar-brand" href="#"></a>
        <a className="navbar-brand" href="#">
          <img
            src="https://image.shutterstock.com/image-vector/home-decor-vector-logo-template-260nw-446299705.jpg"
            alt="Monarch Decor Logo"
            style={{ height: 70, width: "auto" }}
            className="navbar-logo"
          />
          Monarch Decor
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                data-toggle="modal"
                data-target="#productsModal"
              >
                Categories
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                data-toggle="modal"
                data-target="#aboutModal"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                data-toggle="modal"
                data-target="#contactModal"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarResponsive"
    aria-controls="navbarResponsive"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarResponsive">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          href="#"
          data-toggle="modal"
          data-target="#productsModal"
        >
          Categories
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          href="#"
          data-toggle="modal"
          data-target="#aboutModal"
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          href="#"
          data-toggle="modal"
          data-target="#contactModal"
        >
          Contact
        </a>
      </li>
    </ul>
  </div>
</>

    
    );
}
 
export default Header;