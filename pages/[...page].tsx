import { Suspense } from 'react';
import styles from '/styles/Home.module.css';
import {
  getPageData,
  getUrlSlug,
  getComponentsAndComponentsData,
  IPageData,
} from '../services/SharedComponent';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async context => {
  const { urlSlug, preview } = getUrlSlug(context.resolvedUrl);
  context.res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );
  try {
    const pageData = await getPageData('sv-se', urlSlug, preview);
    // if (pageData && pageData.urlSlug !== urlSlug) {
    //   return {
    //     redirect: {
    //       permanent: false,
    //       destination: "/",
    //     },
    //   };
    // }
    return {
      props: { pageData },
    };
  } catch (e) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    };
  }
};

const Page = ({ pageData }: { pageData: IPageData }) => {
  const { components, componentsData } =
  getComponentsAndComponentsData(pageData);
  return (
    <div className={styles.container}>
      {components &&
        components.map((Component, index) => (
          <Suspense key={index} fallback={`...loading`}>
            <Component {...componentsData[index]} />
          </Suspense>
        ))}
    </div>
  );
};

export default Page;
