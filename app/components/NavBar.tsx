"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { Navigations, navigations } from "@/models/navigations";
import Toggle from "./Toggle";

const NavBar = () => {
  const pathname = usePathname();
  const navs: Navigations = navigations;

  return (
    <div className="dark:bg-wa-dark-background-lighter bg-gray-100 border-1 float-left h-screen py-2 flex flex-col items-center justify-between">
      <div className="flex flex-col gap-3">
        {navs.upperNav.map((nav) => {
          return (
            <Link
              href={nav.href}
              key={nav.name}
              className={clsx(
                "rounded-full text-wa-dark-icon dark:text-wa-light-icon flex items-center justify-center p-2 w-[40px] h-[40px]",
                {
                  "bg-gray-200 dark:bg-wa-dark-secondary": pathname === nav.href,
                }
              )}
            >
              {pathname === nav.href ? <nav.iconFilled /> : <nav.icon />}
            </Link>
          );
        })}
      </div>

      <div className="transform rotate-90">
        <Toggle />
      </div>

      <div className="flex flex-col gap-3">
        {navs.lowerNav.map((nav) => {
          return (
            <Link
              href={nav.href}
              key={nav.name}
              className={clsx(
                "rounded-full text-wa-dark-icon dark:text-wa-light-icon flex items-center justify-center p-2 w-[40px] h-[40px]",
                {
                  "bg-gray-200 dark:bg-wa-dark-secondary": pathname === nav.href,
                }
              )}
            >
              {pathname === nav.href ? <nav.iconFilled /> : <nav.icon />}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NavBar;
