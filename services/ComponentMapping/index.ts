import dynamic from 'next/dynamic';
import { ComponentType } from 'react';

// APP SHELL COMPONENT
const Header = dynamic(() => import(`@/components/Header`), {
  ssr: true,
}) as ComponentType<object>;
const Footer = dynamic(() => import(`@/components/Footer`), {
  ssr: true,
}) as ComponentType<object>;

// PDP components
const VideoGallery = dynamic(() => import('PDP/VideoGallery'), { ssr: true });
const BenefitsProps = dynamic(() => import('PDP/BenefitsProps'), { ssr: true });
const DetailProps = dynamic(() => import('PDP/DetailProps'), { ssr: true });
const ProductInformation = dynamic(() => import('PDP/ProductInformation'), {
  ssr: false,
});
const LandingProps = dynamic(() => import('PDP/LandingProps'), { ssr: true });
const PLP = dynamic(() => import('PDP/ProductListing'), { ssr:false} )

// BASKET components
const Basket = dynamic(() => import('BASKET/Basket'), { ssr: true });

export const Components: { [key: string]: ComponentType<object> } = {
  Header,
  Footer,
  VideoGallery,
  BenefitsProps,
  DetailProps,
  ProductInformation,
  LandingProps,
  Basket,
  PLP
};
