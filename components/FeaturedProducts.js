import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductBrick from "./ProductBrick";
import useWidth from "./hooks/useWidth";

export default function FeaturedProducts() {
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

    return (
        <div className="relative h-[600px] bg-gradient-to-b from-[#7ac8c8] to-[#fff] mt-[350px] z-50">
            <div className="absolute top-[-300px] w-full h-[300px] bg-gradient-to-b from-transparent to-[#7ac8c8]"></div>
            
            <div className="container mx-auto">
                <Carousel 
                    className="justify-content-center"
                    responsive={responsive}
                    swipeable={isSmallScreen}
                    draggable={isSmallScreen}>
                        
                    <ProductBrick />
                    <ProductBrick />
                    <ProductBrick />
                    <ProductBrick />
                    <ProductBrick />
                    <ProductBrick />
                    <ProductBrick />
                    <ProductBrick />
                    <ProductBrick />
                    <ProductBrick />

                </Carousel>
            </div>
        </div>
    )
}