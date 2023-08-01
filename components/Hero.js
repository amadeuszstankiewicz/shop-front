import Figurine from "./Figurine";
import useWidth from "./hooks/useWidth";
import DecorationImage from "./utils/DecorationImage";


export default function Hero() {
    const screenWidth = useWidth();

    return (
        <>
            <div className="relative">
                <div className="relative w-full min-h-screen z-0 flex items-center">
                    <div className="container hero-image-container w-fit h-fit relative mx-auto z-1">
                        <img className="max-h-screen w-auto" src="/images/hero-bg.webp" alt="" />
                        <img className="absolute top-0 right-0 h-3/4 w-auto" src="/images/hero-dragon.png" alt="" />
                    </div>
                </div>

                <div className="absolute w-full max-w-[830px] px-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 drop-shadow-lg z-50">
                    <h1 className="text-white text-center text-5xl font-bold mb-5">
                        The Fantasy world awaits you
                    </h1>
                    <div className="text-white text-center text-xl font-bold mb-5">
                        Step into our world and discover the figurine that aligns with your dreams. 
                        Each figurine is meticulously crafted, with utmost attention given to the finest details. 
                        Its quality is thoroughly checked multiple times at every stage of production
                    </div>
                </div>

                <DecorationImage
                    x={15} y={19} 
                    w={150} h={150} 
                    content="amulet_1.png"
                    />

                <DecorationImage
                    x={80} y={74} 
                    w={150} h={150} 
                    content="shield_2.png"
                    />
            </div>

            {
                screenWidth > 1023 ? (
                    <Figurine />
                ) : (
                    null
                )
            }
        </>
    )
}