
import ProductBrick from "../ProductBrick";

export default function ShopItems() {
  
    return (
        <div className="relative container mx-auto my-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
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
                <ProductBrick />
                <ProductBrick />
                <ProductBrick />
                <ProductBrick />
                <ProductBrick />
            </div>
        </div>
    )
}