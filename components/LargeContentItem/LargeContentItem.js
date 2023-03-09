import Image from 'next/image'
import styles from '../../styles/module-styles/LargeContentItem.module.scss'
const LargeContentItem = ({data}) => {
    return (
        <>
        {data.items && (
            <div className="LargeContent elx-animate">
                {data.items.map((item, i) => (
                    <div className={styles.LargeContentItem} key={i}>
                        {item.image && item.image.ImageUrl && (
                            <figure className={styles['LargeContentItem-media']}>
                                <Image
                                    className='LargeContentItem-media-image'
                                    width={1440}
                                    height={900}
                                    src={`/images/${item.image.ImageUrl}`}
                                />
                            </figure> 
                        )}
                        <div className={styles['LargeContentItem-content']}>
                            <h1 className={styles['LargeContentItem-content-title']} dangerouslySetInnerHTML={{__html: item.heading}}></h1>
                            <div className="LargeContentItem-content-body">
                                <div dangerouslySetInnerHTML={{__html: item.description}}>
                                </div>
                                {/* <p>{item.description}</p> */}
                                <a href='#' className={'btn'+' '+styles['btn-primary']}>{item.link.Text}</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )}
        </> 
     );
}
 
export default LargeContentItem;