"use server";
import api from "@/services/api";
import { UserRoleFormData } from "@/types/types";
import { cookies } from "next/headers";

export async function setUserRole(formData: UserRoleFormData) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) throw Error("Unauthorized");

  const role = formData.get("role");
  if (!role) throw Error("Role is Required");

  try {
    if (role == "student") {
      const data = await api.patch(
        "/student/onboarding",
        {},
        { withCredentials: true, headers: { Authorization: `Bearer ${token}` } }
      );

      console.log(data.data);
      return data.data;
    }
  } catch (error) {
    console.log(error);
    throw Error("Error");
  }
}
