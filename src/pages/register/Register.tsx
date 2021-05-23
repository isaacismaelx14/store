import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { routes } from "../../helpers/routes.helper";
import "./styles/register.scss";

export default function Register() {
  const { handleSubmit } = useForm();

  const onSubmit = () => {
    console.log("Register");
  };

  return (
    <section className="register">
      <div className="register__container">
        <div className="register__header">
          <span className="title">Register</span>
          <span className="sub-title">
            or <Link to={routes.login} children="signin" />
          </span>
        </div>
        <div className="register__body">
          <form className="register__form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form__group">
              <input type="text" placeholder="names" name="names" />
              <input type="text" placeholder="last names" name="last names" />
            </div>

            <div className="form__group">
              <input
                type="text"
                className="email"
                placeholder="email"
                name="email"
              />
            </div>
            <div className="form__group">
              <input
                type="password"
                className="password"
                placeholder="password"
                name="password"
              />
              <input
                type="password"
                className="repeat-password"
                placeholder="confirm password"
                name="repeat password"
              />
            </div>
            <div className="form__group">
              <button type="submit" className="btn__form">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
