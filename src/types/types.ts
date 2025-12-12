import { ParamValue } from "next/dist/server/request/params";

// API Payload Types
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

export interface UserSchema {
  _id: string;
  username: string;
  email: string;
  otpVerified: boolean;
  role: "student" | "consultant" | "admin" | "unassigned";
  credits: number;

  createdAt: Date;
  updatedAt: Date;
}

export interface Consultant extends UserSchema {
  consultantProfile: {
    bio: string;
    certificateUrl: string;
    status: "pending" | "approved" | "rejected";
    experience: number;
  };
}

export interface BookingSchema {
  _id: string;
  availabilityId: Availability;
  consultantId: Consultant;
  studentId: UserSchema;
  status: BookingStatus;
  notes: string;
  startTime: Date;
  endTime: Date;
  meetingId: string;
  createdAt: Date;
  updatedAt: Date;
}

export type BookingStatus = "SCHEDULED" | "CANCELED" | "COMPLETED";

export interface Availability {
  _id: string;
  consultantId: string;
  startTime: Date;
  endTime: Date;
}

export interface TimeSlot {
  availabilityId: string;
  consultantId: string;
  startTime: Date;
  endTime: Date;
}

// Backend Response Types
export interface OnboardingResponse {
  success: boolean;
  message: string;
}

export interface UseFetchData {
  success: boolean;
  message: string;
  url?: string;
  hideResponse?: boolean;
}

export interface PaginationSchema {
  bookings: BookingSchema[];
  totalBookings: number;
  totalPages: number;
  hasPrev: boolean;
  hasNext: boolean;
  currentPage: number;
}
