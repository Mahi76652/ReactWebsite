
import React from 'react';
const Home = () => {
    return ( 
        <>
        {/* Page Content */}
        <div className="container">
          {/* Jumbotron Header with Carousel */}
          <header className="jumbotron my-4">
            <div
              id="jumbotronCarousel"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#jumbotronCarousel"
                  data-slide-to={0}
                  className="active"
                />
                <li data-target="#jumbotronCarousel" data-slide-to={1} />
                <li data-target="#jumbotronCarousel" data-slide-to={2} />
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="../img/car1.jpg" className="d-block w-100" alt="First slide" />
                  <div className="carousel-caption d-none d-md-block">
                    <h1 className="display-3">
                      Discover your ideal household decors!
                    </h1>
                    <p className="lead">Take yourself on a journey of decor.</p>
                    <a href="#" className="btn btn-primary btn-lg">
                      EXPLORE
                    </a>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="../img/car2.jpg" className="d-block w-100" alt="Second slide" />
                  <div className="carousel-caption d-none d-md-block">
                    <h1 className="display-3">Unique and Modern Designs</h1>
                    <p className="lead">Find the perfect piece for your home.</p>
                    <a href="#" className="btn btn-primary btn-lg">
                      SHOP NOW
                    </a>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="../img/car3.jpg" className="d-block w-100" alt="Third slide" />
                  <div className="carousel-caption d-none d-md-block">
                    <h1 className="display-3">Quality You Can Trust</h1>
                    <p className="lead">Experience exceptional craftsmanship.</p>
                    <a href="#" className="btn btn-primary btn-lg">
                      LEARN MORE
                    </a>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#jumbotronCarousel"
                role="button"
                data-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#jumbotronCarousel"
                role="button"
                data-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </header>
          {/* Page Features */}
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="card">
                <img className="card-img-top" src="../img/pro1.jpg" alt="Card image cap" />
                <div className="card-body">
                  <h4 className="card-title">Greek vs Roman Army Chess Set</h4>
                  <p className="card-text">
                    Looking for a luxurious way to enjoy chess?
                  </p>
                  <a href="#" className="btn btn-primary">
                    Buy
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="card">
                <img className="card-img-top" src="../img/pro2.jpg" alt="Card image cap" />
                <div className="card-body">
                  <h4 className="card-title">Classic Banker's Lamp</h4>
                  <p className="card-text">
                    A Banker's Lamp is an electric table lamp with brass stand.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Buy
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="card">
                <img className="card-img-top" src="../img/pro3.jpg" alt="Card image cap" />
                <div className="card-body">
                  <h4 className="card-title">Rooster Basket-White</h4>
                  <p className="card-text">
                    A rooster basket to keep your fruits together.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Buy
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://thedecorkart.com/cdn/shop/files/36_4383a743-8a83-4f1a-8621-f0c2054e917d_330x.jpg?v=1710404077"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h4 className="card-title">Infinity Ring Chandelier</h4>
                  <p className="card-text">
                    Elegant Infinity Rings LED Chandelier brings luxury.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Buy
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://thedecorkart.com/cdn/shop/files/Lion_Lamp_with_Home_Decor_Statue_8_500x_c38ffbb5-3d24-44c1-aa84-9465c0b3dafa_330x.jpg?v=1716552779"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h4 className="card-title">Lion Floor Lamp</h4>
                  <p className="card-text">
                    Lighting contributes a great deal to the atmos of a room.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Buy
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://thedecorkart.com/cdn/shop/products/IMG_3955_330x.jpg?v=1671875539"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h4 className="card-title">Royal Thali Set</h4>
                  <p className="card-text">
                    Copper Steel Thali set with royal curved shiny look.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Buy
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://thedecorkart.com/cdn/shop/products/009A8543_330x.jpg?v=1654782182"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h4 className="card-title">Cherokee Armchair</h4>
                  <p className="card-text">Stylish Antique chair.</p>
                  <a href="#" className="btn btn-primary">
                    Buy
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://thedecorkart.com/cdn/shop/files/009A0490_330x.jpg?v=1695189739"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h4 className="card-title">Palm Leaf Gold Table</h4>
                  <p className="card-text">Palm leaf gold side table.</p>
                  <a href="#" className="btn btn-primary">
                    Buy
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://thedecorkart.com/cdn/shop/files/IMG_0171_1fad86df-3496-491a-b75c-872bbbdf5717_330x.jpg?v=1699086029"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h4 className="card-title">Woman Statue</h4>
                  <p className="card-text">Artistry sitting women figurine.</p>
                  <a href="#" className="btn btn-primary">
                    Buy
                  </a>
                </div>
              </div>
            </div>
            {/* Add more product cards here */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
        {/* Modals */}
        {/* Products Modal */}
        <div
          className="modal fade"
          id="productsModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="productsModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="productsModalLabel">
                  Home Decor Categories
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                {/* Add products categories here */}
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card">
                      <img
                        className="card-img-top"
                       src="https://thedecorkart.com/cdn/shop/files/05_3076ec32-b30a-4814-b8aa-a012bb37587d_240x.jpg?v=1707978804"
                        alt="Product image"
                      />
                      <div className="card-body">
                        <h4 className="card-title">Lighting</h4>
                        <a href="#" className="btn btn-primary">
                          Explore
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card">
                      <img
                        className="card-img-top"
                        src="https://thedecorkart.com/cdn/shop/files/05_3076ec32-b30a-4814-b8aa-a012bb37587d_240x.jpg?v=1707978804"
                        alt="Product image"
                      />
                      <div className="card-body">
                        <h4 className="card-title">Bath Decor</h4>
                        <a href="#" className="btn btn-primary">
                          Explore
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card">
                      <img
                        className="card-img-top"
                        src="https://th.bing.com/th/id/OIP.Z7edB_urh_nRVjic2RVmrQHaHa?w=167&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                        alt="Product image"
                      />
                      <div className="card-body">
                        <h4 className="card-title">Wall Decor</h4>
                        <a href="#" className="btn btn-primary">
                          Explore
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card">
                      <img
                        className="card-img-top"
                        src="https://th.bing.com/th/id/OIP.00u16NZ8nfMjDtQvWYuJcQHaHa?w=172&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                        alt="Product image"
                      />
                      <div className="card-body">
                        <h4 className="card-title">Furniture</h4>
                        <a href="#" className="btn btn-primary">
                          Explore
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card">
                      <img
                        className="card-img-top"
                        src="https://th.bing.com/th/id/OIP.JPrLRjI3xDWjOozfGoWWsgAAAA?w=143&h=204&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                        alt="Product image"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Kitchen and Dining</h5>
                        <a href="#" className="btn btn-primary">
                          Explore
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Add more product cards as needed */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About Modal */}
        <div
          className="modal fade"
          id="aboutModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="aboutModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="aboutModalLabel">
                  About Us
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                {/* Add about content here */}
                <p>
                  Welcome to Awesome Shop! We are dedicated to providing the best
                  products to our customers. Our mission is to deliver top-quality
                  items at competitive prices. We value customer satisfaction and
                  strive to meet your needs with our diverse product range and
                  excellent customer service.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Contact Modal */}
        <div
          className="modal fade"
          id="contactModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="contactModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="contactModalLabel">
                  Contact Us
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                {/* Add contact content here */}
                <form>
                  <div className="form-group">
                    <label htmlFor="contactName">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="contactName"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contactEmail">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="contactEmail"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contactMessage">Message</label>
                    <textarea
                      className="form-control"
                      id="contactMessage"
                      rows={3}
                      placeholder="Enter your message"
                      defaultValue={""}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
      
     );
}
 
export default Home;