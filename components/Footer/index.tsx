import Link from 'next/link';
import styles from '../../styles/modules/Footer.module.scss';
import { IFooter } from './model';

const Footer = ({ footerColumns, termsAndConditionLinks }: IFooter) => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles['center-block']}>
          <div className={styles['top-row'] + ' ' + styles.logo}>
            <div className={styles['logo-content']}>
              <div className={styles.logo}></div>
            </div>
          </div>
        </div>
        <div className={styles['center-block']}>
          <div className={styles['footer-content']}>
            {footerColumns?.map((column, i) => (
              <div className={styles['footer-column']} key={i}>
                <p className={styles['column-heading']}>{column.Heading}</p>
                <div>
                  <ul className={styles['link-list']}>
                    {column.FooterLinks.map((link, j) => (
                      <li key={j}>
                        <Link href="/" style={{ color: 'white' }}>
                          {link.Text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles['bottom-row'] + ' ' + styles['center-block']}>
          <ul className={styles.list}>
            {termsAndConditionLinks?.map((item, k) => (
              <li key={k}>
                <Link href="/">{item.Text}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
