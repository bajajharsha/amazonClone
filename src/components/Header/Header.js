import React from 'react'
import "../Header/Header.css"
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from '../StateProvider';
// import { auth } from "../../../../Login/firebase";


function Header() {
    const [{ basket, user }] = useStateValue();

    console.log(basket)
    return (
        <nav className="header">

            {/* logo on the left -> img */}
            <Link to="/amazon-clone">
                <img className="header__logo" src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/large-images-amazon-png-logo-vector-7.png3ft3d1416935166817" alt="logo"></img>
            </Link>

            {/* search box */}
            <div className="header__search">
                <input type="text" className="header__searchInput"></input>
                <SearchIcon className="header__searchIcon" />
            </div>

            {/* 3 links */}
            <div className="header__nav">
                {/* 1st Link */}
                <Link to="/login" className="header__link">
                    <div className='header__option'>
                        <span className="header__optionLineOne">Hello, {!user ? 'Guest' : user.email}</span>
                        <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>

                {/* 2nd Link */}
                <Link to="/amazon-clone" className="header__link">
                    <div className='header__option'>
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>

                {/* 3rd Link */}
                <Link to="/amazon-clone" className="header__link">
                    <div className='header__option'>
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>
            </div>

            {/* 4th Link */}
            <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">
                    {/* Cart icon */}
                    <ShoppingBasketIcon />
                    {/* number of items in the cart */}
                    <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>

                </div>
            </Link>
        </nav>
    )
}

export default Header