export interface IHeader {
  topNavigation: TopNavigation;
  headerLogo: MenuItem;
  mainMenuNavigation: MainMenuNavigation;
  otherNavigation: OtherNavigation;
  promotionalNavigation: PromotionalNavigation;
  eventNavigation: EventNavigation;
  exploreNavigation: ExploreNavigation;
  supportNavigation: MenuItem;
  searchNavigation: MenuItem;
  productName: string;
}

export interface TopNavigation {
  ReasonsToBuy: MenuItem[];
  StoreLocator: MenuItem;
  Login: MenuItem;
}

export interface ExploreNavigation {
  MenuText: string;
  MenuItems: MenuItem[];
  OtherTitle: string;
  OtherLinks: MenuItem[];
}

export interface MenuItem {
  Href: string;
  Title: string;
  Description: string;
  Image: string;
  Text: string;
  Target: string;
  Icon: string;
}

export interface PromotionalNavigation {
  MenuText: string;
  MenuItems: MenuItem[];
  OtherTitle: string;
  OtherLinks: MenuItem[];
}

export interface EventNavigation {
  MenuText: string;
  MenuItems: string;
  OtherTitle: string;
  OtherLinks: string;
}

export interface MainMenuNavigation {
  MenuTitle: string;
  MainNavigations: MainNavigation[];
  Href: string;
  Icon: string;
}

export interface MainNavigation {
  MenuTitle: string;
  MainNavigations: MainNavigation2[];
  Href: string;
  Icon: string;
}

export interface MainNavigation2 {
  MenuTitle: string;
  MainNavigations: MainNavigation3[];
  Href: string;
  Icon: string;
}

export interface MainNavigation3 {
  MenuTitle: string;
  MainNavigations: string;
  Href: string;
  Icon: string;
}

export interface OtherNavigation {
  MenuTitle: string;
  MainNavigations: MainNavigation4[];
  Href: string;
  Icon: string;
}

export interface MainNavigation4 {
  MenuTitle: string;
  MainNavigations: string[];
  Href: string;
  Icon: string;
}
