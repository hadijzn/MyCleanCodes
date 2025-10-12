"use client";
import { useParams } from "next/navigation";
import { menuItems } from "@/app/data/menu";
import LanguageSwitcher from "./LanguageSwitcher";
import Logo from "@/app/data/Logo";
export default function Navbar() {
  const params = useParams();
  const locale = (params?.lang as "en" | "fa") || "en";

  return (
    <div className="flex justify-center px-6   ">
      <nav className="flex items-center justify-between px-6 py-2 bg-white rounded-full gap-20 h-20 w-fit ">
        <div className="-ml-5">
          <Logo/>
        </div>
        <ul className="flex gap-6">
          {menuItems[locale].map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="text-black hover:text-[rgba(255,127,80,1)] whitespace-nowrap"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <LanguageSwitcher />
      </nav>
    </div>
  );
}
