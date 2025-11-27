import * as Yup from "yup";
const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Invalid eamil format"),

    password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
})

export default validationSchema;