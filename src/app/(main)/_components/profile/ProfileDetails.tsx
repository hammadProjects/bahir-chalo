"use client";

import ConsultantProfileForm from "./ConsultantProfileForm";
import StudentProfileForm from "./StudentProfileForm";

interface Props {
  user: any;
}

const ProfileDetails: React.FC<Props> = ({ user }) => {
  return user?.role === "consultant" ? (
    <ConsultantProfileForm data={user.consultantProfile} />
  ) : (
    user?.role === "student" && (
      <StudentProfileForm data={user.studentProfile} />
    )
  );
};

export default ProfileDetails;
