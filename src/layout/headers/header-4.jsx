import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
// internal
import { Menu } from '@/svg';
import Menus from './header-com/menus';
import logo_white from '@assets/img/logo/logo.svg'; import OffCanvas from '@/components/common/off-canvas';
import useSticky from '@/hooks/use-sticky';

const HeaderFour = () => {
  const { sticky } = useSticky();
  const [isOffCanvasOpen, setIsCanvasOpen] = useState(false);
  const dispatch = useDispatch();
  return (
    <>
      <header>
        <div
          id="header-sticky"
          className={`tp-header-area tp-header-style-transparent-white tp-header-sticky tp-header-transparent has-dark-logo tp-header-height ${sticky ? 'header-sticky' : ''
            }`}
        >
          <div className="tp-header-bottom-3 pl-85 pr-85">
            <div className="container-fluid">
              <div className="row align-items-center">

                {/* Logo */}
                <div className="col-xl-2 col-lg-2 col-6">
                  <div className="logo">
                    <Link href="/">
                      <Image
                        className="logo-light"
                        src={logo_white}
                        alt="logo"
                        width={100}
                      />
                    </Link>
                  </div>
                </div>

                {/* Desktop Menu */}
                <div className="col-xl-10 col-lg-10 d-none d-lg-block">
                  <div className="main-menu menu-style-3 menu-style-4 p-relative">
                    <nav className="tp-main-menu-content">
                      <Menus />
                    </nav>
                  </div>
                </div>

                {/* Mobile Menu (simple text menu link) */}

                <div className="col-6 d-lg-none">
                  <div className="tp-header-action d-flex justify-content-end align-items-center">
                    <button onClick={() => setIsCanvasOpen(true)} type="button" className="tp-offcanvas-open-btn">
                      <Menu />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div >
      </header >
      {/* off canvas start */}
      <OffCanvas isOffCanvasOpen={isOffCanvasOpen} setIsCanvasOpen={setIsCanvasOpen} categoryType="jewelry" />
      {/* off canvas end */}    </>
  );
};

export default HeaderFour;