import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const brands = [
  { id: 1, name: "Bodycare", image: "/images/bodycare-banner.png" },
  { id: 2, name: "Lyra", image: "/images/lyra-banner-new.png" },
  { id: 3, name: "Supersox", image: "/images/supersox-banner-new.png" },
  { id: 4, name: "Zeel", image: "/images/zeel-banner-new.png" },
  { id: 5, name: "Pinklush", image: "/placeholder.svg?height=400&width=400" },
  { id: 6, name: "Zoom", image: "/placeholder.svg?height=400&width=400" },
  { id: 7, name: "Mitushi", image: "/images/mitushi-banner-new.png" },
  { id: 8, name: "Niomoda", image: "/placeholder.svg?height=400&width=400" },
  { id: 9, name: "Citizen", image: "/placeholder.svg?height=400&width=400" },
  { id: 10, name: "Tag Hills", image: "/placeholder.svg?height=400&width=400" },
]

export default function BrandGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {brands.map((brand) => (
        <Link
          key={brand.id}
          href={`/brands/${brand.name.toLowerCase().replace(/\s+/g, "-")}`}
          className="group relative overflow-hidden rounded-2xl border bg-white transition-all hover:shadow-md hover:shadow-sky-100"
        >
          <div className="aspect-square relative overflow-hidden rounded-t-2xl">
            <Image
              src={brand.image || "/placeholder.svg"}
              alt={brand.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-sky-500/0 transition-colors group-hover:bg-sky-500/20"></div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-medium text-sky-700">{brand.name}</h3>
            <div className="mt-2 flex items-center text-sm text-sky-500 group-hover:text-sky-600">
              <span>View Collection</span>
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
