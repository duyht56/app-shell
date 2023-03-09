import Image from "next/image";
import styles from '../../styles/module-styles/CategoryCarousel.module.scss'
//import Swiper from "swiper";
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/swiper-bundle.min.css'
const CategoryCarousel = ({data}) => {
    return (
        <> 
        <div className={styles.CategoryCarousel+' '+styles['elx-animate']}>
            <div className={styles.CategoryCarousel}>
                <div className={styles['CategoryCarousel-title']}>{data.carouselTitle}</div>
                <div className={styles['CategoryCarousel-inner']}>
                    <div className={styles['swiper-category-carousel']+' '+styles['swiper-container-initialized']+' '+styles['swiper-container-horizontal']+' '+styles['swiper-container-pointer-events']}>
                        <div className={styles['swiper-wrapper']}>
                            <Swiper
                            slidesPerView={5}
                            >
                                {data.listCategoryCarouselProps && (
                                    data.listCategoryCarouselProps.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <div className={styles['swiper-slide']+' '+styles['CategoryCarousel-item']}>
                                                <a className={styles.CategoryCard}>
                                                    <div className={styles['CategoryCard-heading']}>
                                                        <figure className={styles['CategoryCard-figure']}>
                                                            {item.Image && (
                                                                <Image
                                                                    className={styles['CategoryCard-img']}
                                                                    src={`/images/${item.Image}`}
                                                                    alt="img"
                                                                    width={500}
                                                                    height={500}
                                                                />
                                                            )}
                                                        </figure>
                                                    </div>
                                                    <div className={styles['CategoryCard-title']}>
                                                        <span className={styles['CategoryCard-title-text']}>{item.Title}</span>
                                                    </div>
                                                </a>
                                            </div>
                                        </SwiperSlide>
                                    ))
                                )}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <style jsx>{`
            figure {
                margin: 0;
                padding: 0;
            }
            :after,
              :before {
                box-sizing: border-box;
              }
        `}</style>
        </>
     );
}
 
export default CategoryCarousel;