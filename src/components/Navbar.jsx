import { Link } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa"

function NavBar() {
  
    return (
      <>
        <header>
          <nav className="flex items-center justify-between flex-nowrap">
            <ul className="flex justify-between gap-4 ml-4">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
            </ul>
            <ul className="mr-4">
              <li>
                  <Link to={"/shoppingcart"}><FaShoppingCart/></Link>
              </li>
            </ul>
          </nav>
        </header>
      </>
    )
  }
  
  export default NavBar