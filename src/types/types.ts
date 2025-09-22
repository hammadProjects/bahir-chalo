import { ParamValue } from "next/dist/server/request/params";

export interface AuthState {
  loading: boolean;
  error: string | null;
  token: string | null;
  data: object | null;
  email: string;
}

export interface LoginUserPayload {
  email: string;
  password: string;
}

export interface RegisterUserPayload extends LoginUserPayload {
  username: string;
}

export interface VerifyOtpPayload {
  email: string;
  optCode: string;
}

export interface ForgetPasswordPayload {
  email: string;
}

export interface ResetPasswordPayload extends ForgetPasswordPayload {
  password: string;
  resetPasswordId: ParamValue;
}

export type Role = "unassigned" | "admin" | "student" | "consultant";

export interface UserRoleFormData {
  role: Role;
}
