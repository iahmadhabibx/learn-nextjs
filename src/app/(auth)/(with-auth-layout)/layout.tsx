// This will act as the main layout for route group
export const metadata = {
  title: "My Product",
  description: "Product Page",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <h1>Inner of auth</h1>
      {children}
    </main>
  );
}
