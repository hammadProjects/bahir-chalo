import { Card } from "@/components/ui/card";

const ProfileSkeleton = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 animate-pulse w-full">
      <Card className="rounded-xl md:w-3/12 p-6 space-y-4">
        <div className="w-24 h-24 mx-auto rounded-full bg-gray-200" />
        <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto" />
        <div className="h-3 bg-gray-200 rounded w-2/3 mx-auto" />
      </Card>

      <Card className="bg-white md:w-9/12 rounded-xl p-6 space-y-6">
        <div className="h-5 bg-gray-200 rounded w-1/3" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="h-10 bg-gray-200 rounded" />
          <div className="h-10 bg-gray-200 rounded" />
          <div className="h-10 bg-gray-200 rounded" />
          <div className="h-10 bg-gray-200 rounded" />
        </div>
        <div className="h-24 bg-gray-200 rounded" />
        <div className="h-12 bg-gray-200 rounded w-40" />
      </Card>
    </div>
  );
};

export default ProfileSkeleton;
