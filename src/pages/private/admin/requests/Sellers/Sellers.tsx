import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { useHistory } from "react-router";
import useAuth from "../../../../../auth/useAuth";
import { routes } from "../../../../../helpers/routes.helper";
import useAppData from "../../../../../hooks/useAppData";
import RequestsServices, {
  ISellerRequest,
} from "../../../../../services/request.service";
import "./styles/sellers.scss";

const requestsService = new RequestsServices();
export default function Sellers() {
  const { token } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [sellersReq, setSellersReq] = useState<ISellerRequest[] | null>(null);
  const { setSellerReq } = useAppData();
  const history = useHistory();

  useEffect(() => {
    setIsLoading(true);
    if (token)
      requestsService
        .getSellers(token)
        .then((data) => {
          setSellersReq(data);
          setIsLoading(false);
        })
        .catch((error) => console.error(error));
  }, [token]);

  return (
    <section className="admin-request-sellers">
      <Container fluid>
        <h2>Sellers</h2>
        {isLoading ? (
          <>Loading</>
        ) : (
          <>
            <Container>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>User Id</th>
                    <th>Store Name</th>
                    <th>Description</th>
                    <th>State</th>
                    <th>Created Date</th>
                  </tr>
                </thead>
                <tbody>
                  {sellersReq?.map((seller) => (
                    <tr
                      key={seller.id}
                      onClick={() => {
                        setSellerReq(seller);
                        history.push(
                          routes.admin.requests.sellers.byId(seller.id)
                        );
                      }}
                    >
                      <td>{seller.id}</td>
                      <td>{seller.user_id}</td>
                      <td>{seller.name}</td>
                      <td>{seller.description}</td>
                      <td>{seller.state}</td>
                      <td>{seller.created_date}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Container>
          </>
        )}
      </Container>
    </section>
  );
}
