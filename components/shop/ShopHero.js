
export default function ShopHero() {
  
    return (
        <div className="relative min-h-[180px] flex items-center justify-center mt-[68px]">
            <div className="absolute w-full h-[180px] overflow-hidden z-0">
                <img src="/images/shop/background.jpg" className="absolute w-full h-auto min-h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"  alt=""/>
            </div>
            <h1 className="text-white text-center z-10 h-fit py-8 text-5xl font-bold custom-text-shadow">
                Shop
            </h1>
        </div>
    )
}