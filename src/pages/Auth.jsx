import React, { useMemo } from "react";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";

import { Formik, Form } from "formik";
// import styled from "styled-components";
import { Button, Input } from "@components/UI";
import {
  MainWrapper,
  InputWrapper,
  BtnWrapper,
  // Input,
  ErrorText,
  FormWrapper,
} from "@styles";
import { Main } from "../widgets/main";
import { Header } from "../widgets/header";

const Auth = () => {
  const initialValues = {
    email: "",
    password: "",
    passwordConfirm: "",
  };
  // const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();

  console.log("initialValues", initialValues);
  // console.log("history", navigate);
  console.log("params", params);
  console.log("location", location);

  const isLoginPage = useMemo(() => {
    return location.pathname === "/login";
  }, [location]);

  const handleSubmit = async (values, { resetForm }) => {
    console.log("values", values);
    await axios.post(
      isLoginPage
        ? "http://localhost:7000/api/user/login"
        : "http://localhost:7000/api/user/register",
      values
    );
    resetForm();
  };

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!isLoginPage) {
      if (!values.passwordConfirm) {
        errors.passwordConfirm = "Required";
      } else if (values.passwordConfirm !== values.password) {
        errors.passwordConfirm = "Passwords don`t match";
      }
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length > 20 || values.password.length < 8) {
      errors.password = "Must be more 8 and less 20 characters";
    }

    return errors;
  };

  return (
    <>
      {/* <Header /> */}
      <Main back="#c98787">
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validate={validate}
          // onReset={handleReset}
          enableReinitialize
        >
          {({
            values,
            handleChange,
            handleBlur,
            isSubmitting,
            errors,
            touched,
          }) => {
            return (
              <FormWrapper>
                <Form>
                  {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
                  <InputWrapper>
                    <Input
                      type="email"
                      name="email"
                      placeholder={
                        isLoginPage ? "Enter login or email" : "Enter email"
                      }
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    {errors.email && touched.email && (
                      <ErrorText>{errors.email}</ErrorText>
                    )}
                  </InputWrapper>
                  <InputWrapper>
                    <Input
                      type="password"
                      name="password"
                      placeholder="Enter password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    {errors.password && touched.password && (
                      <ErrorText>{errors.password}</ErrorText>
                    )}
                  </InputWrapper>
                  {!isLoginPage && (
                    <InputWrapper>
                      <Input
                        type="password"
                        name="passwordConfirm"
                        placeholder="Confirm password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.passwordConfirm}
                      />
                      {errors.passwordConfirm && touched.passwordConfirm && (
                        <ErrorText>{errors.passwordConfirm}</ErrorText>
                      )}
                    </InputWrapper>
                  )}
                  <BtnWrapper>
                    <Button
                      disabled={isSubmitting}
                      // align="self-end"
                      back="#cecece"
                    >
                      {isLoginPage ? "Log in" : "Sign up"}
                    </Button>
                  </BtnWrapper>
                </Form>
              </FormWrapper>
            );
          }}
        </Formik>
      </Main>
    </>
  );
};

export default Auth;
