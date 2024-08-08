function Footer() {
    return(
        <div className="footer md:px-[10px] flex justify-center items-center w-full h-[17rem] bg-black text-white mt-[10rem] md:mt-[5rem] md:h-[32rem]">
            <div className="con w-[85%] flex gap-7 md:flex-col md:w-[100%] md:my-2 md:gap-0">
                
                <div className="flex flex-col justify-center items-start w-[33%] ml-28 md:mx-0 md:w-[100%] md:border-b-2 md:justify-start md:mt-2">
                    <div className="flex justify-start mr-auto items-start gap-2">
                    <img className="w-10 h-10 rounded-full" src="https://imgurl.ir/uploads/w23876_mns-high-resolution-logo-white.png" alt="n0537_My_logo.png" />
                        <h1 className="text-3xl mb-3">M.N.S</h1>
                    </div>

                    <p className="md:text-sm">
                        Welcome and open yourself to your truest
                        love this year with us! With the Release
                        Process.
                    </p>

                    <div className="flex justify-center items-start mt-2 gap-2 md:mb-2">
                        <a href="https://t.me/mahdiabqari" target="_blank" title="https://uploadkon.ir/"><img className="w-7 rounded-full" src="https://uploadkon.ir/uploads/779116_24telegram.jpg"  alt="https://uploadkon.ir/uploads/779116_24telegram.jpg" /></a>
                        <a href="https://www.instagram.com/mahdiabqari/" target="_blank" title="https://uploadkon.ir/"><img className="w-7 rounded-full" src="https://uploadkon.ir/uploads/ae8216_24instagram.jpg" alt="https://uploadkon.ir/uploads/ae8216_24instagram.jpg" /></a>
                        <a href="https://github.com/mahdiabqari" target="_blank" title="https://uploadkon.ir/"><img className="w-7 rounded-full" src="https://imgurl.ir/uploads/f085_mf6e1dnm_thumb.png" alt="f085_mf6e1dnm.png" /></a>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-start w-[33%] ml-36 md:mx-0 md:w-[100%] md:border-b-2 md:justify-start md:mt-2">
                    <h1 className="text-2xl mb-3">Navigation</h1>
                    <h5>- About us</h5>
                    <h5>- Contact us</h5>
                    <h5>- Projects</h5>
                    <h5 className="md:mb-2">- Recent Post</h5>
                </div>

                <div className="flex flex-col justify-center items-start w-[33%] md:mx-0 md:w-[100%] md:border-b-2 md:justify-start md:mt-2 md:mb-7">
                    <h1 className="text-2xl mb-3">All Services</h1>
                    <h5>- Web Disign</h5>
                    <h5>- Web Development</h5>
                    <h5>- Brand Identity</h5>
                    <h5 className="md:mb-2">- Front end</h5>
                </div>
            
            </div>
        </div>
    )
}

export default Footer