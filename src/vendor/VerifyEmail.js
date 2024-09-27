import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import { ToastContainer } from "react-toastify";
import { showToastError, showToastSuccess } from "../utils/toastify";

const VerifyEmail = () => {
  const navigate = useNavigate();
  const { token } = useParams();

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await axios.get(`https://api.novajobs.us/api/admin/verify-account/token=${token}`);
        console.log(response)
        if (response) { 
          showToastSuccess("Email verified successfully");
          navigate("/user/login");
        } else {
          showToastError("Email verification failed");
          navigate("/vendor/login");
        }
      } catch (error) {
        console.error("Verification Error:", error);
        showToastError("Invalid token or email");
        navigate("/vendor/login");
      }
    };

    verifyEmail();
  }, [token, navigate]);

  return (
    <div>Verifying...
      <ToastContainer/>
    </div>
  );
}

export default VerifyEmail;
