// This will replace children prop of root layout.tsx
export const metadata = {
  title: "My Product",
  description: "Product Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}
