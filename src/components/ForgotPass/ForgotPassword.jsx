import React, { useState } from 'react';
import axios from 'axios';
import { alertMessage, alertMessageError } from '../../ulti/modals';

import './forgotPassword.css';

const ForgotPasswordForm = () => {
   const [email, setEmail] = useState('');

   const handleSubmit = async (e) => {
      e.preventDefault();

      try {
         const response = await axios.post(
            `http://localhost:4000/auth/login/reset-password`,
            { email }
         );

         if (response.data.success) {
            alertMessage(response.data.message);
         } else {
            alertMessageError(response.data.message);
         }
      } catch (error) {
         console.error('An error occurred:', error.message);
      }
   };

   return (
      <div className='forgot-password-form-container'>
         <form onSubmit={handleSubmit} className='forgot-password-form'>
            <label>
               Email:
               <input
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
               />
            </label>
            <button type='submit'>Send Request</button>
         </form>
      </div>
   );
};

export default ForgotPasswordForm;
