import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  name: yup.string().required('You should write the store name'),
  direction: yup.string().required('You should write your direction'),
  description: yup.string().required('You should write your description'),
});

export default yupResolver(schema);
