import { Form } from "react-bootstrap";
import "./styles/createSeller.scss";

export default function CreateSeller() {
  return (
    <section className="create-seller">
      <div className="create-seller__header text-center">
        <h2>Create a store</h2>
      </div>
      <div className="create-seller__body">
        <div className="create-seller__form">
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Store's Name"
                name="storeName"
                autoComplete="none"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formDirection">
              <Form.Label>Direction</Form.Label>
              <Form.Control type="text" placeholder="Enter direction" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formDesc">
              <Form.Label>Store description</Form.Label>
              <Form.Control as="textarea" placeholder="Enter a description" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Control
                as="button"
                className="btn btn-success"
                children="Request"
              />
            </Form.Group>
          </Form>
        </div>
      </div>
    </section>
  );
}
