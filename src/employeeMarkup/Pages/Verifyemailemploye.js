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
      try {
       
        
        const response = await axios.get(`https://api.novajobs.us/api/employee/verify-account/${token}`);
        console.log(response)
        if (response.data.success.token) {
          showToastSuccess(response,"Email verified successfully");
          navigate("/employee");
        } else {
          showToastError("Verification failed");
          navigate("/employee/login");
        }
      } catch (error) {
        console.error("Verification Error:", error);
        showToastError("Invalid token or email");
        navigate("/employee/login");
      }
    };

    verifyEmail();
  }, [token, navigate]);

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
