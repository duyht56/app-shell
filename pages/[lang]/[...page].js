import { Suspense } from "react";
import styles from "/styles/Home.module.css";
import {
  getPageData,
  getUrlSlug,
  getComponentsAndComponentsData,
} from "/shared/SharedComponent";
import dynamic from "next/dynamic";

export const getServerSideProps = async (context) => {
  const { urlSlug, preview } = getUrlSlug(context.resolvedUrl);
  const lang = context.params.lang;
  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  try {
    const pageData = await getPageData(lang, urlSlug, preview);
    // if (pageData && pageData.urlSlug !== urlSlug) {
    //   return {
    //     redirect: {
    //       permanent: false,
    //       destination: "/",
    //     },
    //   };
    // }
    console.log("page", JSON.stringify(pageData));

    return {
      props: { pageData, domain: context.req.headers.host },
    };
  } catch (e) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }
};

const Page = ({ pageData, domain }) => {
  const { components, componentsData } =
    getComponentsAndComponentsData(pageData);
  return (
    <div className={styles.container}>
      {components &&
        components.map((Component, index) => (
          <Suspense key={index} fallback={`...loading`}>
            <Component data={componentsData[index]} />
          </Suspense>
        ))}
    </div>
  );
};

export default Page;
