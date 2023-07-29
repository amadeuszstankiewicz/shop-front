
import ProductBrick from "../ProductBrick";

export default function ShopItems({products}) {

  
    return (
        <div className="relative container mx-auto my-5 min-h-[calc(100vh-248px)]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                { 
                    products.map((product) => (
                        <ProductBrick key={product._id} product={product}/>
                    ))
                }
            </div>
        </div>
    )
}