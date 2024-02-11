import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "", //If you want to provide title that ignores other titles
    default: "Nextjs Tutorial", //Fallback title for child routes, not title
    template: "%s | by Ahmad", //Create dynamic titles by adding prefix or suffix, applies to child routes not wihin it is defined
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header style={{ backgroundColor: "lightblue" }}>
          Header of Application
        </header>
        {children}
        <footer style={{ backgroundColor: "lightblue" }}>
          Footer of Application
        </footer>
      </body>
    </html>
  );
}
