import Image from 'next/future/image'
import styles from '../../styles/module-styles/MainContentArea.module.scss'

const MainContentArea = ({data}) => {
    return ( 
        <div className={styles.MainContentArea}>
            {data.rowList && data.rowList.map((item, i)=> (
                <div key={i} className={styles['MainContentArea__center-block']}>
                    <div className={styles['MainContentArea-module']}>
                        <div className={styles['content-unit-container']}>
                            <div className={styles['content-left']+' '+styles['content-half']}>
                                <div className={styles['unit-image']}>
                                    <Image
                                        src={`/images/${item.props.image.ImageUrl}`}
                                        width={530}
                                        height={0}
                                    />
                                </div>
                            </div>
                            <div className={styles['content-right']+' '+styles['content-half']}>
                                <div className={styles['cp-subunit-content']}>
                                    <h2 className="cp-subunit-content-title" dangerouslySetInnerHTML={{__html: item.props.bodyHeading}}></h2>
                                    <div  className="cp-subunit-content-details" dangerouslySetInnerHTML={{__html: item.props.bodyText}}></div>
                                    <div className={styles['cp-cta']}>
                                        <a>
                                            <span dangerouslySetInnerHTML={{__html: item.props.link.Text}}></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
     );
}
 
export default MainContentArea