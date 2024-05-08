import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import toast from "react-hot-toast";
import style from "./RegisterForm.module.css";
import { Field, Form, Formik } from "formik";

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (data, actions) => {
    dispatch(register(data))
      .then(() => {
        toast.success("Registered successfully");
      })
      .catch((error) => {
        toast.error("Failed to register");
        console.error("Registration error:", error);
      })
      .finally(() => {
        actions.setSubmitting(false);
        actions.resetForm();
      });
  };

  return (
    <div className={style.container}>
      <h2>Register</h2>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
      >
        <Form className={style.form}>
          <label htmlFor="name" className={style.label}>
            Username
            <Field type="text" name="name" className={style.input} />
          </label>
          <label htmlFor="email" className={style.label}>
            Email
            <Field type="email" name="email" className={style.input} />
          </label>
          <label htmlFor="password" className={style.label}>
            Password
            <Field type="password" name="password" className={style.input} />
          </label>
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
