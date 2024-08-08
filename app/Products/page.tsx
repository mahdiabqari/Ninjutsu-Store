function Products() {

    interface Data {
        id:number,
        title:string,
        price:string,
        description:string,
        image:string,
    }


   const Products : Data[] = [
        {
            id:1,
            title: 'Katana',
            price: '99$',
            description: 'Experience the precision of the traditional Japanese Katana. This high-quality steel sword features a sharp, curved blade and a balanced design, perfect for training or display.',
            image: 'katana.png'
        },
        {
            id:2,
            title: 'Nunchaku ',
            price: '75$',
            description: 'Master the art of Nunchaku with this durable and lightweight pair. Perfect for training, these nunchaku offer excellent grip and control, making them ideal for both beginners and advanced practitioners.',
            image: 'nunchico.png'
        },
        {
            id:3,
            title: 'Sai',
            price: '80$',
            description: 'This product, with its unique design and high quality, offers an unparalleled experience of comfort and elegance. Made from premium materials and advanced technology, it ensures durability and high performance. Perfect for everyday use as well as special occasions.',
            image: 'Cold Arms (3).png'
        },
        {
            id:4,
            title: 'Bo',
            price: '24$',
            description: 'This product, with its delightful natural wood aroma, brings a sense of tranquility and nature to your surroundings. Made from pure and natural extracts, this scent has long-lasting effects and is perfect for use in various environments.',
            image: 'bo.png'
        },
        {
            id:5,
            title: 'Shuriken',
            price:  '18 $',
            description: 'This high-quality shuriken is designed for balance and accuracy. Perfect for martial arts practice or as a unique collectible, it combines functionality with aesthetic appeal.',
            image: 'Cold Arms (2).png'
        }
   ] 

    return(
        <div className="container gap-10 flex-wrap w-[95%] mx-auto mt-10">
            {Products.map((item) => {
                return(
                    <div className="card w-[26rem] text-white md:w-[95%] md:mt-6 md:h-full h-[32rem] flex bg-black px-8 md:px-3 md:py-5 py-7 rounded-xl container flex-col" key={item.id}>
                        <div className="card w-[22rem] md:w-[90%] rounded-xl h-[14rem] md:h-full overflow-hidden">
                            <img className="container-img card w-[22rem] md:w-[100%] rounded-xl h-[14rem] md:h-full" src={item.image} alt="png" />
                        </div>
                        
                        <div className="flex px-2 mt-2 mb-1 w-[22rem] md:w-[90%]">
                            <h1 className="mr-auto text-[30px] md:text-[26px] font-bold text-white">{item.title}</h1>
                            <h2 className="text-[23px] md:text-[21px] bg-gray-800 px-4 py-1 rounded-[30px/30px] text-red-900">{item.price}</h2>                                           
                        </div>    
                        <p className="w-[22rem] md:w-[90%] mt-2 px-1 text-[17px] md:text-[16px]">{item.description}</p>
                    </div>
                )
            })}      
        </div>
    )
}
export default Products