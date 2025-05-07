import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const brands = [
  { id: 1, name: "Bodycare", image: "/placeholder.svg?height=400&width=400" },
  { id: 2, name: "Lyra", image: "/placeholder.svg?height=400&width=400" },
  { id: 3, name: "Supersox", image: "/placeholder.svg?height=400&width=400" },
  { id: 4, name: "Zeel", image: "/placeholder.svg?height=400&width=400" },
  { id: 5, name: "Pinklush", image: "/placeholder.svg?height=400&width=400" },
  { id: 6, name: "Zoom", image: "/placeholder.svg?height=400&width=400" },
  { id: 7, name: "Mitushi", image: "/placeholder.svg?height=400&width=400" },
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
          className="group relative overflow-hidden rounded-md border bg-white transition-all hover:shadow-md"
        >
          <div className="aspect-square relative overflow-hidden">
            <Image
              src={brand.image || "/placeholder.svg"}
              alt={brand.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20"></div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-medium">{brand.name}</h3>
            <div className="mt-2 flex items-center text-sm text-gray-500 group-hover:text-gray-900">
              <span>View Collection</span>
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
