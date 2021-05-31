import { Modal, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useAuth from "../../../../../../auth/useAuth";
import useAppData from "../../../../../../hooks/useAppData";
import RequestsServices from "../../../../../../services/request.service";

interface IProps {
  modalStatus: boolean;
  handleClose: any;
}

const requestsService = new RequestsServices();

export default function SendObservation({ modalStatus, handleClose }: IProps) {
  const { handleSubmit, register } = useForm();
  const { setSellerReq, sellerReq } = useAppData();
  const { token } = useAuth();
  const { id } = useParams<any>();
  const handleSend = (data: any) => {
    if (token && id) {
      const newId = parseInt(id);
      requestsService
        .setSellerInObservation(token, newId, data.message)
        .then(() => {
          setSellerReq({ ...sellerReq, state: "Observation" });
          handleClose();
        })
        .catch((err) => console.error(err));
    }
  };
  return (
    <Modal
      show={modalStatus}
      onHide={handleClose}
      style={{ marginTop: "100px" }}
    >
      <Modal.Header closeButton>
        <Modal.Title>Send Observation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(handleSend)}>
          <Form.Group>
            <Form.Label>Message:</Form.Label>
            <Form.Control as="textarea" {...register("message")} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="success" onClick={handleSubmit(handleSend)}>
          Send
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
