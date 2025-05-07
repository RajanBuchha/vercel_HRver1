import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import BrandCarousel from "@/components/brand-carousel"
import BrandGrid from "@/components/brand-grid"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-4 py-24 md:py-32 lg:py-40">
        <div className="absolute inset-0 -z-10 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
        <div className="text-center space-y-4">
          <h2 className="text-xl md:text-2xl font-light tracking-wider text-gray-700">Welcome to</h2>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-gray-800">
            The Brand Destination
          </h1>
          <div className="pt-2">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-gray-900">H R Apparel</h1>
          </div>
          <div className="pt-6">
            <Button className="rounded-none px-8 py-6 text-base">
              Explore Collections <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Brand Carousel */}
      <section className="w-full py-12 md:py-16 bg-gray-50">
        <div className="container">
          <BrandCarousel />
        </div>
      </section>

      {/* Our Brands Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Brands</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl">
              Discover our curated collection of premium fashion brands
            </p>
          </div>
          <BrandGrid />
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get in Touch</h2>
              <p className="text-gray-500 md:text-xl">
                We'd love to hear from you. Fill out the form and we'll get back to you as soon as possible.
              </p>
              <div className="space-y-2">
                <h3 className="text-xl font-medium">Contact Information</h3>
                <p className="text-gray-500">123 Fashion Avenue, Style District</p>
                <p className="text-gray-500">contact@hrapparel.com</p>
                <p className="text-gray-500">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Name
                  </label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="grid gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div className="grid gap-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Message
                  </label>
                  <Textarea id="message" placeholder="Enter your message" className="min-h-[150px]" />
                </div>
                <Button className="w-full rounded-none">Send Message</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t bg-white py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-2">
                <Image src="/placeholder.svg?height=40&width=40" alt="H R Apparel Logo" width={40} height={40} />
                <span className="text-xl font-bold">H R Apparel</span>
              </Link>
              <p className="text-sm text-gray-500">The ultimate destination for premium fashion brands.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Quick Links</h3>
              <nav className="flex flex-col space-y-2">
                <Link href="/" className="text-sm text-gray-500 hover:text-gray-900">
                  Home
                </Link>
                <Link href="/products" className="text-sm text-gray-500 hover:text-gray-900">
                  Products
                </Link>
                <Link href="/about" className="text-sm text-gray-500 hover:text-gray-900">
                  About
                </Link>
                <Link href="/contact" className="text-sm text-gray-500 hover:text-gray-900">
                  Contact
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Brands</h3>
              <nav className="grid grid-cols-2 gap-2">
                <Link href="/brands/bodycare" className="text-sm text-gray-500 hover:text-gray-900">
                  Bodycare
                </Link>
                <Link href="/brands/lyra" className="text-sm text-gray-500 hover:text-gray-900">
                  Lyra
                </Link>
                <Link href="/brands/supersox" className="text-sm text-gray-500 hover:text-gray-900">
                  Supersox
                </Link>
                <Link href="/brands/zeel" className="text-sm text-gray-500 hover:text-gray-900">
                  Zeel
                </Link>
                <Link href="/brands/pinklush" className="text-sm text-gray-500 hover:text-gray-900">
                  Pinklush
                </Link>
                <Link href="/brands/zoom" className="text-sm text-gray-500 hover:text-gray-900">
                  Zoom
                </Link>
                <Link href="/brands/mitushi" className="text-sm text-gray-500 hover:text-gray-900">
                  Mitushi
                </Link>
                <Link href="/brands/niomoda" className="text-sm text-gray-500 hover:text-gray-900">
                  Niomoda
                </Link>
                <Link href="/brands/citizen" className="text-sm text-gray-500 hover:text-gray-900">
                  Citizen
                </Link>
                <Link href="/brands/tag-hills" className="text-sm text-gray-500 hover:text-gray-900">
                  Tag Hills
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Connect</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-500 hover:text-gray-900">
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
                <Link href="#" className="text-gray-500 hover:text-gray-900">
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
                <Link href="#" className="text-gray-500 hover:text-gray-900">
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
              <p className="text-sm text-gray-500">Subscribe to our newsletter for the latest updates.</p>
              <form className="flex space-x-2">
                <Input placeholder="Enter your email" type="email" className="rounded-none" />
                <Button type="submit" variant="outline" className="rounded-none">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center">
            <p className="text-xs text-gray-500">© {new Date().getFullYear()} H R Apparel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
