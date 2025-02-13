"use client"
import Link from 'next/link'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { IoMenu } from "react-icons/io5";
import { HiMiniUserCircle } from "react-icons/hi2";

// import { useCartContext } from './context/CartContext';
import {useState } from 'react';
// import { UseproductsContext } from './context/ProductsContext';
import { usePathname } from 'next/navigation'
import { UserButton} from '@clerk/nextjs';
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"
// import { scroller } from 'react-scroll';


const Header = () => {
const pathname = usePathname()
// const isHome = pathname === '/';
// const {cart} = useCartContext()
// const {searchFilter, setSearchFilter} = UseproductsContext()
const [isOpen, setIsOpen] = useState(false);


//  function goToCategoriesPage(){
//     setIsOpen(false)
//     setTimeout(()=>{
//       router.push('/category')
//     },500)
//  }


// function navigateTo(targetedSection : string){
//   setIsOpen(false);
//   if(isHome){
//     scroller.scrollTo(targetedSection,{
//       duration: 500,
//       smooth: true,
//       offset: -70
//     })
//   }else{
//     setTimeout(()=>{
//       router.push('/');
//     },500)
//     setTimeout(()=>{
//       scroller.scrollTo(targetedSection,{
//         duration: 500,
//         smooth: true,
//         offset: -70
//       })
//     },1000)
//   }
// }

  return (
    <>
      <header className="flex sticky top-0 z-50 justify-center   flex-col w-full">
        <nav className="md:h-[70px] w-full h-[50px] flex bg-white items-center mx-auto justify-between max-w-[1440px] 2xl:px-[100px] xl:px-[50px] px-[16px] ">
          <div className="flex  gap-[40px] w-full justify-between  items-center">
            <div className="flex gap-[16px] items-center">
              <div className="block xl:hidden">
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                  <SheetTrigger asChild>
                    <div>
                      <IoMenu className="text-3xl" />
                    </div>
                  </SheetTrigger>
                  <SheetContent side="left">
                    <SheetHeader>
                      <SheetTitle>
                        <div className="flex mt-4 items-center justify-between">
                          <h1 className="text-[24px] mb-4 font-extrabold tracking-tight">
                            SHOP.CO
                          </h1>
                          <div
                            
                            className="flex items-center gap-[14px] w-[62px]"
                          >
                            <HiMiniUserCircle onClick={() => setIsOpen(false)} className='text-4xl'/>
                          </div>
                        </div>
                      </SheetTitle>
                      <SheetDescription></SheetDescription>
                    </SheetHeader>
                    <ul className="flex flex-col gap-[24px] font-bold">
                    <Link href='/'><li  className={`${pathname == '/' && 'bg-black text-white'} p-2 rounded-md cursor-pointer underline-offset-4 hover:underline font-bold`}>All Products</li></Link>
                <Link href='/orders'><li className={`${pathname == '/orders' && 'bg-black text-white'} p-2 rounded-md cursor-pointer underline-offset-4 hover:underline font-bold`}> Orders</li></Link>
                <Link href='/users'><li className={`${pathname == '/users' && 'bg-black text-white'} p-2 rounded-md cursor-pointer underline-offset-4 hover:underline font-bold`}>Users</li></Link>
                    </ul>
                  </SheetContent>
                </Sheet>
              </div>
              <h1 className="md:text-[32px] text-[24px] font-extrabold tracking-tight">
                SHOP.CO
              </h1>
            </div>
            <ul className="xl:flex hidden items-center gap-[100px]">
                <Link href='/'><li  className={`${pathname == '/' && 'bg-black text-white'} p-2 rounded-md cursor-pointer underline-offset-4 hover:underline font-bold`}>All Products</li></Link>
                <Link href='/orders'><li className={`${pathname == '/orders' && 'bg-black text-white'} p-2 rounded-md cursor-pointer underline-offset-4 hover:underline font-bold`}> Orders</li></Link>
                <Link href='/users'><li className={`${pathname == '/users' && 'bg-black text-white'} p-2 rounded-md cursor-pointer underline-offset-4 hover:underline font-bold`}>Users</li></Link>
            </ul>
            <div>
                <UserButton />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header