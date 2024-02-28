import { ChevronRight } from "lucide-react";
import Link from "next/link";
import ProductCard from "./ProductCard";

export default function LatestProducts() {
  const products = [1,2,3,4,5,6]
  
  return (
    <div>
    <div className="the_container my-[70px] md:my-[100px]">
      <div className="flex justify-between gap-5 items-center flex-wrap">
        <div className="text-[28px] text-mainBlack capitalize ">Latest Products</div>
        <Link href={'/ourproducts'} className="text-orange text-[13px] font-[700] uppercase flex items-center"> 
          view all products 
          <ChevronRight size={14} className="text-orange mb-[1px]" /> 
        </Link>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 9s:grid-cols-3 gap-5">
        {
          products.map(product=> (
            <ProductCard key={product}/>
          ))
        }
      </div>
    </div>
  </div>
  )
}
