import { Link } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa"

function NavBar() {
  
    return (
      <>
        <header>
          <nav className="flex items-center justify-between border p-4 sticky">
            <ul className="flex justify-between gap-4 ml-4">
              <li className="text-2xl">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="text-2xl">
                <Link to={"/contact"}>Contact</Link>
              </li>
            </ul>
            <ul className="mr-4">
              <li className="text-3xl">
                  <Link to={"/shoppingcart"}><FaShoppingCart/></Link>
              </li>
            </ul>
          </nav>
        </header>
      </>
    )
  }
  
  export default NavBar