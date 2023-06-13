// LoginPage.js
import React from "react";
import { useContext } from "react";
import LoginForm from "../components/FormLogin";
import { AuthProvider } from "../context/AuthContext";
import { Stack } from "react-bootstrap";

const LoginPage = () => {
  return (
    <div>
      <Stack gap={3}>
        <AuthProvider>
          <LoginForm />
        </AuthProvider>
      </Stack>
    </div>
  );
};

export default LoginPage;