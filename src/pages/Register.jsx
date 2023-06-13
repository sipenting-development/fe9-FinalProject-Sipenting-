// RegisterPage.js
import React from "react";
import RegisterForm from "../components/FormRegister";
import { AuthProvider } from "../context/AuthContext";
import { Stack } from "react-bootstrap";

const RegisterPage = () => {
  return (
    <div>
      <Stack>
        <AuthProvider>
          <RegisterForm />
        </AuthProvider>
      </Stack>
    </div>
  );
};

export default RegisterPage;