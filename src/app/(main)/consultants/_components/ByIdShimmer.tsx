"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const ByIdShimmer = () => {
  return (
    <section className="min-h-screen py-10 md:py-20 max-w-5xl mx-auto px-4">
      <div className="animate-pulse">
        {/* Back button + heading */}
        <div className="mb-8">
          <div className="h-6 w-32 bg-muted rounded mb-10" />
          <div className="h-10 w-64 bg-muted rounded" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left profile card */}
          <Card className="bg-muted/5 border-emerald-400/10 h-fit">
            <CardContent className="flex flex-col items-center pt-10">
              <div className="h-28 w-28 rounded-full bg-muted mb-4" />
              <div className="h-6 w-32 bg-muted rounded mb-2" />
              <div className="h-4 w-24 bg-muted rounded mb-6" />
              <div className="h-10 w-full bg-muted rounded" />
            </CardContent>
          </Card>

          {/* Right side content */}
          <div className="md:col-span-2 flex flex-col gap-6">
            <Card className="bg-muted/5 border-emerald-400 h-fit">
              <CardContent>
                <div className="h-6 w-48 bg-muted rounded mb-4" />
                <div className="h-4 w-64 bg-muted rounded mb-6" />

                <div className="h-5 w-32 bg-muted rounded mb-3" />
                <div className="h-4 w-full bg-muted rounded mb-4" />
                <Separator className="bg-emerald-600/20 my-4" />
                <div className="h-5 w-36 bg-muted rounded mb-3" />
                <div className="h-4 w-3/4 bg-muted rounded" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ByIdShimmer;
