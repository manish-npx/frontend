import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import IUser from "../types/user.type";
import { register } from "../services/auth.service";
import { Alert, Card, Col, Container, Row } from "react-bootstrap";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";

const Register: React.FC = () => {

  const navigate: NavigateFunction = useNavigate();

  const [successful, setSuccessful] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  //const [validationErrorMessage, setValidationErrorMessage] = useState<string>("");

  /* Typescript type check */
  const initialValues: IUser = {
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .test(
        "len",
        "The name must be between 3 and 20 characters.",
        (val: any) =>
          val &&
          val.toString().length >= 3 &&
          val.toString().length <= 20
      )
      .required("This field is required!"),
    email: Yup.string()
      .email("This is not a valid email.")
      .required("This field is required!"),
    password: Yup.string()
      .test(
        "len",
        "The password must be between 6 and 40 characters.",
        (val: any) =>
          val &&
          val.toString().length >= 6 &&
          val.toString().length <= 40
      ),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match')
      .test(
        "len",
        "The password must be between 6 and 40 characters.",
        (val: any) =>
          val &&
          val.toString().length >= 6 &&
          val.toString().length <= 40
      )
      .required("This field is required!"),
  });

  const handleRegister = (formValue: IUser) => {
    const { name, email, password, confirmPassword } = formValue;

    register(name, email, password, confirmPassword).then(
      (response) => {
        setMessage(response.data.message);
        setSuccessful(true);
        setTimeout(() => {
          navigate('/login');
        }, 3000);
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        //  const errorsMessage = (error.response && error.response.data && error.response.data.errors);
        // setValidationErrorMessage(errorsMessage);
        setMessage(resMessage);
        setSuccessful(false);
      }
    );
  };

  return (

    <>
      <section className="bg-home d-flex align-items-center">
        <Container>
          <Row className="align-items-center">
            <Col lg={7} md={6}>
              <div className="me-lg-5">
                <img src="https://shreethemes.in/landrick/landing/assets/images/user/login.svg" className="img-fluid d-block mx-auto" alt="" />
              </div>
            </Col>
            <Col lg={5} md={6}>
              <Card className="login-page bg-white rounded">
                <Card.Body>
                  <Card.Title className="text-center">Register</Card.Title>
                  <div className="login-page bg-white rounded">
                    <Col md={12} mb={3}>

                      <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleRegister}
                      >
                        <Form className="login-form mt-4">
                          <Row className="row">
                            <div className="col-lg-12">
                              {!successful && (
                                <div>
                                  <div className="mb-3">
                                    <label htmlFor="name"> Name </label>
                                    <Field name="name" type="text" className="form-control" />
                                    <ErrorMessage
                                      name="name"
                                      component="div"
                                      className="alert alert-danger mt-1"
                                    />
                                  </div>

                                  <div className="mb-3">
                                    <label htmlFor="email"> Email </label>
                                    <Field name="email" type="email" className="form-control" />
                                    <ErrorMessage
                                      name="email"
                                      component="div"
                                      className="alert alert-danger mt-1"
                                    />
                                  </div>

                                  <div className="form-group mb-3">
                                    <label htmlFor="password"> Password </label>
                                    <Field
                                      name="password"
                                      type="password"
                                      className="form-control"
                                    />
                                    <ErrorMessage
                                      name="password"
                                      component="div"
                                      className="alert alert-danger mt-1"
                                    />
                                  </div>
                                  
                                  <div className="form-group mb-3">
                                    <label htmlFor="password">Confirm Password </label>
                                    <Field
                                      name="confirmPassword"
                                      type="password"
                                      className="form-control"
                                    />
                                    <ErrorMessage
                                      name="confirmPassword"
                                      component="div"
                                      className="alert alert-danger mt-1"
                                    />
                                  </div>

                                  <div className="form-group">
                                    <button type="submit" className="btn btn-primary btn-block w-100">Sign Up</button>
                                  </div>
                                </div>
                              )}

                              {message && (
                                <>
                                  <Alert variant={successful ? "success" : "danger"}>
                                    {message}
                                  </Alert>
                                  <p className="text-center">Redirecting to <Link to='/login' >Login</Link>...</p>
                                </>
                              )}

                            </div>
                          </Row>
                        </Form>
                      </Formik>
                    </Col >
                  </div>
                </Card.Body>
                <div className="col text-center">
                  <p>Existing User?  <Link className='text-info' to="/login" >Login</Link></p>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Register;
