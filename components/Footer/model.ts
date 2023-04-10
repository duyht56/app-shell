export interface IFooter {
    footerLogo: FooterLogo,
    navigateToTop: string;
    termsAndConditionLinks: MenuItem[]
    footerColumns: FooterColumn[]
}


export interface FooterColumn {
    Heading?: string
    HeadingLink: string
    FooterLinks: MenuItem[]
}

export interface FooterLogo {
    AltText: string
    ImageUrl: string;
    Description: string;
}


export interface MenuItem {
    Href: string
    Title: string
    Description: string
    Image: string;
    Text: string
    Target: string
    Icon: string
}