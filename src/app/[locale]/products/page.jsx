
import WorldsBanner from '@/components/products/productsBanner/WorldsBanner'
import { useTranslations } from 'next-intl'

import React from 'react'

const ProductsPage = () => {
  const products = useTranslations("Products")
  const productsArray = products.raw("allProducts")
  return (
   <div className="w-full">
 
    {
      productsArray.map((product) => (
        <WorldsBanner key={product.id} index={product.id} products={product} />
      ))
    }
   </div>
  )
}

export default ProductsPage