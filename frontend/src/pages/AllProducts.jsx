import React, { useMemo } from 'react'
import ProductCard from '../components/ProductCard'
import { useAppContext } from '../context/AppContext'
import { useParams } from 'react-router-dom'

const AllProducts = () => {
  const { searchQuery, products } = useAppContext()
  const { category } = useParams()
  const normalizedCategory = useMemo(
    () => (category ? category.toLowerCase() : ''),
    [category]
  )

  const filteredProducts = useMemo(() => {
    let result = products

    if (normalizedCategory) {
      result = result.filter(
        (product) => product.category.toLowerCase() === normalizedCategory
      )
    }

    if (searchQuery.length > 0) {
      result = result.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    return result
  }, [products, searchQuery, normalizedCategory])

  const pageTitle = normalizedCategory ? `${normalizedCategory} Products` : 'All Products'
  return (
    <div className='mt-16 flex flex-col'>
      <div className='flex flex-col items-end w-max'>
        <p className='text-2xl font-medium uppercase'>{pageTitle}</p>
      <div className='w-16 h-0.5 bg-primary rounded-full'></div>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6'>
        {filteredProducts.filter((product)=>product.inStock).map((product,index)=>(
          <ProductCard key={index} product= {product}/>
        ))}
      </div>

    </div>
  )
}

export default AllProducts
