import { Card, CardContent } from "@/components/ui/card";

const Shimmer = () => {
  const dummy = Array(4).fill(0);
  return (
    <div className="space-y-4 mt-4">
      {dummy.map((_, index) => (
        <Card key={index}>
          <CardContent className="flex justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-md bg-gradient-to-r from-gray-300 to-gray-200 animate-pulse"></div>
              <div>
                <div className="h-4 bg-gray-300 rounded w-32 animate-pulse"></div>
                <div className="h-3 bg-gray-200 rounded w-24 mt-2 animate-pulse"></div>
              </div>
            </div>

            <div className="flex gap-2 items-center">
              <div className="h-6 bg-gray-300 rounded w-24 animate-pulse"></div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
export default Shimmer;
