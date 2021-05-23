import "./styles/login.scss";
import { useForm } from "react-hook-form";
import useAuth from "../../auth/useAuth";
import { routes } from "../../helpers/routes.helper";
import { Link } from "react-router-dom";
export default function Login() {
  const { handleSubmit } = useForm();
  const { login } = useAuth();
  const onSubmit = () => {
    login();
  };

  return (
    <section className="login" style={{}}>
      <div className="login__container">
        <div className="login__header">
          <span className="title">Login</span>
          <span className="sub-title">
            Or <Link to={routes.register}>signup</Link>
          </span>
        </div>
        <div className="login__body">
          <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="email"
              className="form__input email"
              placeholder="email"
            />
            <input
              type="password"
              className="form__input password"
              placeholder="password"
            />
            <button className="btn__form">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}
