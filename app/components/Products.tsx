'use client'
import { useEffect, useState } from "react"
import Link from "next/link";

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

    const NextIMG2 = () => {
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
    
    const BackIMG2 = () => {
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
                id:5,
                title: 'Shuriken',
                price:  '18 $',
                description: 'This high-quality shuriken is designed for balance and accuracy. Perfect for martial arts practice or as a unique collectible, it combines functionality with aesthetic appeal.',
                image: 'Cold Arms (2).png'
            }]);
        }
    };
    
    useEffect(() => {
        const timer = setTimeout(NextIMG2, 6000);
        return () => clearTimeout(timer);
    }, [product]);


    return(
        <div id="products" className="products-container flex flex-col text-white mt-24 rounded-xl md:w-full h-[50rem] md:h-full md:pt-5 md:pb-14">
            
            <div className="top">
                <div className="title-products border-b-[10px] gap-1 pb-5 w-[84%] md:w-full mx-auto flex flex-col justify-center items-center mt-4">
                    <h1 className="text-[45px] md:text-[35px] font-bold">Products</h1>
                    <span className="text-[18px] md:text-[17px] text-center px-2">Discover our top-quality Ninjutsu gear and 
                        equipment. From ninja uniforms to training weapons 
                        and accessories, find everything you need to enhance 
                        your practice. Shop with us for the best in quality and 
                        service, and take your training to the next level.</span>
                </div>
            </div>

            <div className="bottom mt-2 container md:flex-col w-[80%] md:w-full mx-auto">

                <div className="left w-[20%] md:w-full md:mx-auto flex justify-start mr-10">
                    <div className="card w-[8rem] md:w-[95%] md:mx-auto h-full bg-black text-red-950 px-10 py-4 md:p-1 mt-4 container md:flex-row flex-col gap-10 md:gap-12 md:rounded-xl text-[50px] md:text-[35px]">
                        <section>N</section>
                        <section>I</section>
                        <section>N</section>
                        <section>J</section>
                        <section>A</section>
                    </div>
                </div>

                <div className="right w-[80%] md:w-full container">
                    <div className="products">
                        <div className="top gap-12 md:gap-0 flex justify-center items-center">
                            <img onClick={NextIMG2} className="arooW md:hidden opacity-60 w-14 border-gray-700 border-4 cursor-pointer rounded-full rotate-180" src="ArrowB.png" alt="png"/>
                            {product.map((item) => {
                                return(
                                    <div className="card w-[34rem] md:w-[95%] md:mt-6 md:h-full h-[32rem] flex bg-black px-8 md:px-3 md:py-5 py-7 rounded-xl container flex-col" key={item.id}>
                                        <img className="card w-[31rem] md:w-[90%] rounded-xl h-[16rem] md:h-full" src={item.image} alt="png" />
                                        <div className="flex px-2 mt-2 mb-1 w-[31rem] md:w-[90%]">
                                            <h1 className="mr-auto text-[30px] md:text-[26px] font-bold text-white">{item.title}</h1>
                                            <h2 className="text-[23px] md:text-[21px] bg-gray-800 px-4 py-1 rounded-[30px/30px] text-red-900">{item.price}</h2>                                           
                                        </div>    
                                        <p className="w-[31rem] md:w-[90%] mt-2 px-1 text-[17px] md:text-[16px]">{item.description}</p>
                                    </div>
                                )
                            })}
                            <img onClick={BackIMG2} className="arooW md:hidden opacity-60 w-14 border-gray-700 border-4 cursor-pointer rounded-full" src="ArrowB.png" alt="png"/>
                        </div>
                    </div>
                    <Link href="/Products"><button className="fixed-btn absolute right-10 top-[14rem] md:top-[120rem] md:right-7 w-[13rem] py-2 rounded-[10px] bg-black text-white text-xl md:text-[18px] md:">More Products...</button></Link>
                </div>

            </div>

        </div>
    )
}

export default Products
