import * as yup from "yup";

export const validationSchema = yup.object().shape({
    firstName: yup.string()
    .required("* لطفا نام خود را وارد کنید"),
    lastName: yup.string()
    .required("* لطفا نام خانوادگی خود را وارد کنید"),
    email: yup
      .string()
      .email("* لطفا ایمیل خود را به صورت صحیح وارد کنید")
      .required("* لطفا ایمیل خود را وارد کنید"),
    password: yup
      .string()
      .min(4, "* رمز وارد شده باید حداقل چهار حرف باشد")
      .max(15, "* رمز وارد شده می تواند حداکثر پانزده حرف باشد")
      .required(),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
  });
  