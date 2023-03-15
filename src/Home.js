import React from "react";
import { Link } from "react-router-dom";
import './Home.css';
function Home(isLoggedIn) {
  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "This is the first product",
      price: 10.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Product 2",
      description: "This is the second product",
      price: 19.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Product 3",
      description: "This is the third product",
      price: 7.99,
      image: "https://via.placeholder.com/150",
    },
  ];
  return (
    <div className="container">
      {isLoggedIn ? (
        <div>
          <h1>Welcome to my ecommerce website!</h1>
          <p>Find all the latest products and discounts here.</p>
          <h2>Products</h2>
          <div className="row">
            {products.map((product) => (
              <div className="col-sm-6 col-md-4 mb-3" key={product.id}>
                <div className="card h-100">
                  <div className="card-body product">
                    <h5 className="card-title">{product.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      ${product.price}
                    </h6>
                    <Link
                      to={`/product/${product.id}`}
                      className="btn btn-primary"
                    >
                      View details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h1>Welcome to my ecommerce website!</h1>

          <p>
            Please <Link to="/login">login</Link> or{" "}
            <Link to="/register">register</Link> to continue.
          </p>
        </div>
      )}
    </div>
  );
}

export default Home;
