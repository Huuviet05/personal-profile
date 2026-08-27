import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nguyễn Hữu Việt | Full-Stack Developer",
  description:
    "Portfolio cá nhân của Nguyễn Hữu Việt - Full-Stack Developer với niềm đam mê xây dựng các sản phẩm web hiện đại, đẹp mắt và hiệu suất cao.",
  keywords: ["developer", "full-stack", "react", "nextjs", "portfolio", "web developer"],
  authors: [{ name: "Nguyễn Hữu Việt" }],
  openGraph: {
    title: "Nguyễn Hữu Việt | Full-Stack Developer",
    description: "Portfolio cá nhân của Nguyễn Hữu Việt - Full-Stack Developer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
