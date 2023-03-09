import styles from '../../styles/Footer.module.scss'
const Footer = ({data}) => {
    return (
        <>
        <div className={styles.footer}>
            <div className={styles['center-block']}>
                <div className={styles['top-row']+' '+ styles.logo}>
                    <div className={styles['logo-content']}>
                        <div className={styles.logo}>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles['center-block']}>
                <div className={styles['footer-content']}>
                    {data.footerColumns.map((column, i) => (
                        <div className={styles['footer-column']} key={i}>
                            <p className={styles['column-heading']}>{column.Heading}</p>
                            <div>
                                <ul className={styles['link-list']}>
                                    {column.FooterLinks.map((link, j)=> (
                                        <li key={j}>
                                            <a style={{color: 'white'}}>{link.Text}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles['bottom-row']+' '+ styles['center-block']}>
                <ul className={styles.list}>
                    {data.termsAndConditionLinks.map((item, k)=> (
                        <li key={k}>
                            <a>{item.Text}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <style jsx>{`
            div {
                display: block;
              }
        `}</style>
        </> 
     );
}
 
export default Footer;