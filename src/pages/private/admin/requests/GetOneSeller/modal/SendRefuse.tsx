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

export default function SendRefuse({ modalStatus, handleClose }: IProps) {
  const { handleSubmit, register } = useForm();
  const { token } = useAuth();
  const { setSellerReq, sellerReq } = useAppData();
  const { id } = useParams<any>();
  const handleSend = (data: any) => {
    if (token && id) {
      const newId = parseInt(id);
      requestsService
        .setSellerInRefuse(token, newId, data.message)
        .then(() => {
          setSellerReq({ ...sellerReq, state: "Refuse" });
          handleClose();
        })
        .catch((err) => console.error(err));
    }
  };
  return (
    <>
      <Modal
        show={modalStatus}
        onHide={handleClose}
        style={{ marginTop: "100px" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Send Deny State</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(handleSend)}>
            <Form.Group>
              <Form.Label>Reason:</Form.Label>
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
    </>
  );
}
