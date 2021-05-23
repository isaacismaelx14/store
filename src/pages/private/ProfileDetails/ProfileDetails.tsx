import ShowUsername from "../../../components/ShowUsername";
import "./styles/profileDetails.scss";

export default function ProfileDetails() {
  return (
    <div className="Profile-Details">
      <h2>
        <ShowUsername />
      </h2>
    </div>
  );
}
