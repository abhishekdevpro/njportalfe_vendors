import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { showToastError, showToastSuccess } from "../../utils/toastify";
import { useParams } from "react-router-dom";

function VerifyEmailemployee() {
  const navigate = useNavigate();
  const { token } = useParams();

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        console.log("Token:", token);
        const response = await axios.get(
          "https://api.novajobs.us/api/employee/verify-account/",
          { headers:{
            "Content-Type": "Application/json",
            Authorization: token,
          } }
        );

        console.log(response);

        if (response.data.success && response.data.success.token) {
          showToastSuccess("Email verified successfully");
          navigate("/employee");
        } else {
          showToastError("Verification failed");
          navigate("/employee");
        }
      } catch (error) {
        console.error("Verification Error:", error);
        showToastError("Invalid token or email");
        navigate("/employee");
      }
    };

    if (token) {
      verifyEmail();
    } else {
      navigate("/employee");
    }
  }, [ navigate]);

  return <div>Verifying...</div>;
}


export default VerifyEmailemployee;
