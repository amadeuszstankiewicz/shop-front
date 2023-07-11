import Link from "next/link";

export default function Header() {
    return (
        <div className="absolute w-screen h-fit z-50">
            <header className="container mx-auto">
                <nav className="text-white flex justify-between py-5 px-5 text-xl font-bold">
                    <div className="flex gap-8">
                        <Link href={'/'}>Home</Link>
                        <Link href={'/shop'}>Shop</Link>
                    </div>
                    
                    <div className="flex gap-8">
                        <Link href={'/account'}>My account</Link>
                        <Link href={'/cart'}>Cart</Link>
                    </div>
                </nav>
            </header>
        </div>
    )
}