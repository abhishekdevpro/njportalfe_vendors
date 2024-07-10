import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { showToastError, showToastSuccess } from "../../utils/toastify";

function VerifyEmailemployee() {
  const navigate = useNavigate();
   const token = localStorage.getItem("employeeLoginToken");  // Replace with your token retrieval logic

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await axios.get(
          "https://api.novajobs.us/api/employee/verify-account/",
          { 
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log(response);

        if (response.data.success) {
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

    verifyEmail();
  }, [token, navigate]);

  return <div>Verifying...</div>;
}

export default VerifyEmailemployee;
