import React, { useState , useContext } from 'react';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import './Navbar.css';
import { Link } from 'react-router-dom';
import {ShopContext} from '../../Context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState('shop');
  const {getTotalCartItems} = useContext(ShopContext);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li className={menu === 'shop' ? 'selected' : ''} onClick={() => setMenu('shop')}><Link style={{textDecoration: 'none'}} to='/'>
          Shop </Link>{menu === 'shop' && <hr />}
        </li>
        <li className={menu === 'mens' ? 'selected' : ''} onClick={() => setMenu('mens')}><Link style={{textDecoration: 'none'}} to='/mens'>
          Men</Link> {menu === 'mens' && <hr />}
        </li>
        <li className={menu === 'womens' ? 'selected' : ''} onClick={() => setMenu('womens')}>
        <Link style={{textDecoration: 'none'}} to='/womens'>women </Link>{menu === 'womens' && <hr />}
        </li>
        <li className={menu === 'kids' ? 'selected' : ''} onClick={() => setMenu('kids')}>
        <Link style={{textDecoration: 'none'}} to='/kids'>Kids </Link>{menu === 'kids' && <hr />}
        </li>
      </ul>
      <div className="nav-login-cart">
      <Link to='/login'> <button>login</button></Link>
      <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;