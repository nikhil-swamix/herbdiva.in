import fetchCategories from "@/helpers/fetchCategories";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default async function Categories() {
  const categories = await fetchCategories()

  return (
    <div>
      <div className="the_container my-[70px] md:my-[100px]">
        <div className="flex justify-between gap-5 items-center flex-wrap">
          <div className="text-[28px] text-mainBlack capitalize ">Shop By Categories</div>
          <Link href={'/ourproducts'} className="text-orange text-[13px] font-[700] uppercase flex items-center"> 
            view all products 
            <ChevronRight size={14} className="text-orange mb-[1px]" /> 
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 9s:grid-cols-4 gap-3">
          
          {categories.map(({id,attributes:{name}})=> (
            <Link href={`/our_products?categorie=${name}`} key={id} className="bg-orange text-sm md:text-[15px] text-white px-5 py-2 md:py-[10px] hover:bg-mainBlack transition-colors duration-300 grid place-content-center text-center ">{name}</Link>
          ))}

        </div>
      </div>
    </div>
  )
}
