import React, { useState } from "react";
import { Link, NavigateFunction, useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { login } from "../services/auth.service";

type Props = object

const Login: React.FC<Props> = () => {

  const navigate: NavigateFunction = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const initialValues: {
    email: string;
    password: string;
  } = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("This field is required!"),
    password: Yup.string().required("This field is required!"),
  });

  const handleLogin = (formValue: { email: string; password: string }) => {

    const { email, password } = formValue;

    setMessage("");
    setLoading(true);


    login(email, password).then(
      () => {
        navigate("/dashboard");
        console.log('', localStorage.getItem("token"));
      },
      (error) => {
        console.log('login error', error)
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setLoading(false);
        setMessage(resMessage);
      }
    );
  };

  return (
    <>
      <section className="bg-home d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-6">
              <div className="me-lg-5">
                <img src="https://shreethemes.in/landrick/landing/assets/images/user/login.svg" className="img-fluid d-block mx-auto" alt="" />
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="card login-page bg-white rounded">
                <div className="card-body">
                  <h4 className="card-title text-center">Login</h4>
                  <div className="login-page bg-white rounded">

                    <Formik
                      initialValues={initialValues}
                      validationSchema={validationSchema}
                      onSubmit={handleLogin}
                    >
                      <Form className="login-form mt-4">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="mb-3">
                              <label htmlFor="email">Email</label>
                              <Field name="email" type="text" className="form-control" />
                              <ErrorMessage
                                name="email"
                                component="div"
                                className="alert alert-danger"
                              />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="password">Password</label>
                              <Field name="password" type="password" className="form-control" />
                              <ErrorMessage
                                name="password"
                                component="div"
                                className="alert alert-danger"
                              />
                            </div>

                            <div className="mb-3">
                              <button type="submit" className="btn btn-ld btn-primary w-100" disabled={loading}>
                                {loading && (
                                  <span className="spinner-border spinner-border-sm"></span>
                                )}
                                <span>Login</span>
                              </button>
                            </div>

                            {message && (
                              <div className="form-group">
                                <div className="alert alert-danger" role="alert">
                                  {message}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </Form>
                    </Formik>
                    <div className="col text-left">
                      <p>New to Horizan?  <Link className='text-info' to="/register" >Create an account</Link></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  );
};

export default Login;
