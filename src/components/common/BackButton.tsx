import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface Props {
  title: string;
  url?: string;
  style: string;
}

const BackButton: React.FC<Props> = ({ title, url, style }) => {
  return (
    <Button className={style} size={"sm"} variant={"outline"}>
      <Link href={url || "/"} className="flex gap-1 items-center">
        <ArrowLeft /> {title}
      </Link>
    </Button>
  );
};

export default BackButton;
