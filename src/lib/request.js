import axios from "axios";
import { TOKEN } from "./localstorage";
const headers = {
  Authorization: `Bearer ${localStorage.getItem(TOKEN)}`,
};

const BASE_URL = "http://localhost:4000/api";

export const request = axios.create({ baseURL: `${BASE_URL}`, headers });
export const endpoints = {
  auth: {
    loginWithPhoneNumber: `/users/signin-with-phone-number`,
    verifyLoginWithOtp: `/users/verify-signin-with-otp`,
    resetOtp: `/users/resend-otp`,
    registerWithPhoneNumber: `/users/register-with-phone-number`,
    verifyRegistrationWithOtp: `/users/verify-register-otp`,
    setPassword: `/users/register-set-password`,
    currentUser: `/users/currentuser`,
    updateProfile: `/users/update-profile`,
    requestPasswordReset: `/users/request-password-rest`,
    resetYourPassword: `users/rest-password`,
    currentUserResetPassword: `users/current-user-reset-password`,
    adminUsersList: `users/by-admin`,
  },
  transactions: {
    createTransaction: `/transactions`,
    verifyPayment: `/transactions/verifypayment`,
    user: `/transactions`,
    singleTransaction: (transactionId) => `/transactions/${transactionId}`,
  },
  notifications: {
    userNotification: `/notifications`,
  },
  assets: {
    main: `/assets`,
    single: (assetId) => `/assets/${assetId}`,
    convert: `/currency/conversion`,
  },
  settings: {
    main: `/settings`,
    banks: `/banks/list`,
  },
  uploads: {
    photo: `/helpers/photos-uploads`,
  },
  support: {
    messages: `/support/messages`,
  },
};
