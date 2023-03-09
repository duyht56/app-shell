import { useCallback, useContext, useEffect, useLayoutEffect, useMemo, useRef, useTransition } from 'react';
import {Swiper, SwiperSlide} from 'swiper'
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from 'next/future/image';
//import '../../styles/module-styles/HeroContentArea.module.scss'
import $ from 'jquery'

const HeroContentArea = ({data}) => {
    const initProgressBar = () => {
        $(
            '.swiper__bullet--active .HomepageCarousel-tab-progressValue'
          ).animate(
            {
              width: '100%',
            },
            5000,
            'linear'
          )
    }
    useEffect(()=> {
        window.lazySizesConfig = window.lazySizesConfig || {}
        window.lazySizesConfig.customMedia = {
          '--small': '(max-width: 480px)',
          '--medium': '(max-width: 700px)',
          '--large': '(max-width: 1400px)',
        }
        Swiper.use([Navigation, Pagination, Autoplay])
        const swiper = new Swiper('.swiper-container', {
            autoplay: {
                delay: 5000
            },
            init: true,
            direction: 'horizontal',
            loop: true,
            slidesPerView: 1,
            autoHeight: true,
            effect: 'fade',
            fadeEffect: {
                crossFade: true,
            },
            modules: [Navigation, Pagination, Autoplay],
            pagination: {
                el: '.swiper__bullets',
                type: 'custom',
                clickable: true,
                renderCustom: (swiper, current, total) => {
                  // custom pagination
                  let text = ''
                  for (let i = 1; i <= data.carousalItems?.length; i++) {
                    if (current === i) {
                      text += `<button type="button" class="swiper__bullet swiper-pagination-bullet swiper__bullet--active" aria-label="swipper-bullet"><span class="HomepageCarousel-tab-carouselTitle">${
                        data.carousalItems[i - 1]?.carouselTitle
                      }</span><div class="HomepageCarousel-tab-progress"><div class="HomepageCarousel-tab-progressValue"></div></div></button>`
                    } else {
                      text += `<button type="button" class="swiper__bullet swiper-pagination-bullet" aria-label="swipper-bullet"><span class="HomepageCarousel-tab-carouselTitle">${
                        data.carousalItems[i - 1]?.carouselTitle
                      }</span><div class="HomepageCarousel-tab-progress"><div class="HomepageCarousel-tab-progressValue"></div></div></button>`
                    }
                  }
                  return text
                },
              },
            on: {
                init: () => {
                    initProgressBar()
                },
                slideChange: () => {
                  $(
                    '.swiper__bullet--active .HomepageCarousel-tab-progressValue'
                  ).css('width', '0%')
                    initProgressBar()
                },
            },
        })
    })
    return ( 
        <div className="HeroContentArea">
            <div className="HomePageCarousel HomePageCarousel-container">
                <div className="HomepageCarousel">
                    <div className="swiper">
                        <div className="swiper-container">
                            {data.carousalItems && (
                                <div className="swiper-wrapper">
                                    {/* <Swiper slidesPerView={1} loop={true} 
                                        Autoplay={{
                                            delay: 2500,
                                            disableOnInteraction: false,
                                        }}
                                        navigation
                                        pagination={{ clickable: true }}
                                        >
                                        {data.carousalItems.map((item, index) => (
                                            // <SwiperSlide key={index}>
                                                <h1 key={index}>Swiper{index}</h1>
                                            // </SwiperSlide>
                                        ))}
                                    </Swiper> */}
                                    {data.carousalItems.map((item, index)=> (
                                        <div className='swiper-slide' key={index} style={{width: '1349px'}}>
                                            <header className="HomePageCarousel">
                                                <a className="HomePageCarousel-media HomePageCarousel-media-image--mobile">
                                                    {item.image.ImageUrl && (
                                                        <Image
                                                            src={`/images/${item.image.ImageUrl}`}
                                                            className="HomePageCarousel-media-nuxt-image"
                                                            width={764}
                                                            height={0}
                                                        />
                                                    )}
                                                    {item.videoSrc && (
                                                        <div className="HomePageCarousel-media-video-box">
                                                            <div className="HomePageCarousel-media-video-overlay"></div>
                                                            <video className="HomePageCarousel-media-video"
                                                            autoplay="autoplay"
                                                            muted="muted"
                                                            loop="loop"
                                                            >
                                                                <source type='video/mp4' src={item.videoSrc}></source>
                                                            </video>
                                                        </div>
                                                    )}
                                                </a>
                                                <a className="HomePageCarousel-content">
                                                    <h1 className="HomePageCarousel-content-carouselTitle">
                                                        <span dangerouslySetInnerHTML={{__html: item.heading}}></span>
                                                    </h1>
                                                    <div className="HomePageCarousel-content-text">
                                                        <div className="HomePageCarousel-content-body HomePageCarousel-content-body--desktop" dangerouslySetInnerHTML={{__html: item.description}}></div>
                                                        <div className="HomePageCarousel-content-body HomePageCarousel-content-body--mobile">
                                                            <p>{item.mobile_description}</p>
                                                        </div>
                                                        <div className="btn btn-primary">
                                                            {item.link.Text }
                                                        </div>
                                                    </div>
                                                </a>
                                            </header>
                                        </div>
                                    ))}
                                    
                                </div>
                            )}
                        </div>
                        <div className='swiper__bullets'></div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                
            `}</style>
        </div>
     );
}
 
export default HeroContentArea;