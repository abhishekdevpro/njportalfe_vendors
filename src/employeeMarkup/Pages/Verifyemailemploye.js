import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { showToastError, showToastSuccess } from "../../utils/toastify";

function VerifyEmailemployee() {
  const navigate = useNavigate();
  const { token } = useParams();

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        console.log("Token:", token);

        const params = {
          token: token,
        };

        const response = await axios.get(
          "https://api.novajobs.us/api/employee/verify-account/",
          { params }
        );

        console.log(response);

        if (response.data.success && response.data.success.token) {
          localStorage.setItem(
            "employeeLoginToken",
            response.data.success.token
          );
          showToastSuccess("Email verified successfully");
          navigate("/employee");
        } else {
          showToastError("Verification failed");
          navigate("/employee/verify");
        }
      } catch (err) {
        console.error("Verification Error:", err);
        showToastError(err?.response?.data?.message || "Invalid token or email");
        navigate("/employee/verify");
      }
    };

    if (token) {
      verifyEmail();
    } else {
      showToastError("No token found");
      navigate("/employee");
    }
  }, [token, navigate]);

  return <div>Verifying...</div>;
}

export default VerifyEmailemployee;
