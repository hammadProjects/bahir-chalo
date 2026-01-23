"use client";
import ProfileDetails from "../_components/profile/ProfileDetails";
import ProfileSidebar from "../_components/profile/ProfileSidebar";
import { useQuery } from "@tanstack/react-query";
import api from "@/services/api";
import ProfileSkeleton from "../_components/profile/ProfileSkeleton";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const router = useRouter();
  const {
    data: user,
    isLoading: loading,
    error,
  } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const res = await api.get("/me");
      return res.data?.data?.user;
    },
  });

  return (
    <div className="py-10 px-6 sm:px-10 md:px-24 flex flex-col md:flex-row gap-6">
      {loading ? (
        <ProfileSkeleton />
      ) : error ? (
        <div className="flex flex-col space-y-2 mx-auto">
          {error?.message}
          <Button onClick={() => router.push("/profie")}>Refresh</Button>
        </div>
      ) : (
        <>
          <ProfileSidebar user={user} />
          <ProfileDetails user={user} />
        </>
      )}
    </div>
  );
};

export default ProfilePage;
