import { Link } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa"

function NavBar() {
  
    return (
      <>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            <ul>
              <li>
                  <Link to="/shoppingcart"><FaShoppingCart/></Link>
              </li>
            </ul>
          </nav>
        </header>
      </>
    )
  }
  
  export default NavBar