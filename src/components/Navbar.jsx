import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import useCartStore from "./Cart";

function NavBar() {
  const cart = useCartStore((state) => state.cart);
  const totalItems = Object.values(cart).reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  return (
    <header>
      <nav className="flex items-center justify-between border p-4 sticky">
        <ul className="flex justify-between gap-4 ml-4">
          <li className="text-2xl hover:text-blue-500">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="text-2xl hover:text-blue-500">
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
        <ul className="mr-4">
          <li className="text-3xl relative">
            <Link to={"/checkout"} className="relative">
              <FaShoppingCart />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
