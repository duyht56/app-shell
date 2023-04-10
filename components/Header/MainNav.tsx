import styles from '../../styles/modules/MainNav.module.scss';
import { subscribe } from '@/events';
import dynamic from 'next/dynamic';

const DynamicAppliancesNav = dynamic(() => import('./AppliancesNav'), {
  loading: () => <p>Loading...</p>,
});

import Link from 'next/link';
import { useEffect, useState } from 'react';
const MainNav = ({
  otherNavigation,
  promotionalNavigation,
  eventNavigation,
  exploreNavigation,
}: any) => {
  const [appliancesActive, setAppliancesActive] = useState(false);
  const [body, setBody] = useState<HTMLBodyElement | undefined>(undefined);

  const [cartCount, setCartCount] = useState<number | undefined>(0);

  useEffect(() => {
    if (body) {
      if (appliancesActive) {
        (body as HTMLBodyElement).style.overflowY = 'hidden';
      } else {
        (body as HTMLBodyElement).style.overflowY = 'auto';
      }
    }
  }, [appliancesActive, body]);

  const checkCount = () => {
    const cartItemsString = localStorage.getItem('cartItems');
    if (cartItemsString) {
      const cartItems = JSON.parse(cartItemsString);
      const count = cartItems
        .map(item => item.quantity)
        .reduce((a, b) => a + b);
      setCartCount(count);
    } else {
      setCartCount(0);
    }
  };

  useEffect(() => {
    checkCount();
    subscribe('addToCart', () => {
      checkCount();
    });
  }, []);

  

  const handleClick = () => {
    setAppliancesActive(!appliancesActive);
    if (!body) {
      const b = document.getElementsByTagName('body')[0];
      setBody(b);
    }
  };
  return (
    <>
      <div
        className="backdrop backdrop--open"
        data-binding="BackdropElement"
        onClick={() => setAppliancesActive(false)}
        style={{
          zIndex: 50,
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: 'rgba(79,78,83,.85)',
          display: appliancesActive ? 'block' : 'none',
        }}
      ></div>
      <div className={styles.MainNav + ' ' + styles.Navigation}>
        <button className={styles['Nav-offCanvasButton']}>
          <div
            className={
              styles.Burger + ' ' + styles['Nav-offCanvasButton-burger']
            }
          >
            <div className={styles['Burger-bar']}></div>
          </div>
        </button>
        <div className={styles['Nav-head']}>
          <a className={styles['Nav-head-logo']}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 218 49">
              <path
                fill="#041E41"
                d="M0 49.993h49.98V0H0v49.993zM32.035 3.818c8.834 2.896 15.218 11.273 15.242 21.169.024 9.735-6.231 18.092-15.242 21.18V3.818zm-7.053-1.133c1.596 0 3.296.213 4.712.495 0 11.326-10.952 20.647-22.255 20.647l-4.726-.007c.775-11.61 10.38-21.135 22.269-21.135zm-17.539 23.5c11.301 0 22.249 9.311 22.249 20.626-1.414.289-3.199.504-4.71.504-11.893-.016-21.823-9.57-22.272-21.13h4.733zm59.268 3.204v-3.151h10.4v-4.017H66.709v-5.849h11.065v-4.008H62.452v16.843c0 4.258 1.813 7.17 6.069 7.768.085.021.169.037.247.039h.077c.436.049.881.081 1.348.081h7.876v-4.003h-7.841c-1.353 0-3.517-.668-3.517-3.703zm14.383 7.712h4.259V12.358h-4.259v24.743zm16.762-18.457c-5.383 0-9.412 3.709-9.412 9.484v.143c0 5.634 3.886 9.271 9.519 9.271 2.709 0 5.24-.748 7.557-3.21l-2.567-2.495c-1.355 1.355-2.674 2.068-4.848 2.068-3.173 0-5.276-1.854-5.419-4.707h13.974c.071-.713.071-1.497.071-1.497.002-5.028-3.528-9.057-8.875-9.057zm-5.062 7.559c.178-2.176 2.389-3.923 5.062-3.923 2.495 0 4.527 1.783 4.527 3.923h-9.589zm25.906-3.744c1.925 0 3.352.714 4.563 1.961l2.638-2.746c-2.068-2.211-4.527-3.102-7.201-3.102-5.419 0-9.768 4.029-9.768 9.52s4.349 9.521 9.768 9.521c2.674 0 5.134-.891 7.201-3.102l-2.638-2.746c-1.211 1.248-2.638 1.961-4.563 1.961-3.138 0-5.526-2.39-5.526-5.634s2.388-5.633 5.526-5.633zm14.111 6.937h-.005v-6.317h3.873v-3.87h-3.868v-6.85h-4.259v17.288l.012-.001c.122 4.02 1.948 6.758 6.057 7.335.085.021.169.037.247.038h.077c.436.049.881.082 1.348.082h.451l.015-4.003h-.431c-1.353 0-3.517-.667-3.517-3.702zm11.676-7.526v-2.66h-4.224v17.891h4.224v-9.408c0-2.946 1.881-4.793 4.826-4.793.674 0 1.278.07 1.775.178v-4.117a9.118 9.118 0 0 0-1.277-.107c-2.556.001-4.472 1.173-5.324 3.016zm17.015-3.193c-5.431 0-9.762 4.116-9.762 9.478 0 5.359 4.331 9.478 9.762 9.478 5.393 0 9.76-4.119 9.76-9.478-.001-5.361-4.367-9.478-9.76-9.478zm0 15.087c-3.159 0-5.536-2.451-5.536-5.609 0-3.16 2.377-5.609 5.536-5.609 3.124 0 5.536 2.449 5.536 5.609-.001 3.159-2.412 5.609-5.536 5.609zm12.378 3.337h4.261V12.358h-4.261v24.743zm19.622-7.491c0 2.839-1.668 4.048-3.905 4.048-2.236 0-3.903-1.209-3.903-4.01V19.21h-4.295v10.792c0 5.112 3.726 7.561 8.163 7.561 4.472 0 8.233-2.485 8.233-7.668V19.21h-4.293v10.4zm20.408 1.77l-2.686-3.757 3.326-4.532 2.848-3.881h-4.649l-3.87 5.36-3.904-5.36h-4.613l2.645 3.619 3.53 4.829-3.7 5.153-3.079 4.29h4.578l4.542-6.319 4.544 6.319h4.579l-4.091-5.721z"
              ></path>
            </svg>
          </a>
        </div>
        <div className={styles.NavSite}>
          <ul className={styles['NavSite-list'] + ' ' + styles.NavLeft}>
            {true && (
              <>
                <li className={styles['NavSite-item']}>
                  <a
                    className={`${styles['NavSite-link']} ${
                      appliancesActive && styles['NavSite-link__active']
                    }`}
                    onClick={handleClick}
                  >
                    Appliances
                  </a>
                  {appliancesActive && <DynamicAppliancesNav />}
                </li>
                <li className={styles['NavSite-item']}>
                  <Link
                    className={styles['NavSite-link']}
                    href={`/sv-se/laundry/washing-machines/compact-washing-machine/ew6s4204c1/`}
                  >
                    Shop Ricambi e accessori
                  </Link>
                </li>
              </>
            )}
            {otherNavigation && (
              <li className={styles['NavSite-item']}>
                <a className={styles['NavSite-link']}>
                  {otherNavigation.MenuTitle}
                </a>
              </li>
            )}
            {promotionalNavigation && (
              <li className={styles['NavSite-item']}>
                <Link href={`/sv-se/local/promotions/`}>
                  <a className={styles['NavSite-link']}>
                    {promotionalNavigation.MenuText}
                  </a>
                </Link>
              </li>
            )}
          </ul>
          <ul className={styles['NavSite-list'] + ' ' + styles.NavRight}>
            {eventNavigation && (
              <li className={styles['NavSite-item']}>
                <a className={styles['NavSite-link']}>
                  {eventNavigation.MenuText}
                </a>
              </li>
            )}
            {exploreNavigation && (
              <li className={styles['NavSite-item']}>
                <a className={styles['NavSite-link']}>
                  {exploreNavigation.MenuText}
                </a>
              </li>
            )}
            {true && (
              <>
                <li className={styles['NavSite-item']}>
                  <Link
                    className={styles['NavSite-link']}
                    href={`/sv-se/laundry/washing-machines/compact-washing-machine/ew6s4204c1/`}
                  >
                    Explore
                  </Link>
                </li>
                <li className={styles['NavSite-item']}>
                  <Link
                    className={styles['NavSite-link']}
                    href={`/sv-se/laundry/washing-machines/compact-washing-machine/ew6s4204c1/`}
                  >
                    Support
                  </Link>
                </li>
              </>
            )}
          </ul>
          <ul className={styles['NavSite-subList']}>
            <li className={styles['NavSite-item']}>
              <a className={styles['NavSite-link']}> Find store </a>
            </li>
            <li
              className={
                styles['NavSite-item'] + ' ' + styles['NavSite-item--loginLink']
              }
            >
              <a className={styles['NavSite-link']}> Sign in </a>
            </li>
          </ul>
        </div>
        <button className={styles['Nav-searchButton']}>
          <svg
            viewBox="0 0 27 28"
            className={styles.SvgIcon + ' ' + styles['SvgIcon--search']}
          >
            <path d="M19.271 10.6a9 9 0 11-18-.001 9 9 0 0118 0zm7 15.999l-9-9"></path>
          </svg>
        </button>
        <div className={styles.cart}>
          <Link className={styles['Cart-toggleBasket']} href="/sv-se/basket/" onClick={() => setAppliancesActive(false)}>
            <svg
              data-name="Layer 1"
              viewBox="0 0 32.16 26.09"
              className={styles.SvgIcon + ' ' + styles['SvgIcon--basket']}
            >
              <g strokeWidth="2">
                <path d="M16.08 8.47H1.27l4 16.6h21.7l4-16.63zM23.71 8.29a7.41 7.41 0 00-14.82 0"></path>
              </g>
            </svg>
            <span className={styles['Cart-itemCount']}>{cartCount}</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MainNav;
