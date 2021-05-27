import { CSSProperties, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { IUser } from "../../auth/helpers/auth.helper";
import { routes } from "../../helpers/routes.helper";
import UsersServices from "../../services/user.service";
import registerResolver from "../../validators/register.resolver";
import { Spinner, Container } from "react-bootstrap";
import "./styles/register.scss";
import { getName } from "../../functions/getName";

const userServices = new UsersServices();

export default function Register() {
  const [loading, setLoading] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);

  const formProps = {
    setIsRegistered,
    setLoading,
    setUser,
  };
  const checkSubTitle = !loading || !isRegistered;
  return (
    <section className="register">
      <div className="register__container">
        <div className="register__header">
          {!isRegistered && (
            <span className="title">
              {!loading ? "Register" : "Registering"}
            </span>
          )}
          {isRegistered && (
            <span className="title">Welcome {getName(user, true)}</span>
          )}
          {checkSubTitle && (
            <span className="sub-title">
              or <Link to={routes.login} children="signin" />
            </span>
          )}
        </div>
        <div className="register__body">
          {loading && (
            <Container
              className="text-center"
              style={{ transform: "scale(1.5)" }}
            >
              <Spinner
                animation="border"
                variant="light"
                style={{ margin: "auto" }}
              />
            </Container>
          )}
          {!isRegistered ? (
            <Form
              className={loading ? { display: "none" } : { display: "flex" }}
              {...formProps}
            />
          ) : (
            <>
              <Container className="text-center text-white">
                <p>
                  Do you want to add more information about you to your account?
                  as your birthday, direction or sex.
                </p>
                <Link to={routes.login} className="btn btn-success">
                  Add information
                </Link>
                <Link to={routes.login} className="btn btn-success">
                  Go to store
                </Link>
              </Container>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

interface IFormProps {
  setLoading: any;
  setIsRegistered: any;
  setUser: any;
  className: CSSProperties;
}

function Form(props: IFormProps) {
  const [localError, setLocalError] = useState<any>(null);

  const { setLoading, className, setIsRegistered, setUser } = props;
  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
  } = useForm({ resolver: registerResolver });
  console.log({ ...errors });
  const onSubmit = (data: any) => {
    setLoading(true);
    setLocalError(null);

    const { names, last_names, password, email }: IUser = data;
    const userToSend: IUser = {
      names,
      last_names,
      password,
      email,
      type: 0,
    };
    if (data.repeat_password !== password) {
      errors.password = { message: "password not match" };
      setLoading(false);
    }
    userServices
      .setUserData(userToSend)
      .then(() => {
        setLoading(false);
        setUser(userToSend);
        setIsRegistered(true);
      })
      .catch(() => {
        setLoading(false);
        setError(
          "email",
          {
            message: "This email is already in use",
          },
          { shouldFocus: true }
        );
      });
  };

  return (
    <>
      <form
        className="register__form"
        onSubmit={handleSubmit(onSubmit)}
        style={className}
      >
        <div className="form__group">
          <div className="form__item">
            <input type="text" placeholder="names" {...register("names")} />
            {errors?.names && (
              <div className="error">{errors.names.message}</div>
            )}
          </div>
          <div className="form__item">
            <input
              type="text"
              placeholder="last names"
              {...register("last_names")}
            />
            {errors?.last_names && (
              <div className="error">{errors.last_names.message}</div>
            )}
          </div>
        </div>

        <div className="form__group">
          <div className="form__item ">
            <input
              type="text"
              className="email"
              placeholder="email"
              {...register("email")}
            />
            {errors?.email ? (
              <div className="error">{errors.email.message}</div>
            ) : (
              localError?.email && (
                <div className="error"> {localError?.email?.message}</div>
              )
            )}
          </div>
        </div>
        <div className="form__group">
          <div className="form__item">
            <input
              type="password"
              className="password"
              placeholder="password"
              {...register("password")}
            />
            {errors?.password && (
              <div className="error">{errors.password.message}</div>
            )}
          </div>
          <div className="form__item">
            <input
              type="password"
              className="repeat-password"
              placeholder="confirm password"
              {...register("repeat_password")}
            />
          </div>
        </div>
        {errors?.repeat_password && (
          <div className="error" style={{ color: "#fff" }}>
            {errors.repeat_password.message}
          </div>
        )}
        <div className="form__group">
          <button type="submit" className="btn__form">
            Continue
          </button>
        </div>
      </form>
    </>
  );
}
