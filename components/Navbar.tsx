"use client";
import Link from "next/link";
import logo from "../public/logo.webp";
import compactLogo from "../public/logo - priyanshu maurya.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navSections = [
  { id: "tools", label: "Tools", href: "/tools" },
  { id: "prompts", label: "Prompts", href: "/prompts" },
  { id: "datasets", label: "Datasets", href: "/datasets" },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "";
  const activeMatch = navSections.find(
    (section) => pathname === section.href || pathname === section.href + "/"
  );

  return (
    <header className="mx-auto flex min-w-full max-w-7xl flex-wrap items-center gap-y-4 border-b border-[--line] px-5 py-4 text-[--ink] dark:bg-[--dark-bg] sm:px-8 lg:px-12">
      <div className="flex flex-1 justify-start">
        <Link
          className="max-w-[12rem] rounded-sm transition-opacity duration-300 hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[--primary-color] sm:max-w-[14rem] md:max-w-[16rem]"
          href="/"
          aria-label="AI FUSION home"
          aria-current={isHome ? "page" : undefined}
        >
          <Image
            src={logo}
            alt="AI Fusion"
            width={406}
            height={70}
            className="hidden h-auto w-full 2xl:block"
          />
          <Image
            src={compactLogo}
            alt=""
            width={96}
            height={96}
            aria-hidden="true"
            className="block h-11 w-11 p-1 object-contain md:h-[88px] md:w-[88px] 2xl:hidden"
          />
        </Link>
      </div>

      <nav aria-label="Resources" className="flex items-center justify-center gap-3 sm:gap-5 md:gap-7">
        {navSections.map((section) => {
          const isActive = activeMatch?.id === section.id;
          return (
            <Link
              key={section.id}
              href={section.href}
              aria-current={isActive ? "page" : undefined}
              className={
                isActive
                  ? "relative rounded-sm text-sm font-medium uppercase tracking-[0.14em] text-[--ink] transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-[--ink] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[--primary-color]"
                  : "rounded-sm text-sm uppercase tracking-[0.14em] text-[--muted] transition-colors hover:text-[--ink] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[--primary-color]"
              }
            >
              {section.label}
            </Link>
          );
        })}
      </nav>

      <div className="hidden flex-1 justify-end md:flex">
        <span className="eyebrow">Open source / curated</span>
      </div>
    </header>
  );
}
