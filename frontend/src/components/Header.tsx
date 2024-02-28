"use client";

import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [headerScrolling, setHeaderScrolling] = useState(false);
  const { scrollY } = useScroll();
  const [isOpen, setIsOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latestY) => {
    const previousY = scrollY.getPrevious() as number;

    if (latestY > previousY && latestY > 100) {
      setHidden(true);
    }

    if (previousY > latestY) {
      setHidden(false);
      setHeaderScrolling(true);
    }

    if (latestY === 0) {
      setHeaderScrolling(false);
    }
  })

  const routes = ['home','our products','about us','contact us']

  return (
    <>
      
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={cn(
          "fixed inset-x-0  bg-[#232323] p-5 md:p-6 lg:p-7 z-50 ",
          `${headerScrolling && "shadow-md  "}`
        )}
      >
        <div className="flex justify-between gap-x-3 items-center container p-0 mx-auto lg:max-w-[1150px]">
          <div className="text-xl 9s:text-2xl font-bold uppercase text-white">SIXTEEN <span className="text-orange">CLOTHING</span></div>

          <div
            className="cursor-pointer bg-white py-[4px] px-2 lg:hidden "
            onClick={() => setIsOpen(true)}
          >
            <Menu className="text-orange w-5 h-5 9s:w-[25px] 9s:h-[25px] " />
          </div>

          <div className="hidden lg:flex gap-x-12">
            {routes.map(route=>
              <div key={route} className="relative">
                <Link  href={`/${route}`} className={`font-medium capitalize text-white hover:text-orange transition-colors duration-300`}>{route}</Link>
                <div className={`bg-orange h-[3px] w-full absolute left-0 -bottom-[32px] ${route !== 'home' && 'hidden'}`}></div>
              </div>
            )}
          </div>
        </div>

      </motion.header>

      <Sheet open={isOpen} onOpenChange={setIsOpen} >
        <SheetContent side={"top"} className="w-full h-auto border-none outline-none lg:hidden ">
          <div className="flex flex-col gap-y-4 w-full pt-5">
            {routes.map(route=> 
              <Link key={route} href={`/${route}`} className={`capitalize ${route !== 'contact us' ? 'border-b pb-4' : 'md:pb-1'} text-center text-[15px] sm:text-base md:text-[17px] hover:text-orange transition-colors duration-300 font-medium ${route === 'home' && 'text-orange'}`}>{route}</Link>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
