import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

const VerifyEmail = () => {
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get('token');
    const email = queryParams.get('email');

    if (token && email) {
      verifyEmail(token, email);
    }
  }, [location]);

  const verifyEmail = async (token, email) => {
    try {
      const response = await fetch(`https://api.novajobs.us/api/admin/auth/vendor/verify?token=${token}&email=${email}`, {
        method: 'GET',
      });

      if (response.ok) {
        toast.success('Email verified successfully! You can now log in.');
      } else {
        toast.error('Email verification failed. Please try again.');
      }
    } catch (error) {
      toast.error('An error occurred during email verification.');
    }
  };

  return (
    <div>
      <h2>Verifying your email...</h2>
      <p>Please wait while we verify your email address.</p>
    </div>
  );
};

export default VerifyEmail;
