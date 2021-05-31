import { useEffect, useState } from "react";
import {
  Button,
  Container,
  Badge,
  Popover,
  OverlayTrigger,
} from "react-bootstrap/";
import { useHistory, useParams } from "react-router";
import useAuth from "../../../../../auth/useAuth";
import { routes } from "../../../../../helpers/routes.helper";
import useAppData from "../../../../../hooks/useAppData";
import RequestsServices, {
  ISellerRequest,
} from "../../../../../services/request.service";
import SendObservation from "./modal/sendObservation";
import SendRefuse from "./modal/SendRefuse";
import "./styles/GetOneSeller.scss";

const requestsService = new RequestsServices();

export default function GetOneSeller() {
  const { token } = useAuth();
  const history = useHistory();
  const { id } = useParams<any>();
  const { sellerReq, setSellerReq } = useAppData();
  const [observModal, setObservModal] = useState<boolean>(false);
  const [refuseModal, setRefuseModal] = useState<boolean>(false);
  const [seller, setSeller] = useState<ISellerRequest | null>(sellerReq);

  const handleClose = () => {
    setObservModal(false);
    setRefuseModal(false);
  };

  const setColor = () => {
    if (seller && seller.state) {
      if (seller.state === "Observation") return "warning";
      else if (seller.state === "Refuse") return "danger";
      else return "primary";
    }
    return "secundary";
  };

  const acceptSeller = () => {
    const newId = parseInt(id);
    if (token)
      requestsService
        .acceptSellerReq(token, newId)
        .then(() => history.push(routes.admin.requests.sellers.getAll))
        .catch((err) => console.error(err));
  };

  useEffect(() => {
    if (id && token && !seller) {
      const newId = parseInt(id);

      requestsService
        .getSellerById(token, newId)
        .then((seller) => setSellerReq(seller))
        .catch((error) => console.error(error));
    }
  }, [id, seller, setSellerReq, token]);

  useEffect(() => {
    setSeller(sellerReq);
  }, [sellerReq]);

  return (
    <section className="admin-request-getOneSeller">
      <Container>
        <div className="container__header">
          <h2>{seller?.name}</h2>
          <OverlayTrigger
            trigger="click"
            placement="bottom"
            overlay={
              <Popover id="popover-basic">
                <Popover.Title as="h3">
                  {seller?.admin_message ? "Reason:" : "Required"}
                </Popover.Title>
                {seller?.admin_message && (
                  <Popover.Content>{seller?.admin_message}</Popover.Content>
                )}
              </Popover>
            }
          >
            <Badge pill variant={setColor()} style={{ cursor: "pointer" }}>
              {seller?.state}
            </Badge>
          </OverlayTrigger>
        </div>
        <div className="container__body">
          <p>{seller?.description}</p>
          <p>{seller?.direction}</p>
        </div>
        <div className="conatiner__footer">
          <div className="footer__left">
            <Button
              variant="secondary"
              onClick={() => history.push(routes.admin.requests.sellers.getAll)}
            >
              Cancel
            </Button>
          </div>
          <div className="footer__right">
            <Button variant="danger mr-2" onClick={() => setRefuseModal(true)}>
              Refuse
            </Button>
            <Button
              variant="warning mr-2"
              className="text-white"
              onClick={() => setObservModal(true)}
            >
              Observation
            </Button>
            <Button variant="success" onClick={acceptSeller}>
              Accept
            </Button>
          </div>
        </div>
      </Container>
      <SendObservation modalStatus={observModal} handleClose={handleClose} />
      <SendRefuse modalStatus={refuseModal} handleClose={handleClose} />
    </section>
  );
}
