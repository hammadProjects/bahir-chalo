import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/services/api";
import {
  ForgetPasswordPayload,
  LoginUserPayload,
  RegisterUserPayload,
  ResetPasswordPayload,
  VerifyOtpPayload,
} from "@/types/types";

export const loginUserThunk = createAsyncThunk(
  "auth/login",
  async (payload: LoginUserPayload, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/sign-in", payload);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message || "Failed to Login"
      );
    }
  }
);

export const registerUserThunk = createAsyncThunk(
  "auth/register",
  async (payload: RegisterUserPayload, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/sign-up", payload);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message || "Failed to Register. Please Try Again"
      );
    }
  }
);

export const verifyOtpThunk = createAsyncThunk(
  "auth/otp-verify",
  async (payload: VerifyOtpPayload, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/otp/verify", payload);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message ||
          "Failed to Verify OTP. Please Try Again"
      );
    }
  }
);

export const otpResendThunk = createAsyncThunk(
  "auth/otp-resend",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/otp/resend", payload);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message || "Failed to Resend OTP"
      );
    }
  }
);

export const forgetPasswordThunk = createAsyncThunk(
  "auth/forget-password",
  async (payload: ForgetPasswordPayload, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/forget-password", payload);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message || "Failed to Forget Password"
      );
    }
  }
);

export const resetPasswordThunk = createAsyncThunk(
  "auth/reset-password",
  async (payload: ResetPasswordPayload, { rejectWithValue }) => {
    try {
      const { resetPasswordId } = payload;
      const response = await api.post(
        `/auth/reset-password/${resetPasswordId}`,
        payload
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message || "Failed to Reset Password"
      );
    }
  }
);
