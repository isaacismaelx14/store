import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  email: yup.string().required('You should write your email').email('This email is not valid'),
  password: yup.string().required('You should write your password'),
});

export default yupResolver(schema);
