import type { Metadata } from "next";

import { METADATA } from "@/@content";
import { variableClassNames } from "@/@design/fonts";

import { cn } from "@/util/cn";

import "../styles/globals.scss";

export const metadata: Metadata = METADATA;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(variableClassNames)}>{children}</body>
    </html>
  );
}
