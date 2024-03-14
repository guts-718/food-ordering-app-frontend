import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

const Header = () => {
  return(
    <div className="border-b-2 border-b-orange-500 pt-6">
        <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold tracking-tight text-orange-500">
            MernEats.com
        </Link>
        
         {/* for medium and bigger screen this will remain hidden */}
        <div className="md:hidden">
            <MobileNav/>
        </div>

        {/* initially it will be hidden but from medium onwards it will be block */}
        <div className="hidden md:block"> 
            <MainNav/>
        </div>
        </div>
    </div>
  )
}

export default Header;