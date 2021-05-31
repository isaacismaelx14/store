import { useState } from "react";
import { Form, Spinner, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../../../auth/useAuth";
import RequestsServices from "../../../../services/request.service";
import sellerReqResolver from "../../../../validators/sellerReq.resolver";
import "./styles/createSeller.scss";

const requestsService = new RequestsServices();
export default function CreateSeller() {
  const { token } = useAuth();
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: sellerReqResolver });

  const onSubmit = (data: any) => {
    setLoading(true);
    if (token)
      requestsService
        .setSeller(token, data)
        .then(() => setIsSuccess(true))
        .catch((err) => {
          return console.error(err);
        });

    setLoading(false);
  };

  return (
    <section className="create-seller">
      {isSuccess ? (
        <>
          <Container className="text-center mt-3">
            <h2>Request Sent</h2>
            <p>Your request has been sent</p>
          </Container>
        </>
      ) : (
        <>
          <div className="create-seller__header text-center">
            <h2>Create a store</h2>
          </div>
          <div className="create-seller__body">
            <div className="create-seller__form">
              {!loading ? (
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Store's Name"
                      autoComplete="none"
                      {...register("name")}
                    />
                    {errors?.name && (
                      <Form.Text className="text-muted">
                        {errors.name.message}
                      </Form.Text>
                    )}
                  </Form.Group>

                  <Form.Group controlId="formDirection">
                    <Form.Label>Direction</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter direction"
                      {...register("direction")}
                    />
                    {errors?.direction && (
                      <Form.Text className="text-muted">
                        {errors.direction.message}
                      </Form.Text>
                    )}
                  </Form.Group>

                  <Form.Group controlId="formDesc">
                    <Form.Label>Store description</Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="Enter a description"
                      {...register("description")}
                    />
                    {errors?.description && (
                      <Form.Text className="text-muted">
                        {errors.description.message}
                      </Form.Text>
                    )}
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      as="button"
                      className="btn btn-success"
                      children="Request"
                    />
                  </Form.Group>
                </Form>
              ) : (
                <Container
                  className="text-center mt-5"
                  style={{ transform: "scale(1.4)" }}
                >
                  <Spinner animation="border" variant="success" />
                  <p>Sending Request</p>
                </Container>
              )}
            </div>
          </div>
        </>
      )}
    </section>
  );
}
