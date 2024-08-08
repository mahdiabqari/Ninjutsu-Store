
function Blog() {
    return(
        <div className="blog-container rounded-xl w-[90%] md:w-full py-10 px-12 md:px-[10px] flex flex-col justify-center items-center mt-[5rem] mb-[7rem] md:flex-col">
            

            <div className="right flex flex-col justify-center items-center w-[70%] md:w-full">
                <div className="card md:px-3 bg-black text-white flex flex-col justify-center items-center w-[100%] rounded-2xl">
                    <h1 className="text-[45px] my-4 font-bold md:text-2xl">About us</h1>
                    <span className="text-xl mb-5 md:text-[20px] md:text-center">Lorem ipsum, dolor sit amet consectetur adipisicing </span>
                </div>
                <div className="card md:px-3 mt-2 bg-black text-white w-full flex flex-col justify-center items-center rounded-xl">
                    <div className="border-b-solid border-b-2 border-white md:my-3">
                        <h1 className="text-2xl my-4 md:text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
                    </div>
                    <div className="mx-8 my-4 md:mb-7 md:mx-2">
                        <p className="par text-xl text-center my-4 md:my-2 mx-4 md:mx-0 md:text-[17px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat officiis illum cumque unde commodi veniam dignissimos, animi, eius qui velit magnam ipsum provident quidem minus consectetur suscipit! Vero, corporis dolores.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat officiis illum cumque unde commodi veniam dignissimos, animi, eius qui velit magnam ipsum provident quidem minus consectetur suscipit! Vero, corporis dolores.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat officiis illum cumque unde commodi veniam dignissimos, animi, eius qui velit magnam ipsum provident quidem minus consectetur suscipit! Vero, corporis dolores.</p>
                    </div>
                </div>
            </div>
            <div className="left flex gap-[12rem] md:gap-10 justify-center items-center w-full mt-5 md:w-full md:flex-row md:mb-10">
                <a href="https://t.me/mahdiabqari" target="_blank" title="https://uploadkon.ir/"><img className="w-[7rem] rounded-full md:w-[87px] md:h-[87px]" src="https://uploadkon.ir/uploads/779116_24telegram.jpg" alt="https://uploadkon.ir/uploads/779116_24telegram.jpg" /></a>
                <a href="https://github.com/mahdiabqari" target="_blank" title="https://uploadkon.ir/"><img className="w-[7rem] rounded-full md:w-[87px] md:h-[87px]" src="https://imgurl.ir/uploads/f085_mf6e1dnm_thumb.png" alt="f085_mf6e1dnm.png" /></a>
                <a href="https://www.instagram.com/mahdiabqari/" target="_blank" title="https://uploadkon.ir/"><img className="w-[7rem] rounded-full md:w-[87px] md:h-[87px]" src="https://uploadkon.ir/uploads/ae8216_24instagram.jpg" alt="https://uploadkon.ir/uploads/ae8216_24instagram.jpg" /></a>
            </div>

        </div>
    )
}

export default Blog