import { cn } from "@/lib/utils";
import { BookingStatus } from "@/types/types";

const GetBookingStatus: React.FC<{
  status: BookingStatus;
}> = ({ status }) => {
  const colors = {
    SCHEDULED: "bg-amber-600/20 text-amber-700",
    CANCELED: "bg-red-600/20 text-red-700",
    COMPLETED: "bg-emerald-600/20 text-emerald-700",
  };

  return (
    <div className={cn(colors[status], "p-1 rounded-sm text-xs w-fit")}>
      {status}
    </div>
  );
};

export default GetBookingStatus;
