import styles from '../../styles/modules/TopNav.module.scss';

import Link from 'next/link';
import { TopNavigation } from './model';

const TopNav = ({ Login, ReasonsToBuy, StoreLocator }: TopNavigation) => {
  return (
    <nav className={styles.NavBar}>
      <div className={styles.TopNav}>
        <div className={styles.NavList}>
          {ReasonsToBuy && (
            <ul
              className={
                styles['TopNav-list'] +
                ' ' +
                styles['TopNav-List-left'] +
                ' ' +
                styles['NavList-list']
              }
            >
              {ReasonsToBuy.map((nav, index) => (
                <li className={styles['NavList-item']} key={index}>
                  {nav && (
                    <Link href="/" className={styles['TopNav-list-item-link']}>
                      <span className={styles['NavList-text']}>{nav.Text}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div
          className={styles['TopNav-list'] + ' ' + styles['TopNav-list--right']}
        >
          {StoreLocator && (
            <span
              className={
                styles['TopNav-list-item'] +
                ' ' +
                styles['TopNav-list-item--icon']
              }
            >
              <Link href="/" className={styles['TopNav-list-item-link']}>
                <span className={styles['NavList-text']}>
                  {StoreLocator.Text}
                </span>
              </Link>
            </span>
          )}
          {Login && (
            <span
              className={
                styles['TopNav-list-item'] +
                ' ' +
                styles['TopNav-list-item--icon']
              }
            >
              <Link href="/" className={styles['TopNav-list-item-link']}>
                <span className={styles['NavList-text']}>{Login.Text}</span>
              </Link>
            </span>
          )}
        </div>
      </div>
      <div className={styles['NavList--mobile']}>
        <div className={styles.NavList}>
          {ReasonsToBuy && (
            <ul
              className={
                styles['TopNav-list'] +
                ' ' +
                styles['TopNav-List-left'] +
                ' ' +
                styles['NavList-list'] +
                ' ' +
                styles['NavList-list--mobile']
              }
            >
              {ReasonsToBuy.map((nav, index) => (
                <li className={styles['NavList-item']} key={index}>
                  <Link href="/" className={styles['TopNav-list-item-link']}>
                    <span className={styles['NavList-text']}>{nav.Text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
