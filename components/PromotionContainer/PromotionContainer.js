import Image from "next/future/image";
import styles from '../../styles/module-styles/PromotionContainer.module.scss'
const PromotionContainer = ({data}) => {
    return ( 
        <div className={styles.PromotionContainer+' '+ 'elx-animate PromotionContainer--twoModules'+' '+ data.class}>
            {data.items && data.items.map((item, index) => (
                <header key={index} className="PromotionContentItem">
                    <a className={styles['PromotionContentItem-content']+' '+ styles['PromotionContentItem-content-link']}>
                        <div className={styles['PromotionContentItem-body']}>
                            {item.headline && (
                                <span className={styles['PromotionContentItem-content-preHeader']}>{item.headline}</span>
                            )}
                            <p className="PromotionContentItem-content-title" dangerouslySetInnerHTML={{__html: item.heading}}>
                            </p>
                            <div className={styles['PromotionContentItem-content-text']} dangerouslySetInnerHTML={{__html: item.description}}>
                            </div>
                        </div>
                    </a>
                    <div className={styles['PromotionContentItem-media']}>
                        {item.image && item.image.ImageUrl && (
                            <Image
                                className="PromotionContentItem-media-image"
                                src={`/images/${item.image.ImageUrl}`}
                                width="550"
                                height="0"
                            />
                        )}
                    </div>
                </header>
            ))}
        </div>
        // <div className={'PromotionContainer '+ 'elx-animate '+ 'PromotionContainer--twoModules '+ data.class}>
        //     {data.items && data.items.map((item, index) => (
        //         <header key={index} className="PromotionContentItem">
        //             <a className="PromotionContentItem-content PromotionContentItem-content-link">
        //                 <div className="PromotionContentItem-body">
        //                     {item.headline && (
        //                         <span className="PromotionContentItem-content-preHeader">{item.headline}</span>
        //                     )}
        //                     <p className="PromotionContentItem-content-title" dangerouslySetInnerHTML={{__html: item.heading}}>
        //                     </p>
        //                     <div className="PromotionContentItem-content-text" dangerouslySetInnerHTML={{__html: item.description}}>
        //                     </div>
        //                 </div>
        //             </a>
        //             <div className="PromotionContentItem-media">
        //                 {item.image && item.image.ImageUrl && (
        //                     <Image
        //                         className="PromotionContentItem-media-image"
        //                         src={`/images/${item.image.ImageUrl}`}
        //                         width="550"
        //                         height="0"
        //                     />
        //                 )}
        //             </div>
        //         </header>
        //     ))}
        // </div>
     );
}
 
export default PromotionContainer;