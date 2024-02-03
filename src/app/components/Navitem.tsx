"use client";
import React from "react";
import Link from "next/link";

interface NavItemProps {
  url: string;
  title: string;
  active: boolean;
}

function NavItem({ title, url, active }: NavItemProps) {
  return (
    <Link
      href={url}
      className={`nav-item ${active ? "active" : ""} hover:text-secondary`}
    >
      {title}
    </Link>
  );
}

export default NavItem;
