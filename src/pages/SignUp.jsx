import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpValidationSchema } from "../data/signUpValidationSchema";
import "./styles/Form.css";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUpError, setSignUpError] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpValidationSchema),
  });

  const user = {
    first_name: firstName,
    last_name: lastName,
    email: email,
    password: password,
  };

  const submitForm = () => {
    setIsFetching(true);
    axios
      .post("https://reqres.in/api/users", user)
      .then((response) => {
        setIsFetching(false);
        console.log(response.data);
      })
      .catch((error) => {
        setSignUpError("ارتباط با سرور برقرار نشد. لطفا مجددا تلاش کنید");
        setIsFetching(false);
        console.log(error);
      });
  };

  return (
    <div className="container-fluid" style={{ height: "150vh" }}>
      <div className="form-container bg-light mx-auto py-5 px-4">
        {signUpError.length !== 0 && (
          <div className="alert alert-danger">{signUpError}</div>
        )}
        <form onSubmit={handleSubmit(submitForm)}>
          <span className="black font-yekan d-block">نام</span>
          <input
            className="w-100 my-2 p-1"
            name="firstName"
            type="text"
            {...register("firstName", {
              onChange: (e) => setFirstName(e.target.value),
            })}
          />
          <p className="danger text-danger"> {errors.firstName?.message} </p>
          <span className="black font-yekan d-block">نام خانوادگی</span>
          <input
            className="w-100 my-2 p-1"
            name="lastName"
            type="text"
            {...register("lastName", {
              onChange: (e) => setLastName(e.target.value),
            })}
          />
          <p className="danger text-danger"> {errors.lastName?.message} </p>
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
          <span className="black font-yekan d-block">رمز ورود</span>
          <input
            className="w-100 my-2 p-1"
            name="password"
            type="password"
            {...register("password", {
              onChange: (e) => setPassword(e.target.value),
            })}
          />
          <p className="danger text-danger"> {errors.password?.message} </p>
          <span className="black font-yekan d-block">تکرار رمز ورود</span>
          <input
            className="w-100 my-2 p-1"
            name="confirmPassword"
            type="password"
            {...register("confirmPassword")}
          />
          <p className="danger text-danger">
            {errors.confirmPassword && "* رمز وارد شده باید مشابه باشد"}
          </p>
          <button
            disabled={isFetching}
            type="submit"
            className="w-100 py-2 px-3 my-3 font-yekan text-white"
          >
            ایجاد حساب
          </button>
          <Link to="/Login">
            <span className="font-yekan">از قبل حساب کاربری دارید؟ (ورود)</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
