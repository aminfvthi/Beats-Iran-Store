import * as yup from "yup";

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("* لطفا ایمیل خود را به صورت صحیح وارد کنید")
    .required("* لطفا ایمیل خود را وارد کنید"),
  password: yup
    .string()
    .required("* لطفا رمز خود را وارد کنید")
    .min(4, "* رمز وارد شده باید حداقل چهار حرف باشد")
    .max(15, "* رمز وارد شده می تواند حداکثر پانزده حرف باشد"),
});
