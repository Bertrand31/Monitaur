import React, { PropTypes } from 'react';
import Swipeable from 'react-swipeable';
import { Link } from 'react-router';

import '../../styles/Homepage/index.scss';

const PageComponent = ({ children, menuIsOpen, toggleMenu, openMenu, closeMenu }) => (
    <Swipeable onSwipingRight={openMenu} onSwipingLeft={closeMenu} className="o-front o-page">
        {/*<Popover form={this.props.children} />*/}
        <nav className="c-topnav">
            <button
                onClick={toggleMenu}
                className={`hamburger hamburger--arrow ${menuIsOpen ? 'is-active' : ''}`}
                type="button"
            >
                <span className="hamburger-box">
                    <span className="hamburger-inner" />
                </span>
            </button>
            <Link to="/" className="o-header__logo">
                <h1 className="c-h1">
                    <img src="/images/logo-white.svg" width="187" alt="Monitaure - Monitoring for the masses" />
                </h1>
            </Link>
            <ul className={`c-topnav__menu ${menuIsOpen ? 's-menu-is-open' : ''}`}>
                <li className="c-topnav__el"><Link to="/" className="c-topnav__link">Home</Link></li>
                <li className="c-topnav__el"><Link to="/tour" className="c-topnav__link">Tour</Link></li>
                <li className="c-topnav__el"><a href="/#a-aboutus" className="c-topnav__link">About us</a></li>
                <li className="c-topnav__el"><a href="/#a-aboutus" className="c-topnav__link">Contact</a></li>
                <li className="c-topnav__el--dummy" aria-hidden="true" />
                <li className="c-topnav__el c-topnav__el--btn"><Link to="/login" className="c-button--empty">Log in</Link></li>
                <li className="c-topnav__el c-topnav__el--btn"><Link to="/signup" className="c-button--round">Sign up</Link></li>
            </ul>
        </nav>

        {children}

        <section className="c-pane c-pane--small c-pane--green c-pane--bubbles c-pane--try">
            <div className="c-pane--bubbles__bubbles-container" aria-hidden="true">
                <div className="c-pane--bubbles__bubble" />
                <div className="c-pane--bubbles__bubble" />
                <div className="c-pane--bubbles__bubble" />
            </div>
            <div className="l-pane-grid">
                <h2 className="c-h2">Give it a try!</h2>
                <p className="c-pane__body">You&apos;re just one step away from Monitaure&apos;s dashboard</p>
                <Link to="/signup" className="c-button--round">Sign up</Link>
            </div>
        </section>

        <footer className="c-footer">
            <div className="l-pane-grid">
                <div className="l-pane-grid__item c-footer__logo">
                    <img src="/images/logo-gray.svg" alt="Logo Monitaure" />
                    <p>Monitaure.io ©2016</p>
                </div>
                <nav className="l-pane-grid__item c-footer__nav">
                    <ul className="c-footernav">
                        <li className="c-footernav__el"><Link to="https://github.com/Bertrand31/Monitaure/wiki/Monitaure-tour---%5BTEMPORARY-PAGE%5D">Tour</Link></li>
                        <li className="c-footernav__el"><a href="/login">Log in</a></li>
                        <li className="c-footernav__el"><Link to="/signup">Sign up</Link></li>
                        <li className="c-footernav__el"><a href="/#a-aboutus">Contact</a></li>
                    </ul>
                </nav>
                <div className="l-pane-grid__item c-footer__text">
                    <p>
                        Monitaure is a free server monitoring online application aiming to help SysAdmins.
                        If you encounter any problem or want to get in touch with us, please do so through the links in the &ldquo;Abous us&rdquo; section.
                    </p>
                </div>
            </div>
        </footer>
    </Swipeable>
);

PageComponent.propTypes = {
    menuIsOpen: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func.isRequired,
    openMenu: PropTypes.func.isRequired,
    closeMenu: PropTypes.func.isRequired,
};

export default PageComponent;
