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
const BenefitsProps0 = dynamic(() => import('PDP/BenefitsProps0'), { ssr: true });
const BenefitsProps1 = dynamic(() => import('PDP/BenefitsProps1'), { ssr: true });
const BenefitsProps2 = dynamic(() => import('PDP/BenefitsProps2'), { ssr: true });
const BenefitsProps3 = dynamic(() => import('PDP/BenefitsProps3'), { ssr: true });
const BenefitsProps4 = dynamic(() => import('PDP/BenefitsProps4'), { ssr: true });
const BenefitsProps5 = dynamic(() => import('PDP/BenefitsProps5'), { ssr: true });
const BenefitsProps6 = dynamic(() => import('PDP/BenefitsProps6'), { ssr: true });
const BenefitsProps7 = dynamic(() => import('PDP/BenefitsProps7'), { ssr: true });
const BenefitsProps8 = dynamic(() => import('PDP/BenefitsProps8'), { ssr: true });
const BenefitsProps9 = dynamic(() => import('PDP/BenefitsProps9'), { ssr: true });
const BenefitsProps10 = dynamic(() => import('PDP/BenefitsProps10'), { ssr: true });
const BenefitsProps11 = dynamic(() => import('PDP/BenefitsProps11'), { ssr: true });
const BenefitsProps12 = dynamic(() => import('PDP/BenefitsProps12'), { ssr: true });
const BenefitsProps13 = dynamic(() => import('PDP/BenefitsProps13'), { ssr: true });
const BenefitsProps14 = dynamic(() => import('PDP/BenefitsProps14'), { ssr: true });
const BenefitsProps15 = dynamic(() => import('PDP/BenefitsProps15'), { ssr: true });
const BenefitsProps16 = dynamic(() => import('PDP/BenefitsProps16'), { ssr: true });
const BenefitsProps17 = dynamic(() => import('PDP/BenefitsProps17'), { ssr: true });
const BenefitsProps18 = dynamic(() => import('PDP/BenefitsProps18'), { ssr: true });
const BenefitsProps19 = dynamic(() => import('PDP/BenefitsProps19'), { ssr: true });
const BenefitsProps20 = dynamic(() => import('PDP/BenefitsProps20'), { ssr: true });
const BenefitsProps21 = dynamic(() => import('PDP/BenefitsProps21'), { ssr: true });
const BenefitsProps22 = dynamic(() => import('PDP/BenefitsProps22'), { ssr: true });
const BenefitsProps23 = dynamic(() => import('PDP/BenefitsProps23'), { ssr: true });
const BenefitsProps24 = dynamic(() => import('PDP/BenefitsProps24'), { ssr: true });
const BenefitsProps25 = dynamic(() => import('PDP/BenefitsProps25'), { ssr: true });
const BenefitsProps26 = dynamic(() => import('PDP/BenefitsProps26'), { ssr: true });
const BenefitsProps27 = dynamic(() => import('PDP/BenefitsProps27'), { ssr: true });
const BenefitsProps28 = dynamic(() => import('PDP/BenefitsProps28'), { ssr: true });
const BenefitsProps29 = dynamic(() => import('PDP/BenefitsProps29'), { ssr: true });
const BenefitsProps30 = dynamic(() => import('PDP/BenefitsProps30'), { ssr: true });
const DetailProps = dynamic(() => import('PDP/DetailProps'), { ssr: true });
const ProductInformation = dynamic(() => import('PDP/ProductInformation'), {
  ssr: false,
});
const LandingProps = dynamic(() => import('PDP/LandingProps'), { ssr: true });
const PLP = dynamic(() => import('PDP/ProductListing'), { ssr: false })

// BASKET components
const Basket = dynamic(() => import('BASKET/Basket'), { ssr: true });

export const Components: { [key: string]: ComponentType<object> } = {
  Header,
  Footer,
  VideoGallery,
  BenefitsProps,
  DetailProps,
  BenefitsProps0,
  BenefitsProps1,
  BenefitsProps2,
  BenefitsProps3,
  BenefitsProps4,
  BenefitsProps5,
  BenefitsProps6,
  BenefitsProps7,
  BenefitsProps8,
  BenefitsProps9,
  BenefitsProps10,
  BenefitsProps11,
  BenefitsProps12,
  BenefitsProps13,
  BenefitsProps14,
  BenefitsProps15,
  BenefitsProps16,
  BenefitsProps17,
  BenefitsProps18,
  BenefitsProps19,
  BenefitsProps20,
  BenefitsProps21,
  BenefitsProps22,
  BenefitsProps23,
  BenefitsProps24,
  BenefitsProps25,
  BenefitsProps26,
  BenefitsProps27,
  BenefitsProps28,
  BenefitsProps29,
  BenefitsProps30,
  ProductInformation,
  LandingProps,
  Basket,
  PLP
};
