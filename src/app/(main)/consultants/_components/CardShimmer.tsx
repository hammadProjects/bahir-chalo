import { Card, CardContent } from "@/components/ui/card";

const CardShimmer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {Array(3)
        .fill(0)
        .map((_, index) => (
          <Card
            key={index}
            className="animate-pulse bg-muted/6 border-emerald-600/20"
          >
            <CardContent className="flex gap-3 lg:gap-6 animate-pulse">
              {/* Avatar shimmer */}
              <div className="h-10 w-10 lg:h-12 lg:w-12 rounded-full bg-muted" />

              {/* Text shimmer */}
              <div className="flex-1 space-y-2">
                <div className="h-4 w-1/3 bg-muted rounded" />
                <div className="h-3 w-1/4 bg-muted rounded" />
                <div className="h-3 w-2/3 bg-muted rounded" />
                <div className="h-8 w-full bg-muted rounded mt-3" />
              </div>
            </CardContent>
          </Card>
        ))}
    </div>
  );
};

export default CardShimmer;
