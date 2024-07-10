import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { showToastError, showToastSuccess } from "../../utils/toastify";

function VerifyEmail() {
  const navigate = useNavigate();
  const { token } = useParams(); // Extract token from URL parameters
  console.log("Extracted token from URL params:", token);

  useEffect(() => {
    const verifyEmail = async () => {
      console.log("Token:", token); // Log the token

      const formData = new FormData();
      formData.append("token", token);

      await axios({
        method: "GET",
        url: "https://api.novajobs.us/api/jobseeker/verify-account/",
        data: formData,
      })
        .then((response) => {
          console.log(response, "verification");
          if (response.data.success && response.data.success.token) {
            localStorage.setItem(
              "jobSeekerLoginToken",
              response.data.success.token
            );
            showToastSuccess("Email verified successfully");
            navigate("/user");
          } else {
            showToastError("Verification failed");
            navigate("/user/verify");
          }
        })
        .catch((err) => {
          console.log(err);
          showToastError(err?.response?.data?.message || "Invalid token or email");
          navigate("/user/verify");
        });
    };

    verifyEmail();
  }, [token, navigate]);

  return <div>Verifying...</div>;
}

export default VerifyEmail;
