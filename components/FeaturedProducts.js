import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductBrick from "./ProductBrick";
import useWidth from "./hooks/useWidth";
import Link from "next/link";

export default function FeaturedProducts({products}) {
    const screenWidth = useWidth();

    const responsive = {
        largeDesktop: {
            breakpoint: { max: 5000, min: 1536 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 1535, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 638 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 638, min: 0 },
            items: 1
        }
    };


    const isSmallScreen = screenWidth < 1023 ? true : false;

    if(products.length == 0) {
        return;
    }

    return (
        <div className="relative h-[600px] bg-gradient-to-b from-[#7ac8c8] to-[#fff] mt-[350px] z-50">
            <div className="absolute top-[-300px] w-full h-[300px] bg-gradient-to-b from-transparent to-[#7ac8c8]"></div>
            
            <div className="container mx-auto">
                <h2 className="text-center text-4xl font-bold my-5">Latest products</h2>
                <Carousel 
                    className="justify-content-center"
                    responsive={responsive}
                    swipeable={isSmallScreen}
                    draggable={isSmallScreen}>
                        
                    { 
                        products.map((product) => (
                            <ProductBrick key={product._id} product={product}/>
                        ))
                    }

                </Carousel>
                <Link href={`/shop`}
                    className="flex gap-2 items-center rounded-full w-fit bg-cyan-500 text-white py-2 px-6 font-bold mx-auto transition ease-linear my-5 hover:bg-cyan-400">
                    Show more
                </Link>
            </div>
        </div>
    )
}