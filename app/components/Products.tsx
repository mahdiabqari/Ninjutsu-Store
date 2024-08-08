'use client'

import { stringify } from "querystring";
import { useEffect, useState } from "react"

function Products() {
    interface Data {
        id:number,
        title:string,
        price:string,
        description:string,
        image:string,
    }

    const [ product, setProduct ] = useState<Data[]>([
        {
            id:1,
            title: 'Katana',
            price: '99$',
            description: 'Experience the precision of the traditional Japanese Katana. This high-quality steel sword features a sharp, curved blade and a balanced design, perfect for training or display.',
            image: 'katana.png'
        }
    ]);

    const NextIMG = () => {
        if (product[0].id === 1) {
            setProduct([{
                id:2,
                title: 'Nunchaku ',
                price: '75$',
                description: 'Master the art of Nunchaku with this durable and lightweight pair. Perfect for training, these nunchaku offer excellent grip and control, making them ideal for both beginners and advanced practitioners.',
                image: 'nunchico.png'
            }]);
        } else if (product[0].id === 2) {
            setProduct([{
                id:3,
                title: 'Sai',
                price: '80$',
                description: 'This product, with its unique design and high quality, offers an unparalleled experience of comfort and elegance. Made from premium materials and advanced technology, it ensures durability and high performance. Perfect for everyday use as well as special occasions.',
                image: 'Cold Arms (3).png'
            }]);
        } else if (product[0].id === 3) {
            setProduct([{
                id:4,
                title: 'Bo',
                price: '24$',
                description: 'This product, with its delightful natural wood aroma, brings a sense of tranquility and nature to your surroundings. Made from pure and natural extracts, this scent has long-lasting effects and is perfect for use in various environments.',
                image: 'bo.png'
            }]);
        } else if (product[0].id === 4) {
            setProduct([{
                id:5,
                title: 'Shuriken',
                price:  '18 $',
                description: 'This high-quality shuriken is designed for balance and accuracy. Perfect for martial arts practice or as a unique collectible, it combines functionality with aesthetic appeal.',
                image: 'Cold Arms (2).png'
            }]);
        } else if (product[0].id === 5) {
            setProduct([{
                id:1,
                title: 'Katana',
                price: '99$',
                description: 'Experience the precision of the traditional Japanese Katana. This high-quality steel sword features a sharp, curved blade and a balanced design, perfect for training or display.',
                image: 'katana.png'
            }]);
        }
    };
    
    const BackIMG = () => {
        if (product[0].id === 5) {
            setProduct([{
                id:4,
                title: 'Bo',
                price: '24$',
                description: 'This product, with its delightful natural wood aroma, brings a sense of tranquility and nature to your surroundings. Made from pure and natural extracts, this scent has long-lasting effects and is perfect for use in various environments.',
                image: 'bo.png'
        }]);
        } else if (product[0].id === 4) {
            setProduct([{
                id:3,
                title: 'Sai',
                price: '80$',
                description: 'This product, with its unique design and high quality, offers an unparalleled experience of comfort and elegance. Made from premium materials and advanced technology, it ensures durability and high performance. Perfect for everyday use as well as special occasions.',
                image: 'Cold Arms (3).png'
            }]);
        } else if (product[0].id === 3) {
            setProduct([{
                id:2,
                title: 'Nunchaku ',
                price: '75$',
                description: 'Master the art of Nunchaku with this durable and lightweight pair. Perfect for training, these nunchaku offer excellent grip and control, making them ideal for both beginners and advanced practitioners.',
                image: 'nunchico.png'
            }]);
        } else if (product[0].id === 2) {
            setProduct([{
                id:1,
                title: 'Katana',
                price: '99$',
                description: 'Experience the precision of the traditional Japanese Katana. This high-quality steel sword features a sharp, curved blade and a balanced design, perfect for training or display.',
                image: 'katana.png'
            }]);
        } else if (product[0].id === 1) {
            setProduct([{
                id:1,
                title: 'Katana',
                price: '99$',
                description: 'Experience the precision of the traditional Japanese Katana. This high-quality steel sword features a sharp, curved blade and a balanced design, perfect for training or display.',
                image: 'katana.png'
            }]);
        }
    };
    
    useEffect(() => {
        const timer = setTimeout(NextIMG, 6000);
        return () => clearTimeout(timer);
    }, [product]);


    return(
        <div className="products-container flex flex-col text-white mt-24 rounded-xl w-[100%] h-[50rem]">
            <div className="top">
                <div className="title-products border-b-white border-b-[7px] gap-1 pb-5 w-[84%] mx-auto flex flex-col justify-center items-center mt-4">
                    <h1 className="text-[45px] font-bold">Products</h1>
                    <span className="text-[18px] text-center px-2">Discover our top-quality Ninjutsu gear and 
                        equipment. From ninja uniforms to training weapons 
                        and accessories, find everything you need to enhance 
                        your practice. Shop with us for the best in quality and 
                        service, and take your training to the next level.</span>
                </div>
            </div>
            <div className="bottom mt-2 container w-[80%] mx-auto">

                <div className="left w-[20%] flex justify-start mr-10">
                    <div className="card w-[8rem] h-full bg-black text-red-950 px-10 py-4 mt-4 container flex-col gap-10 text-[50px]">
                        <section>N</section>
                        <section>I</section>
                        <section>N</section>
                        <section>J</section>
                        <section>A</section>
                    </div>
                </div>

                <div className="right w-[80%] container">
                    <div className="products">
                        <div className="top gap-12 flex justify-center items-center">
                            <img className="w-14 cursor-pointer rounded-full rotate-180" src="ArrowB.png" alt="png"/>
                            {product.map((item) => {
                                return(
                                    <div onClick={NextIMG} className="card w-[34rem] h-[32rem] flex bg-black px-8 py-7 rounded-xl container flex-col" key={item.id}>
                                        <img className="card w-[31rem] rounded-xl h-[16rem]" src={item.image} alt="png" />
                                        <div className="flex px-2 mt-2 mb-1 w-[31rem]">
                                            <h1 className="mr-auto text-[25px] font-bold text-white">{item.title}</h1>
                                            <h2 className="text-[23px] text-red-900">{item.price}</h2>                                           
                                        </div>    
                                        <p className="w-[31rem] mt-1 px-1 text-[17px]">{item.description}</p>
                                    </div>
                                )
                            })}
                            <img onClick={BackIMG} className="w-14 cursor-pointer rounded-full" src="ArrowB.png" alt="png"/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Products