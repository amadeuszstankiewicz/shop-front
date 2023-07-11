

export default function Hero() {


    return (
        <div className="w-full min-h-screen z-0">
            <div className="hero-image-container w-fit h-fit relative mx-auto">
                <img className="max-h-screen w-auto" src="/images/hero-bg.png" />
                <img className="absolute top-0 right-0 h-3/4 w-auto" src="/images/hero-dragon.png" />
                <div className="absolute w-full max-w-[830px] px-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <h1 className="text-white text-center text-5xl font-bold mb-5">
                        The Fantasy world awaits you
                    </h1>
                    <div className="text-white text-center text-xl font-bold mb-5">
                        Step into our world and discover the figurine that aligns with your dreams. 
                        Each figurine is meticulously crafted, with utmost attention given to the finest details. 
                        Its quality is thoroughly checked multiple times at every stage of production
                    </div>
                </div>
            </div>
        </div>
    )
}