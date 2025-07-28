"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Companions", href: "/companions" },
  { label: "My Journey", href: "/my-journey" },
];

const NavItems = () => {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState<string | null>(null);
  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  return (
    <nav className="flex items-center gap-4">
      {navItems.map(({ label, href }) => (
        <Link
          href={href}
          key={label}
          className={cn(currentPath === href && "text-primary font-semibold")}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default NavItems;
