import { ComponentType } from 'react';
import { Components } from '../ComponentMapping';
import httpClient from '../HttpClient';

export interface IPageData {
  id: number;
  urlSlug: string;
  pageName: string;
  pageTypeName: string;
  components: Component[];
  language: string;
  brand: string;
  createdDate: string;
  publishedDate: string;
  metaPageProps: MetaPageProps;
}

export interface MetaPageProps {
  title: string;
  description: string;
  robots: string;
}

export interface Component {
  name: string;
  id: number;
  props: { [key: string]: unknown };
}

interface IBFF {
  friendlyUrlBff: {
    url: string;
    bff: string
  }[]
}

export const getPageData = async (
  lang: string,
  urlSlug: string,
  preview = false
) => {
  const headers: HeadersInit = {
    hostName: 'elxa2qaazf01.azurewebsites.net',
    language: lang,
    brand: 'Electrolux',
    'Access-Control-Max-Age': '600',
  };
  if (preview) {
    headers['preview'] = 'true';
  }
  // const bffs = await httpClient.get<IBFF>({ url: process.env.NEXT_PUBLIC_APP_SHELL_URL + '/mock/bff.json' });
  // const bff = bffs.friendlyUrlBff.find(b => b.url === urlSlug);
  const pageData = await httpClient.get({
    url: `https://app-shell-six.vercel.app/api/GetPage?code=dPMklq1sLlX8m3TFDwCr8oJ_8S4xtPlWhazobCTppsgcAzFuRZ6Lww==&urlSlug=${urlSlug}`,
    config: { headers },
  });

  console.log('pageData', pageData);
  return pageData;
};

export const getUrlSlug = (urlSlug: string) => {
  const [slug = '', preview] = urlSlug.split('?');
  return {
    urlSlug: slug,
    preview: preview === 'preview=' ? true : false,
  };
};

export const getComponentsAndComponentsData = (pageData: IPageData) => {
  const components: ComponentType<object>[] = [];
  const componentsData: React.HTMLAttributes<object>[] = [];
  pageData?.components.forEach(component => {
    components.push(Components[component.name] as ComponentType<object>);
    componentsData.push(component.props);
  });
  // components.unshift(Components.Basket as ComponentType<object>)
  return {
    components,
    componentsData,
  };
};
