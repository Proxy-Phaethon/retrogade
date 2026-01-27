import type { ReactNode } from "react";
import "@/app/globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}
