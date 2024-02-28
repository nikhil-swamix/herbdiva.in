import Image from "next/image"
import productImg from "../../../public/product_01.jpg"
import Link from "next/link"

export default function ProductCard() {
  return (
    <Link href={'/'} className="border border-[#eee] hover:shadow-sm transition-shadow duration-300">
      <div className="h-[200px] 5s:h-[250px] 9s:h-[200px]">
        <Image src={productImg} alt="latest product image" quality={100} className="w-full h-full object-cover"/>
      </div>

      <div className="p-7">
        <div className="flex justify-between items-center mb-5">
          <p className="text-[#1a6692] text-[17px] font-medium">Title Goes here</p>
          <div className="text-mainBlack text-lg font-medium">$25.75</div>
        </div>

        <p className="font-light text-[#4a4a4a] text-sm">Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p>
      </div>
    </Link>
  )
}
