import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <Link to='/'>Home</Link> |
            <Link to='/cart'>Cart</Link> |
            <Link to='/checkout'>Checkout</Link>
        </div>
    )
}

export default Header;