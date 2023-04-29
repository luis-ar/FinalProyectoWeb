import React from "react";

import { GoogleLogin } from "@react-oauth/google";
import decodeJwt from "../utils.jsx/decodeJwt";
const GoogleAuth = () => {
  const onSuccess = (credentialResponse) => {
    if (credentialResponse.credential) {
      const { payload } = decodeJwt(credentialResponse.credential);
      console.log(payload);
    }
  };

  const onFailure = (error) => {
    console.log("Google authentication failed!", error);
  };

  return (
    <GoogleLogin
      logo_alignment="center"
      size="large"
      theme="filled_blue"
      text="continuar con google"
      type="standard"
      onSuccess={onSuccess}
      onFailure={onFailure}
    />
  );
};

export default GoogleAuth;
