'use client'
import Link from "next/link"
import { useState } from "react"
function Header() {
    const [ ShowMeno , setShowMeno ] = useState(false)

    const SHOWMENOf = () => {
        if(ShowMeno){
            setShowMeno(false)
        }
        else if (!ShowMeno){
            setShowMeno(true)
        }
    }

    return(
        <div className="header-container md:w-full sticky top-0 rounded-b-xl w-[90%] h-[5rem] flex justify-center items-center">

            <div className="left hidden md:flex md:w-[20%]">
                <img onClick={SHOWMENOf} className="w-10 rounded-full cursor-pointer" src="Meno.jpg" alt="jpg" />
            </div>

            <div className="left flex justify-start ml-5 w-[20%] md:w-[60%] md:justify-center">
                <img className=" ninja-logo w-[110px] md:w-[120px]" src="Ninja.png" alt="png" />
            </div>

            <div className="center md:hidden container w-[60%]">
                <ul className="header-meno rounded-[10px] flex px-10 py-4 justify-center items-center gap-14 text-[18px] text-white">
                    <li>Home</li>
                    <li>About</li>
                    <li>Blog</li>
                    <Link href="/Products"><li>Products</li></Link>
                </ul>
            </div>

            <div className="right flex justify-end mr-5 w-[20%] md:w-[20%]">
                <Link href="https://mahdiabqari.liara.run" ><img className="Logo-MNS cursor-pointer w-[70px] md:w-[60px] hover:border-white hover:border-2 rounded-full" src="Logo.png" alt="png" /></Link>
            </div>

            {ShowMeno &&
                <div className="panic fixed left-2 top-14 w-[9rem]">
                    <ul className="header-meno flex-col rounded-[10px] flex py-4 justify-center items-center gap-5 text-[20px] text-white">
                        <li className="text-white">Home</li>
                        <li className="text-white">About</li>
                        <li className="text-white">Blog</li>
                        <Link href="/Products"><li className="text-white">Products</li></Link>
                    </ul>
                </div>
            }

        </div>
    )
}

export default Header