import Image from "next/image";
import Link from "next/link";
import SearchField from "./SearchField";
import UserNav from "./UseNav";

const Navbar = () => {
    return (
        <nav className="w-full fixed top-0 left-0 py-6 border-b bg-purple z-10">
            <div className="max-w-[1500px] max-auto px-6">
                <div className="flex justify-between item-centes">
                    <Link href="/">
                    <Image
                    src="/nhs.png"
                    alt="NHS logo"
                    width={180}
                    height={38}
                    /> 
                    </Link>
                    <div className="flex space-x-6">
                        <SearchField />
                    </div>
                    <div className="flex items-center space-x-6">
                        <UserNav />
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Navbar;

