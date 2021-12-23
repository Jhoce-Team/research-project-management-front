import React from "react";
import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import { useLoggedContext } from "../context/loggedContext";
import { useMutation } from "@apollo/client";
import { VALIDATE_TOKEN } from "../graphql/ingress/ingressMutations";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Loading from "../components/Loading";

const General = () => {
  const navigate = useNavigate();
  const { setToken } = useLoggedContext();
  const [
    validateToken,
    {
      data: validateTokenData,
      loading: validateTokenLoading,
      error: validateTokenError,
    },
  ] = useMutation(VALIDATE_TOKEN);

  useEffect(() => {
    validateToken();
  }, [validateToken]);

  useEffect(() => {
    if (validateTokenData) {
      if (validateTokenData.validateToken.token) {
        setToken(validateTokenData.validateToken.token);
      } else {
        setToken(null);
        navigate("/ingress/login");
      }
    }
  }, [validateTokenData, setToken, navigate]);

  if (validateTokenLoading) {
    return <Loading />;
  }

  return (
    <div className="h-full min-h-screen flex flex-col sm:flex-row w-full min-w-screen max-w-screen">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default General;
