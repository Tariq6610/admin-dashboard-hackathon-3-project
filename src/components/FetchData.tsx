'use client'
import { client } from '@/sanity/lib/client';
import React, { useEffect, useState } from 'react'
import ProductCard from './Product';

interface Product {
    category:string
    description:string
    discountPercent:number
    image:string
    isNew:boolean
    name:string
    price: number,
    _id: string,
    stars: number,
    rating: number
    sizes:string[],
    colors:string[]
    }
    

const FetchData = () => {
    const [allProducts, setAllProducts] = useState<Product[]>([])
    useEffect(() => {
        async function fetchProducts() {
          try {
            const allProducts: Product[] = await client.fetch(`
          *[_type == "products"]{
            name,
            category,
            description,
            price,
            _id,
           discountPercent,
           isNew,
           stars,
           rating,
           colors,
           sizes,
           "image": image.asset->url
          }
          `);
    
            // Check if the fetched data is valid
            if (!allProducts || allProducts.length === 0) {
              throw new Error("No products were fetched from Sanity.");
            }
    

    
            console.log("allProducts", allProducts && allProducts);
    

    
            // Update state
            setAllProducts(allProducts);
          } catch (err) {
            alert(
              "We encountered an issue while fetching product data. Please check your internet connection or try refreshing the page. If the problem persists, contact support."
            );
            console.error("Error fetching data from Sanity:", err);
          }
        }
    
        // Fetch products on the client side
        fetchProducts();
      }, []);
  return (
    <div className='max-w-[1440px] mt-3 2xl:px-[100px] xl:px-[50px] px-[16px]'>
      <div className='flex justify-between w-full mb-3'>
      <h1 className='text-lg font-bold'>All Availble Products</h1>
      <button className='px-[13px] py-[6px] bg-black text-white font-bold rounded-md cursor-pointer active:scale-90 transition-transform '>+ Add</button>
      </div>
      <hr className='mb-10'/>
      <div className='flex flex-wrap gap-x-4 gap-y-6'>
      {allProducts.length > 0 &&
      allProducts.map((product) => (
          <ProductCard key={product._id} sizes={product.sizes} colors={product.colors} name={product.name} category={product.category} isNew={product.isNew} description={product.description} discountPercent={product.discountPercent} price={product.price} stars={product.stars} rating={product.rating} image={product.image} _id={product._id}/>
      ))
      }
      </div>
    </div>
    
  )
}

export default FetchData