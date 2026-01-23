import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Baahir Chalo - Profile",
  description: "View profile details",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
