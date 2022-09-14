import React from "react";
import { Formik, Field, Form } from "formik";
export default function Signup() {
  const validateForm = (values) => {
    const errors = {};

    if (!values.username) {
      errors.username = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.username)
    ) {
      errors.username = "Invalid email address";
    }

    if (!values.password1) {
      errors.password1 = "Password is required";
    } else if (values.password1.length <= 8) {
      errors.password1 = "Must be 8 characters or more";
    }
    if (!values.password2) {
      errors.password2 = "Password is required";
    } else if (values.password2.length <= 8) {
      errors.password2 = "Must be 8 characters or more";
    }
    if (
      values.password1.length > 8 &&
      values.password2.length > 8 &&
      values.password1 !== values.password2
    ) {
      errors.password2 = "Passwords don't match!";
    }
    return errors;
  };
  return (
    <div
      style={{
        height: "90vh",
      }}
      class="container p-3"
    >
      <div class="row h-100">
        <div class="col-md-6 my-auto">
          <h1>VIT Question Papers</h1>
          <h3>Get started with your free account!</h3>
        </div>
        <div class="col-md-6 my-auto">
          <Formik
            initialValues={{
              username: "",
              password1: "",
              password2: "",
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 1000);
            }}
            validate={validateForm}
          >
            {(formik, isSubmitting) => (
              <Form class="border p-2 rounded shadow-lg">
                <div class="row gy-3 mb-1">
                  <h2 class="text-center">Sign up</h2>
                </div>
                <div className="form-group">
                  <label htmlFor="name">Username</label>
                  <Field
                    name="username"
                    className={
                      formik.touched.username && formik.errors.username
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                    type="email"
                  />

                  {formik.touched.username && formik.errors.username ? (
                    <div className="invalid-feedback">
                      {formik.errors.username}
                    </div>
                  ) : null}
                </div>

                <div className="form-group">
                  <label htmlFor="password1">Password</label>
                  <Field
                    name="password1"
                    className={
                      formik.touched.password1 && formik.errors.password1
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                    type="password"
                  />

                  {formik.touched.password1 && formik.errors.password1 ? (
                    <div className="invalid-feedback">
                      {formik.errors.password1}
                    </div>
                  ) : null}
                </div>

                <div className="form-group">
                  <label htmlFor="password2">Confirm password</label>
                  <Field
                    name="password2"
                    className={
                      formik.touched.password2 && formik.errors.password2
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                    type="password"
                  />

                  {formik.touched.password2 && formik.errors.password2 ? (
                    <div className="invalid-feedback">
                      {formik.errors.password2}
                    </div>
                  ) : null}
                </div>

                <div className="form-group">
                  <div class="row gy-3 mt-2 mb-3 justify-content-center">
                    <div class="col-md-6 text-center">
                      <button
                        type="submit"
                        className="btn btn-primary w-100"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Please wait..." : "Submit"}
                      </button>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
