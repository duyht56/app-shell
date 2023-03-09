import Image from 'next/future/image'
const PromotionContainerItem = ({data}) => {
    return ( 
        <div className="elx-animate">
            {data.items && data.items.map((item, index)=> (
                <header className="PromotionContentItem" key={index}>
                    <a className="PromotionContentItem-content PromotionContentItem-content-link">
                        <div className="PromotionContentItem-content-body">
                            <span className="PromotionContentItem-content-preHeader" dangerouslySetInnerHTML={{__html: item.headline}}>
                            </span>
                            <p className="PromotionContentItem-content-title" dangerouslySetInnerHTML={{__html: item.heading}}></p>
                            <div className="PromotionContentItem-content-text" dangerouslySetInnerHTML={{__html: item.description}}></div>
                        </div>
                    </a>
                    {item.image && item.image.ImageUrl && (
                        <div className="PromotionContentItem-media">
                            <Image
                            className='PromotionContentItem-media-image'
                            src={`/images/${item.image.ImageUrl}`}
                            width={748}
                            height={0}
                            />
                        </div>
                    )}
                </header>
            ))}
        </div>
     );
}
 
export default PromotionContainerItem;