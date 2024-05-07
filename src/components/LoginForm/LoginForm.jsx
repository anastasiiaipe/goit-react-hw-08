import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { Field, Form, Formik } from "formik";

import style from "./LoginForm.module.css";

const initialFormLogin = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialFormLogin} onSubmit={handleSubmit}>
      <Form className={style.form} autoComplete="off">
        <label className={style.label}>
          Email
          <Field type="email" name="email" className={style.input} />
        </label>
        <label className={style.label}>
          Password
          <Field type="password" name="password" className={style.input} />
        </label>
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
