import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
const menuItems = [
  { title: "About", href: "#about" },
  { title: "Projects", href: "#projects" },
  { title: "Testimonials", href: "#testimonials" },
  { title: "Contact", href: "#contact" },
];
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="sticky top-0 z-50 w-full border-b shadow-lg  backdrop-blur supports-[backdrop-filter]:bg:background/60 px-4 lg:px-0">
      <div className="max-w-7xl mx-auto flex h-14 items-center">
        <div className="md:mr-4 flex justify-between w-full">
          <a href="" className="mr-6 flex items-center space-x-2">
            {/* <img src="" alt="" /> */}
            <span className="font-semibold"> {"<Minh Thoai/>"}</span>
          </a>
          <nav className="md:flex hidden items-center space-x-6 text-lg font-medium">
            {menuItems.map((el) => (
              <a
                href={el.href}
                className="transition-colors hover:text-neutral hover:text-stone-700"
              >
                {el.title}
              </a>
            ))}
          </nav>
        </div>
        <button
          className="inline-flex items-center justify-center rounded-md md:hidden "
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          {mobileMenuOpen ? (
            <IoMdClose className="w-6 h-6" aria-hidden="true" />
          ) : (
            <CiMenuFries className="w-6 h-6" aria-hidden="true" />
          )}
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {menuItems.map((el) => (
              <a
                href={el.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-neutral hover:text-stone-800"
              >
                {el.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
