import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  names: yup.string().required('You should write your name'),
  last_names: yup.string().required('You should write your last name'),
  email: yup.string().required('You should write your email').email('This email is not valid'),
  password: yup.string().required('You should write your password').min(6, 'Shuold be more of 6 caracters'),
  repeat_password: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')

});

export default yupResolver(schema);
