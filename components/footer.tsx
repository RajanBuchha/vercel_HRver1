import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="w-full border-t border-sky-100 bg-white py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="H R Apparel Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-xl font-bold text-sky-600">H R Apparel</span>
            </Link>
            <p className="text-sm text-sky-500">The ultimate destination for premium fashion brands.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-sky-700">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-sm text-sky-500 hover:text-sky-700">
                Home
              </Link>
              <Link href="/products" className="text-sm text-sky-500 hover:text-sky-700">
                Products
              </Link>
              <Link href="/about" className="text-sm text-sky-500 hover:text-sky-700">
                About
              </Link>
              <Link href="/contact" className="text-sm text-sky-500 hover:text-sky-700">
                Contact
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-sky-700">Brands</h3>
            <nav className="grid grid-cols-2 gap-2">
              <Link href="/brands/bodycare" className="text-sm text-sky-500 hover:text-sky-700">
                Bodycare
              </Link>
              <Link href="/brands/lyra" className="text-sm text-sky-500 hover:text-sky-700">
                Lyra
              </Link>
              <Link href="/brands/supersox" className="text-sm text-sky-500 hover:text-sky-700">
                Supersox
              </Link>
              <Link href="/brands/zeel" className="text-sm text-sky-500 hover:text-sky-700">
                Zeel
              </Link>
              <Link href="/brands/pinklush" className="text-sm text-sky-500 hover:text-sky-700">
                Pinklush
              </Link>
              <Link href="/brands/zoom" className="text-sm text-sky-500 hover:text-sky-700">
                Zoom
              </Link>
              <Link href="/brands/mitushi" className="text-sm text-sky-500 hover:text-sky-700">
                Mitushi
              </Link>
              <Link href="/brands/niomoda" className="text-sm text-sky-500 hover:text-sky-700">
                Niomoda
              </Link>
              <Link href="/brands/citizen" className="text-sm text-sky-500 hover:text-sky-700">
                Citizen
              </Link>
              <Link href="/brands/tag-hills" className="text-sm text-sky-500 hover:text-sky-700">
                Tag Hills
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-sky-700">Connect</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-sky-500 hover:text-sky-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-sky-500 hover:text-sky-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-sky-500 hover:text-sky-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
            <p className="text-sm text-sky-500">Subscribe to our newsletter for the latest updates.</p>
            <form className="flex space-x-2">
              <Input
                placeholder="Enter your email"
                type="email"
                className="rounded-xl border-sky-200 focus:border-sky-400"
              />
              <Button
                type="submit"
                variant="outline"
                className="rounded-xl border-sky-400 text-sky-600 hover:bg-sky-50"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-sky-100 pt-8 text-center">
          <p className="text-xs text-sky-400">© {new Date().getFullYear()} H R Apparel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
