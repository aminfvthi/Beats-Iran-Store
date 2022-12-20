import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "../data/validationSchema"
import "./styles/Form.css";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const submitForm = (data) => {
    console.log(data);
  };

  return (
    <div className="container-fluid" style={{ height: "100vh" }}>
      <div className="form-container bg-light mx-auto py-5 px-4">
        <form onSubmit={handleSubmit(submitForm)}>
          <span className="black font-yekan d-block">نام</span>
          <input
            className="w-100 my-2 p-1"
            name="firstName"
            type="text"
            {...register("firstName", {
              required: "Required",
            })}
          />
          <p className="danger text-danger"> {errors.firstName?.message} </p>
          <span className="black font-yekan d-block">نام خانوادگی</span>
          <input
            className="w-100 my-2 p-1"
            name="lastName"
            type="text"
            {...register("lastName", {
              required: "Required",
            })}
          />
          <p className="danger text-danger"> {errors.lastName?.message} </p>
          <span className="black font-yekan d-block">ایمیل</span>
          <input
            className="w-100 my-2 p-1"
            name="email"
            type="email"
            {...register("email", {
              required: "Required",
            })}
          />
          <p className="danger text-danger"> {errors.email?.message} </p>
          <span className="black font-yekan d-block">رمز ورود</span>
          <input
            className="w-100 my-2 p-1"
            name="password"
            type="password"
            {...register("password", {
              required: "Required",
            })}
          />
          <p className="danger text-danger"> {errors.password?.message} </p>
          <span className="black font-yekan d-block">تکرار رمز ورود</span>
          <input
            className="w-100 my-2 p-1"
            name="confirmPassword"
            type="password"
            {...register("confirmPassword", {
              required: "Required",
            })}
          />
          <p className="danger text-danger"> {errors.confirmPassword && "رمز وارد شده باید مشابه باشد"} </p>
          <button
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

export default SignIn;
