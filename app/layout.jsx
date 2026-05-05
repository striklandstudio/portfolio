import "./globals.css";

export const metadata = {
  title: "Strikland Studio - Websites for Small Businesses",
  description:
    "Senior software engineer building simple, professional websites that help small businesses grow.",
};

// Inline script runs before React hydrates to prevent a flash of the wrong theme.
const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (stored === 'dark' || (!stored && prefersDark)) {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {}
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="font-sans bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors">
        {children}
      </body>
    </html>
  );
}
