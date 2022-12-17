import React from "react";
import { Link } from "react-router-dom";
import "./styles/Form.css";

const SignIn = () => {
  return (
    <div className="container-fluid" style={{ height: "100vh" }}>
      <div className="form-container bg-light mx-auto py-5 px-4">
        <form action="">
          <span className="black font-yekan d-block">نام</span>
          <input className="w-100 my-2 p-1" type="text" />
          <span className="black font-yekan d-block">نام خانوادگی</span>
          <input className="w-100 my-2 p-1" type="text" />
          <span className="black font-yekan d-block">ایمیل</span>
          <input className="w-100 my-2 p-1" type="email" />
          <span className="black font-yekan d-block">رمز ورود</span>
          <input className="w-100 my-2 p-1" type="password" />
          <span className="black font-yekan d-block">تکرار رمز ورود</span>
          <input className="w-100 my-2 p-1" type="password" />
          <button className="w-100 py-2 px-3 my-3 font-yekan text-white">
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
