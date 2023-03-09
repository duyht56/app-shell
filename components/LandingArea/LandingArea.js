import Image from 'next/future/image'
import styles from '../../styles/module-styles/LandingArea.module.scss'

const LandingArea = ({data}) => {
    return ( 
        <div className="compaign-landing">
            <div className="compaign-landing__container">
                <div className={styles['campaign-landing__media']}>
                    <Image
                        className={styles['campaign-landing__image']+' '+styles['campaign-landing__image--mobile']}
                        src={`/images/${data.image}`}
                        width={550}
                        height={0}
                    />
                </div>
            </div>
            <div className={styles['campaign-landing__content']+' '+styles['text-center']}>
                <div className="campaign-landing__text-block-description">
                    <h2 dangerouslySetInnerHTML={{__html: data.heading}}></h2>
                    <div dangerouslySetInnerHTML={{__html: data.teaserText}}></div>
                </div>
            </div>
        </div>
     );
}
 
export default LandingArea;