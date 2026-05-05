import "./globals.css";

export const metadata = {
  title: "Your Name — Portfolio",
  description: "Personal portfolio site built with Next.js and Tailwind CSS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
