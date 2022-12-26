import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidationSchema } from "../data/loginValidationSchema";
import "./styles/Form.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginValidationSchema),
  });

  const user = {
    email: email,
    password: password,
  };

  const submitForm = () => {
    setIsFetching(true);
    axios
      .post("https://reqres.in/api/login", user)
      .then((response) => {
        setIsFetching(false);
        console.log(response);
      })
      .catch((error) => {
        setLoginError("ایمیل یا رمز وارد شده نادرست می باشد");
        setIsFetching(false);
        console.log(error);
      });
  };

  return (
    <div className="container-fluid" style={{ height: "150vh" }}>
      <div className="form-container bg-light mx-auto py-5 px-4">
        {loginError.length !== 0 && (
          <div className="alert alert-danger">{loginError}</div>
        )}
        <form onSubmit={handleSubmit(submitForm)}>
          <span className="black font-yekan d-block">ایمیل</span>
          <input
            className="w-100 my-2 p-1"
            name="email"
            type="email"
            {...register("email", {
              onChange: (e) => setEmail(e.target.value),
            })}
          />
          <p className="danger text-danger"> {errors.email?.message} </p>
          <span className="black font-yekan d-block">رمز عبور</span>
          <input
            className="w-100 my-2 p-1"
            name="password"
            type="password"
            {...register("password", {
              onChange: (e) => setPassword(e.target.value),
            })}
          />
          <p className="danger text-danger"> {errors.password?.message} </p>
          <button
            disabled={isFetching}
            type="submit"
            className="w-100 py-2 px-3 my-3 font-yekan text-white"
          >
            ورود
          </button>
          <Link to="/sign-up">
            <span className="font-yekan">
              حساب کاربری ندارید؟ (ایجاد حساب جدید)
            </span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
