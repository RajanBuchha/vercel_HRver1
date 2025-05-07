"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const brands = [
  { name: "Bodycare", href: "/brands/bodycare" },
  { name: "Lyra", href: "/brands/lyra" },
  { name: "Supersox", href: "/brands/supersox" },
  { name: "Zeel", href: "/brands/zeel" },
  { name: "Pinklush", href: "/brands/pinklush" },
  { name: "Zoom", href: "/brands/zoom" },
  { name: "Mitushi", href: "/brands/mitushi" },
  { name: "Niomoda", href: "/brands/niomoda" },
  { name: "Citizen", href: "/brands/citizen" },
  { name: "Tag Hills", href: "/brands/tag-hills" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/placeholder.svg?height=40&width=40" alt="H R Apparel Logo" width={40} height={40} />
          <span className="text-xl font-bold">H R Apparel</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    Homepage
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {brands.map((brand) => (
                      <Link
                        key={brand.name}
                        href={brand.href}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900"
                      >
                        <div className="text-sm font-medium leading-none">{brand.name}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                          Explore {brand.name} collection
                        </p>
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-500 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          {isMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link
              href="/"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Homepage
            </Link>
            <div className="relative">
              <button
                className="flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100"
                onClick={(e) => {
                  e.preventDefault()
                  const dropdown = document.getElementById("mobile-products-dropdown")
                  if (dropdown) {
                    dropdown.classList.toggle("hidden")
                  }
                }}
              >
                Products
                <ChevronDown className="h-4 w-4" />
              </button>
              <div id="mobile-products-dropdown" className="hidden space-y-1 px-4 py-2">
                {brands.map((brand) => (
                  <Link
                    key={brand.name}
                    href={brand.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {brand.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="/about"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
