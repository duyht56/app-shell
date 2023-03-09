import styles from "../styles/Home.module.css";
import { Suspense } from "react";
import getDynamicComponent from "../shared/SharedComponent";

// const RemoteHeader = dynamic(() => import('mf1/header'), {
//   ssr: false,
// });

export const getServerSideProps = async () => {
  const code = "dPMklq1sLlX8m3TFDwCr8oJ_8S4xtPlWhazobCTppsgcAzFuRZ6Lww==";
  const url = `https://elxa2qaazf01.azurewebsites.net/api/GetPage?code=${code}`;
  const headers = {
    hostName: "elxa2qaazf01.azurewebsites.net",
    language: "sv-se",
    brand: "Electrolux",
    "Access-Control-Max-Age": "600",
  };
  const res = await fetch(url, { headers });
  const data = await res.json();

  return {
    props: {
      pageData: data,
    },
  };
};

export default function Home({ pageData }) {
  console.log("pageData==>", pageData);
  let components = [];
  let componentsData = [];

  pageData.components.forEach((component, i) => {
    if (
      component.name === "Footer" ||
      component.name === "Header" ||
      component.name === "CategoryCarousel" ||
      component.name === "HeroContentRowArea" ||
      component.name === "HeroContentArea"
    ) {
      components.push(getDynamicComponent(component.name));
      componentsData.push(component.props);
    }
  });

  return (
    <div className={styles.container}>
      {components.map((Component, k) => (
        <Suspense key={k} fallback={`...loading`}>
          <Component data={componentsData[k]} />
        </Suspense>
      ))}
    </div>
  );
}

// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <h1>This is Landing page project</h1>
//     </div>
//   )
// }
