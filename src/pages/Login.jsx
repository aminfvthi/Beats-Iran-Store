import React from "react";
import { Link } from "react-router-dom";
import "./styles/Form.css";

const Account = () => {
  return (
    <div className="container-fluid" style={{ height: "100vh" }}>
      <div className="form-container bg-light mx-auto py-5 px-4">
        <form action="">
          <span className="black font-yekan d-block">ایمیل</span>
          <input className="w-100 my-2 p-1" type="email" />
          <span className="black font-yekan d-block">رمز عبور</span>
          <input className="w-100 my-2 p-1" type="password" />
          <button className="w-100 py-2 px-3 my-3 font-yekan text-white">
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

export default Account;
