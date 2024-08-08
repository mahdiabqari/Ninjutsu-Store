import Link from "next/link"
function Header() {
    return(
        <div className="header-container sticky top-0 rounded-b-xl w-[90%] h-[5rem] flex justify-center items-center">

            <div className="left flex justify-start ml-5 w-[20%]">
                <img className=" ninja-logo w-[110px]" src="Ninja.png" alt="png" />
            </div>

            <div className="center container w-[60%]">
                <ul className="header-meno rounded-[10px] flex px-10 py-4 justify-center items-center gap-14 text-[18px] text-white">
                    <li>Home</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Products</li>
                </ul>
            </div>

            <div className="right flex justify-end mr-5 w-[20%]">
                <Link href="https://mahdiabqari.liara.run" ><img className="Logo-MNS cursor-pointer w-[70px] hover:border-white hover:border-2 rounded-full" src="Logo.png" alt="png" /></Link>
            </div>

        </div>
    )
}

export default Header