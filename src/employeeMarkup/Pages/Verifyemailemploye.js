import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { showToastError, showToastSuccess } from "../../utils/toastify";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";


function VerifyEmailemployee() {
  const navigate = useNavigate();
  const { token } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const verifyEmail = async () => {
      console.log("Token:", token); // Log the token

      try {
        const response = await axios.get(
          `https://api.novajobs.us/api/employee/verify-account/`,
          {
            token 
          }
        );

        console.log(response, "login");
        localStorage.setItem(
          "employeeLoginToken",
          response?.data?.data?.token
        );
       // Dispatch success action
        showToastSuccess("Email verified successfully");
        navigate("/employee");
      } catch (err) {
        console.log(err);
        console.log(err?.response?.data?.message || "Verification failed");
        // Dispatch failure action
        showToastError(err?.response?.data?.message || "Verification failed");
      }
    };

    if (token) {
      verifyEmail();
    } else {
      showToastError("No token found");
      navigate("/employee");
    }
  }, [token, navigate, dispatch]);

  return <div>Verifying...</div>;
}

const mapStateToProps = (state) => {
  return {
    errorMessage: state.auth.errorMessage,
    successMessage: state.auth.successMessage,
    showLoading: state.auth.showLoading,
  };
};

export default connect(mapStateToProps)(VerifyEmailemployee);
