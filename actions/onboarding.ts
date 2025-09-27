"use server";
import api from "@/services/api";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// (todo) - why do we use form data instead of just passing data as it is?

export async function setUserRole(formData: FormData) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) throw Error("Unauthorized");

  const role = formData.get("role");
  if (!role) throw Error("Role is Required");

  try {
    console.log("role from onboarding server action", role);
    if (role == "student") {
      const data = await api.patch(
        "/student/onboarding",
        {},
        { withCredentials: true, headers: { Authorization: `Bearer ${token}` } }
      );

      // redirect("/student");
      return data.data;
    } else if (role == "consultant") {
      const experience = formData.get("experience");
      // const;
    }
  } catch (error) {
    console.log(error);
    throw Error("Error");
  }
}
