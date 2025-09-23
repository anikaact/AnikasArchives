"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/content", label: "Content" },
  { href: "/career", label: "Career" },
  { href: "/cooking", label: "Cooking" },
  { href: "/classes", label: "Classes" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <div className="flex gap-6 text-lg text-[#dc828a]">
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`hover:text-white ${
              isActive ? "underline underline-offset-4 font-bold" : ""
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}
