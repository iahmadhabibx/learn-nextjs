// Template and Layouts have one difference is that templates does not preserve states

"use client"; //Nextjs components are by default server components, to use any hook you first need to make them client component
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";
import { useState } from "react";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  const [input, setInput] = useState("");

  return (
    <div>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      {navLinks.map((link) => {
        const isActive = pathName.startsWith(link.href);
        return (
          <Link
            href={link.href}
            key={link.href}
            className={`${isActive ? "font-bold mr-4" : "text-blue-200"}`}
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
