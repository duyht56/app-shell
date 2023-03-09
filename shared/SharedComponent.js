import dynamic from "next/dynamic";
// const getDynamicComponent = (c) => {
//     return dynamic(() => import(`../components/${c}/${c}`), {
//         suspense: true,
//     });
// }
//export default getDynamicComponent;
export default function getDynamicComponent(c) {
  return dynamic(() => import(`../components/${c}/${c}`), {
    suspense: true,
  });
}

const VideoGallery = dynamic(() => import("PDP/VideoGallery"), { ssr: false });
const BenefitsProps = dynamic(() => import("PDP/BenefitsProps"), {
  ssr: false,
});
const DetailProps = dynamic(() => import("PDP/DetailProps"), { ssr: false });
const ProductInformation = dynamic(() => import("PDP/ProductInformation"), {
  ssr: false,
});
const LandingProps = dynamic(() => import("PDP/LandingProps"), { ssr: false });

export const getRemoteComponent = (name) => {
  switch (name) {
    case "VideoGallery":
      return VideoGallery;
      break;
    case "BenefitsProps":
      return BenefitsProps;
      break;
    case "DetailProps":
      return DetailProps;
      break;
    case "ProductInformation":
      return ProductInformation;
      break;
    case "LandingProps":
      return LandingProps;
      break;
    // case "Hero":
    //   return dynamic(() => import("Support/Hero"), { ssr: false });
    //   break;
    // case "LargeContentArea":
    //   return dynamic(() => import("Support/LargeContentArea"), { ssr: false });
    //   break;
    // case "SupportBlockArea":
    //   return dynamic(() => import("Support/SupportBlockArea"), { ssr: false });
    //   break;
  }
};

export const getPageData = async (lang, urlSlug, preview) => {
  const code = "dPMklq1sLlX8m3TFDwCr8oJ_8S4xtPlWhazobCTppsgcAzFuRZ6Lww==";
  const headers = {
    hostName: "elxa2qaazf01.azurewebsites.net",
    language: lang,
    brand: "Electrolux",
    "Access-Control-Max-Age": "600",
  };
  if (preview) {
    headers.preview = true;
  }

  const response = await fetch(
    `https://elxa2qaazf01.azurewebsites.net/api/GetPage?code=${code}&urlSlug=${urlSlug}/`,
    { headers }
  );
  const data = response.json();
  console.log("urlSlug", urlSlug, data);
  return data;
};

export const getUrlSlug = (slug) => {
  slug = slug.split("?");
  return {
    urlSlug: slug[0],
    preview: slug[1] === "preview=" ? true : false,
  };
};

export const getComponentsAndComponentsData = (
  pageData,
  incomingComps = []
) => {
  const components = [];
  const componentsData = [];
  pageData.components.forEach((component, index) => {
    if (component.name === "Footer" || component.name === "Header") {
      components.push(getDynamicComponent(component.name));
      componentsData.push(component.props);
    } else {
      components.push(getRemoteComponent(component.name));
      componentsData.push({
        ...component.props,
        language: pageData.language,
        brand: pageData.brand,
      });
    }
  });
  return {
    components,
    componentsData,
  };
};
