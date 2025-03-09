import { Link } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa"

function NavBar() {
  
    return (
      <>
        <header>
          <nav className="flex items-center justify-between">
            <ul className="flex justify-between gap-4 ml-4">
              <li className="text-lg">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="text-lg">
                <Link to={"/contact"}>Contact</Link>
              </li>
            </ul>
            <ul className="mr-4">
              <li className="text-xl">
                  <Link to={"/shoppingcart"}><FaShoppingCart/></Link>
              </li>
            </ul>
          </nav>
        </header>
      </>
    )
  }
  
  export default NavBar