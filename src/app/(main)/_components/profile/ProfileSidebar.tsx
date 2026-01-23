"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface Props {
  user: {
    username: string;
    email: string;
    role: string;
    profilePicture?: string;
  };
}

const ProfileSidebar: React.FC<Props> = ({ user }) => {
  return (
    <Card className="w-full md:w-[320px]">
      <CardContent className="flex flex-col items-center gap-4 py-6">
        <Avatar className="w-28 h-28">
          <AvatarImage src={user?.profilePicture} />
          <AvatarFallback>{user?.username[0].toUpperCase()}</AvatarFallback>
        </Avatar>

        <div className="text-center">
          <h2 className="text-xl font-bold capitalize">{user?.username}</h2>
          <p className="text-sm text-muted-foreground">{user?.email}</p>
        </div>

        <Badge variant="secondary" className="capitalize">
          {user?.role}
        </Badge>
      </CardContent>
    </Card>
  );
};

export default ProfileSidebar;
