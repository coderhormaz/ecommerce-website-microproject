import React, { useState } from "react";

import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Badge,
} from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 2499,
      category: "Audio",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 3499,
      category: "Wearables",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
    },
    {
      id: 3,
      name: "Gaming Mouse",
      price: 1299,
      category: "Gaming",
      image:
        "https://images.unsplash.com/photo-1527814050087-3793815479db?w=600",
    },
    {
      id: 4,
      name: "Bluetooth Speaker",
      price: 1999,
      category: "Audio",
      image:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600",
    },
    {
      id: 5,
      name: "Mechanical Keyboard",
      price: 2999,
      category: "Gaming",
      image:
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600",
    },
    {
      id: 6,
      name: "Power Bank",
      price: 1499,
      category: "Accessories",
      image:
        "https://images.unsplash.com/photo-1609592806596-b43bada2f0dc?w=600",
    },
  ];

  const [search, setSearch] = useState("");
  const [cart, setCart] = useState({});

  const addProduct = (id) => {
    setCart({
      ...cart,
      [id]: (cart[id] || 0) + 1,
    });
  };

  const removeProduct = (id) => {
    if (cart[id] > 1) {
      setCart({
        ...cart,
        [id]: cart[id] - 1,
      });
    } else {
      const newCart = { ...cart };
      delete newCart[id];
      setCart(newCart);
    }
  };

  const cartCount = Object.values(cart).reduce(
    (total, quantity) => total + quantity,
    0
  );

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand className="fw-bold fs-4">
            ⚡ TechStore
          </Navbar.Brand>

          <Navbar.Toggle />

          <Navbar.Collapse>
            <Nav className="ms-auto align-items-lg-center">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#products">Products</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>

              <Button variant="primary" className="ms-lg-3">
                🛒 Cart{" "}
                <Badge bg="light" text="dark">
                  {cartCount}
                </Badge>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero */}
      <section className="hero">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <Badge bg="primary" className="mb-3">
                Latest Tech 2026
              </Badge>

              <h1>
                Upgrade Your <span>Tech Life.</span>
              </h1>

              <p>
                Discover useful gadgets, smart accessories and gaming products
                at affordable prices.
              </p>

              <Button href="#products" size="lg">
                Shop Now →
              </Button>
            </Col>

            <Col lg={6} className="mt-4 mt-lg-0">
              <img
                src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=900"
                alt="Tech Gadgets"
                className="hero-img"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features */}
      <section className="features">
        <Container>
          <Row className="text-center g-4">
            <Col md={4}>
              <h3>🚚</h3>
              <h6>Fast Delivery</h6>
              <p>Quick doorstep delivery</p>
            </Col>

            <Col md={4}>
              <h3>🔒</h3>
              <h6>Secure Payment</h6>
              <p>Safe online payments</p>
            </Col>

            <Col md={4}>
              <h3>↩️</h3>
              <h6>Easy Returns</h6>
              <p>Simple return process</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Products */}
      <section className="products" id="products">
        <Container>
          <div className="text-center mb-4">
            <p className="text-primary fw-bold mb-1">OUR PRODUCTS</p>
            <h2 className="fw-bold">Popular Gadgets</h2>
            <p className="text-muted">
              Explore some of our most popular tech products.
            </p>
          </div>

          {/* Search */}
          <Form className="search-box mx-auto mb-5">
            <Form.Control
              type="text"
              placeholder="Search gadgets..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Form>

          <Row className="g-4">
            {filteredProducts.map((product) => (
              <Col md={6} lg={4} key={product.id}>
                <Card className="product-card h-100">
                  <Card.Img
                    variant="top"
                    src={product.image}
                    alt={product.name}
                  />

                  <Card.Body>
                    <small className="text-primary fw-semibold">
                      {product.category}
                    </small>

                    <Card.Title className="mt-2">
                      {product.name}
                    </Card.Title>

                    <div className="text-warning mb-3">★★★★★</div>

                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="mb-0">
                        ₹{product.price.toLocaleString()}
                      </h5>

                      {cart[product.id] ? (
                        <div className="counter">
                          <Button
                            variant="outline-dark"
                            size="sm"
                            onClick={() => removeProduct(product.id)}
                          >
                            −
                          </Button>

                          <strong>{cart[product.id]}</strong>

                          <Button
                            variant="dark"
                            size="sm"
                            onClick={() => addProduct(product.id)}
                          >
                            +
                          </Button>
                        </div>
                      ) : (
                        <Button
                          variant="dark"
                          onClick={() => addProduct(product.id)}
                        >
                          Add +
                        </Button>
                      )}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {filteredProducts.length === 0 && (
            <div className="text-center mt-5">
              <h5>No products found.</h5>
            </div>
          )}
        </Container>
      </section>

      {/* Offer */}
      <section id="about">
        <Container>
          <div className="offer">
            <div>
              <small>LIMITED OFFER</small>

              <h2>Get up to 20% off</h2>

              <p className="mb-0">
                Upgrade your setup with selected gadgets.
              </p>
            </div>

            <Button variant="light" href="#products">
              View Products
            </Button>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer id="contact">
        <Container>
          <Row className="g-4">
            <Col md={5}>
              <h4>⚡ TechStore</h4>

              <p>
                Smart gadgets and useful accessories for everyday technology.
              </p>
            </Col>

            <Col md={3}>
              <h6>Quick Links</h6>

              <a href="#">Home</a>
              <a href="#products">Products</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </Col>

            <Col md={4}>
              <h6>Contact</h6>

              <p>support@techstore.com</p>
              <p>Mumbai, India</p>
            </Col>
          </Row>

          <hr />

          <p className="text-center mb-0">
            Microproject made by <strong>Hormaz</strong> & <strong>Deev</strong>
          </p>
        </Container>
      </footer>
    </>
  );
}

export default App;