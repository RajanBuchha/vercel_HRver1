import Link from "next/link"
import Image from "next/image"
import { Heart, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Product } from "@/lib/types"

interface ProductGridProps {
  products: Product[]
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="group bg-white rounded-2xl overflow-hidden border border-sky-100 transition-all hover:shadow-lg hover:shadow-sky-100"
        >
          <div className="relative aspect-square overflow-hidden">
            <Link href={`/products/${product.id}`}>
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {product.isNew && (
              <Badge className="absolute top-2 left-2 bg-sky-500 hover:bg-sky-600 rounded-full">New</Badge>
            )}

            {product.discount > 0 && (
              <Badge className="absolute top-2 right-2 bg-rose-500 hover:bg-rose-600 rounded-full">
                {product.discount}% OFF
              </Badge>
            )}

            <div className="absolute bottom-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button size="icon" variant="secondary" className="rounded-full bg-white hover:bg-sky-50">
                <Heart className="h-4 w-4 text-sky-700" />
                <span className="sr-only">Add to wishlist</span>
              </Button>
              <Button size="icon" variant="secondary" className="rounded-full bg-white hover:bg-sky-50">
                <ShoppingCart className="h-4 w-4 text-sky-700" />
                <span className="sr-only">Add to cart</span>
              </Button>
            </div>
          </div>

          <div className="p-4">
            <Link href={`/products/${product.id}`} className="block">
              <h3 className="font-medium text-sky-800 group-hover:text-sky-600 transition-colors">{product.name}</h3>
              <p className="text-sm text-sky-500 mb-2">{product.category}</p>

              <div className="flex items-center gap-2">
                <span className="font-bold text-sky-700">₹{product.price.toFixed(2)}</span>
                {product.originalPrice > product.price && (
                  <span className="text-sm text-sky-400 line-through">₹{product.originalPrice.toFixed(2)}</span>
                )}
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}
