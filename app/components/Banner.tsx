'use client'
import { useEffect, useState } from "react"
import Link from "next/link";

function Banner() {

    interface Image {
        src: string;
        id: number;
    }
    
    const [image, setImage] = useState<Image[]>([{ src: 'Bannerpictures/Cold Arms (1).jpg', id: 1 }]);
    
    const NextIMG = () => {
        if (image[0].id === 1) {
            setImage([{ src: 'Bannerpictures/Cold Arms (2).jpg', id: 2 }]);
        } else if (image[0].id === 2) {
            setImage([{ src: 'Bannerpictures/Cold Arms (3).jpg', id: 3 }]);
        } else if (image[0].id === 3) {
            setImage([{ src: 'Bannerpictures/Cold Arms (4).jpg', id: 4 }]);
        } else if (image[0].id === 4) {
            setImage([{ src: 'Bannerpictures/Cold Arms (1).jpg', id: 1 }]);
        }
    };
    
    const BackIMG = () => {
        if (image[0].id === 4) {
            setImage([{ src: 'Bannerpictures/Cold Arms (3).jpg', id: 3 }]);
        } else if (image[0].id === 3) {
            setImage([{ src: 'Bannerpictures/Cold Arms (2).jpg', id: 2 }]);
        } else if (image[0].id === 2) {
            setImage([{ src: 'Bannerpictures/Cold Arms (1).jpg', id: 1 }]);
        } else if (image[0].id === 1) {
            setImage([{ src: 'Bannerpictures/Cold Arms (4).jpg', id: 4 }]);
        }
    };
    
    useEffect(() => {
        const timer = setTimeout(NextIMG, 5000);
        return () => clearTimeout(timer);
    }, [image]);
    
    return(
        <div className="banner-container md:w-full container md:py-5 flex md:flex-col justify-center items-center text-white mt-24 md:mt-14 rounded-xl w-[100%] h-[35rem] md:h-full">

            <div className="left pl-10 md:p-0 md:px-2 flex flex-col justify-start items-start w-[50%] md:w-full md:container">
                <h1 className="text-[45px] md:mx-auto  md:text-center md:text-[35px] font-bold">Ninjutsu sports equipment</h1>
                <h2 className="text-[25px] md:mx-auto  md:text-center md:text-[23px] mt-3 text-red-900 bg-black px-2 py-1 rounded-[10px]">Welcome to our Ninjutsu Store!</h2>
                <p className="text-[18px] md:mx-auto  md:text-center md:text-[17px] mt-1">
                    We offer the best Ninjutsu gear and equipment with high quality and affordable prices.
                    Join us and experience the art of Ninjutsu with the finest tools.
                </p>
            </div>

            <div className="right container flex-col w-[50%] md:w-full md: mt-5">
                <div className="img-contaienr container gap-2">
                    <img onClick={BackIMG} src="Arrow.jpg" alt="jpg" className="arrow md:hidden w-9 opacity-0 hover:opacity-60 rotate-180 rounded-full cursor-pointer" />
                    {image.map((item) => {
                        return (
                            <img className="slider w-[35rem] rounded-xl" key={item.id} src={item.src} alt="jpg" />
                        )
                    })}
                    <img onClick={NextIMG} src="Arrow.jpg" alt="jpg" className="arrow md:hidden w-9 opacity-0 hover:opacity-60 rounded-full cursor-pointer" />
                </div>
                <h1 className="slider text-[18px] mt-2 bg-white text-red-950 px-2 py-1 rounded-[10px]">You can find your product in our store</h1>
                <Link href="#products"><button className="btn-banner bg-red-950 flex items-center jutify-center gap-2 py-2 px-4 slider mt-2">See More
                    <img className="icon-btn-banner w-5 rounded-full" src="Arrow.jpg" alt="jpg" />
                </button></Link>
            </div>

        </div>
    )
}

export default Banner