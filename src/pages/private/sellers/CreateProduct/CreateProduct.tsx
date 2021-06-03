import { Form, Container, Row, Col, InputGroup } from "react-bootstrap";
import "./styles/CreateProduct.scss";
export default function CreateProduct() {
  return (
    <section className="temp-CreateProduct">
      <h2>CreateProduct</h2>
      <Container>
        <div className="add-product__container">
          <div className="add-product__form">
            <Form>
              <Form.Group>
                <Form.Label>Title:</Form.Label>
                <Form.Control placeholder="Store Product To Sell" />
              </Form.Group>
              <Form.Group>
                <Row>
                  <Col sm={6} md={4}>
                    <Form.Label>Price:</Form.Label>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text>RD$</InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control placeholder="99.99" />
                    </InputGroup>
                  </Col>
                  <Col sm={6} md={4}>
                    <Form.Label>Stocks:</Form.Label>
                    <Form.Control placeholder="200" />
                  </Col>
                  <Col md={4}>
                    <Form.Label>Category:</Form.Label>
                    <Form.Control placeholder="200" />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group>
                <Form.Label>About:</Form.Label>
                <Form.Control as="textarea" placeholder="Created to sell" />
              </Form.Group>
            </Form>
          </div>
        </div>
      </Container>
    </section>
  );
}
