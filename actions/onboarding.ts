"use server";
import { generateError } from "@/lib/utils";
import api from "@/services/api";
import { OnboardingResponse } from "@/types/types";

// (todo) - why do we use form data instead of just passing data as it is?

export async function setUserRole(formData: FormData) {
  const role = formData.get("role");
  if (!role) throw Error("Role is Required");
  if (role != "student" && role != "consultant") throw Error("Role is invalid");

  try {
    if (role == "student") {
      const res = await api.patch<OnboardingResponse>(
        "/student/onboarding",
        {},
        { withCredentials: true }
      );
      const { success, message } = res.data;
      return { success, message, url: "/student" };
    }
    const experience = formData.get("experience");
    // const ceritificateUrl = formData.get("ceritificateUrl");
    const certificateUrl = "http://localhost:3000/onboarding";
    const bio = formData.get("bio");

    // const payload = { bio, role, ceritificateUrl, experience };
    const payload = { bio, certificateUrl, experience };

    const {
      data: { success, message },
    } = await api.patch<OnboardingResponse>("/consultant/onboarding", payload, {
      withCredentials: true,
    });

    return { success, message, url: "/consultant/verification" };
  } catch (error) {
    const message = generateError(error);

    return {
      success: false,
      message,
    };
  }
}
