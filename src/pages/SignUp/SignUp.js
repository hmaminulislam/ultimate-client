import React, { useState } from "react";
import SignUpName from "./SignUpName";
import SignUpNumber from "./SignUpNumber";
import SignUpPassword from "./SignUpPassword";
import "./SignUp.css";
const SignUp = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    first_name: "",
    last_Name: "",
    phone_number: "",
    email: "",
    password: "",
  });
  const componentList = [
    <SignUpName
      page={page}
      setPage={setPage}
      formData={formData}
      setFormData={setFormData}
    />,
    <SignUpNumber
      page={page}
      setPage={setPage}
      formData={formData}
      setFormData={setFormData}
    />,
    <SignUpPassword
      page={page}
      setPage={setPage}
      formData={formData}
      setFormData={setFormData}
    />,
  ];
  return <div>{componentList[page]}</div>;
};

export default SignUp;
