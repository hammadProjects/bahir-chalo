import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface Props {
  title: string;
  url?: string;
  style?: string;
}

const BackButton: React.FC<Props> = ({ title, url, style }) => {
  return (
    <Link href={url || "/"}>
      <Button className={style} size={"sm"} variant={"outline"}>
        <ArrowLeft /> {title}
      </Button>
    </Link>
  );
};

export default BackButton;
