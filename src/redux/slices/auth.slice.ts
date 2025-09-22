import { AuthState } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";
import {
  forgetPasswordThunk,
  loginUserThunk,
  registerUserThunk,
  resetPasswordThunk,
  verifyOtpThunk,
} from "../thunk/auth.thunk";

import { toast } from "sonner";

const initialState: AuthState = {
  loading: false,
  error: null,
  token: null,
  data: null,
  email: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setEmail: (state) => {
      state.email = localStorage.getItem("email") || "";
    },
  },
  extraReducers: (builder) => {
    // login user
    builder
      .addCase(loginUserThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.token = "null";
        toast.success("You are Successfully Logged In", {
          richColors: true,
        });
      })
      .addCase(loginUserThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        toast.error(`${action.payload}`, { richColors: true });
      });

    // register user
    builder
      .addCase(registerUserThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUserThunk.fulfilled, (state, action) => {
        state.loading = false;
        toast.success("Account Created Successfully", {
          richColors: true,
        });
        console.log(action.payload);
        const email = action.payload.message.split(" ").at(-1);
        state.email = email;
        localStorage.setItem("email", email);
      })
      .addCase(registerUserThunk.rejected, (state, action) => {
        state.loading = false;
        console.log(action.payload);
        state.error = action.payload as string;
        toast.error(`${action.payload}`, { richColors: true });
      });

    // Verify Otp
    builder
      .addCase(verifyOtpThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(verifyOtpThunk.fulfilled, (state, action) => {
        state.loading = false;
        toast.success("OTP verified successfully", {
          richColors: true,
        });
      })
      .addCase(verifyOtpThunk.rejected, (state, action) => {
        state.loading = false;
        console.log(action.payload);
        state.error = action.payload as string;
        toast.error(`${action.payload}`, { richColors: true });
      });

    // Forget Password
    builder
      .addCase(forgetPasswordThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(forgetPasswordThunk.fulfilled, (state, action) => {
        state.loading = false;
        toast.success("Password reset link sent to email", {
          richColors: true,
        });
      })
      .addCase(forgetPasswordThunk.rejected, (state, action) => {
        state.loading = false;
        console.log(action.payload);
        state.error = action.payload as string;
        toast.error(`${action.payload}`, { richColors: true });
      });

    // Forget Password
    builder
      .addCase(resetPasswordThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(resetPasswordThunk.fulfilled, (state, action) => {
        state.loading = false;
        toast.success("Password has been changed successfully", {
          richColors: true,
        });
      })
      .addCase(resetPasswordThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        toast.error(`${action.payload}`, { richColors: true });
      });
  },
});

export const { setEmail } = authSlice.actions;
export default authSlice.reducer;
