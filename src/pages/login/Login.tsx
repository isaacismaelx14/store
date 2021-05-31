import "./styles/login.scss";
import { useForm } from "react-hook-form";
import useAuth from "../../auth/useAuth";
import { routes } from "../../helpers/routes.helper";
import { Link } from "react-router-dom";
import { useState } from "react";
import loginResolver from "../../validators/login.resolver";
import { Spinner, Container } from "react-bootstrap";

export default function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: loginResolver });
  const { login } = useAuth();
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = async (formData: any) => {
    setLoading(true);
    login({
      email: formData.email,
      password: formData.password,
    }).then(() => setLoading(false));
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
            <div className="form__item">
              <input
                type="email"
                className="form__input email"
                placeholder="email"
                disabled={loading}
                {...register("email")}
              />
              {errors?.email && (
                <span className="error">{errors.email.message}</span>
              )}
            </div>
            <div className="form__item">
              <input
                type="password"
                className="form__input password"
                placeholder="password"
                disabled={loading}
                {...register("password")}
              />
              {errors?.password && (
                <span className="error">{errors.password.message}</span>
              )}
            </div>
            {loading ? (
              <Container
                className="text-center text-white"
                style={{ transform: "scale(1.2)" }}
              >
                <Spinner animation="border" />
              </Container>
            ) : (
              <button className="btn__form">Submit</button>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
