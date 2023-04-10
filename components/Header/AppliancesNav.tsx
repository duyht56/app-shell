import { useState } from 'react';
import styles from '../../styles/modules/Appliances.module.scss';
// import Image from 'next/image';

interface AppliancesNavItem {
  text: string;
  id: number;
  icon: string;
}

interface ItemMenu {
  text: string;
  id: number;
  hasChildren?: boolean;
}

interface IMenu {
  [index: string]: ItemMenu[];
}

const AppliancesNav = () => {
  const items: AppliancesNavItem[] = [
    {
      text: 'Cooking',
      icon: '#category-Cooking',
      id: 130954,
    },
    {
      text: 'Cooling',
      icon: '#category-Cooling',
      id: 131348,
    },
    {
      text: 'Dishwashing',
      icon: '#category-Dishwashing',
      id: 131575,
    },
    {
      text: 'Laundry',
      icon: '#category-Laundry',
      id: 131757,
    },
  ];

  const primaryMenu: IMenu = {
    '130954': [
      {
        text: 'Ovens',
        id: 131275,
        hasChildren: true,
      },
      {
        text: 'Hobs',
        id: 131173,
        hasChildren: true
      },
      {
        text: 'Microwaves',
        id: 0,
      },
      {
        text: 'Compact Integrated range',
        id: 131120,
        hasChildren: true
      },
      {
        text: 'Cooker hoods',
        id: 130955,
        hasChildren: true
      },
      {
        text: 'Warming Drawers',
        id: 0,
      },
    ],
    '131348': [
      {
        text: 'Refrigerators',
        id: 0,
      },
      {
        text: 'Freezers',
        id: 0,
      },
      {
        text: 'Fridge freezers',
        id: 0,
      },
    ],
    '131575': [
      {
        text: 'Dishwashers',
        id: 0,
      },
    ],
    '131757': [
      {
        text: 'Washing Machines',
        id: 0,
      },
      {
        text: 'Washer Dryers',
        id: 0,
      },
    ],
  };

  const secondMenu: IMenu = {
    '131275': [
      {
        text: 'See all ovens',
        id: 0,
      },
      {
        text: 'Compact oven',
        id: 0,
      },
      {
        text: 'Electric oven',
        id: 0,
      },
    ],
    '131173': [
      {
        text: 'See all hobs',
        id: 0
      },
      {
        text: 'Electric hobs',
        id: 0
      },
      {
        text: 'Gas hobs',
        id: 0
      },
      {
        text: 'Induction hobs',
        id: 0
      },
    ],
    '131120': [
      {
        text: 'See the entire compact Integrated range',
        id:0
      },
      {
        text: 'Compact oven',
        id:0
      },
      {
        text: 'Integrated Microwaves',
        id:0
      },
    ],
    '130955': [
      {
        text: 'See all cooker hoods',
        id:0
      },
      {
        text: 'Chimney hood',
        id:0
      },
      {
        text: 'Integrated hood',
        id:0
      },
      {
        text: 'Island hood',
        id:0
      },
    ]
  };

  const [mainItem, setMainItem] = useState<AppliancesNavItem | null>(null);
  const [primanyItem, setPrimaryItem] = useState<ItemMenu | null>(null);

  const clickMainMenu = (item: AppliancesNavItem) => {
    if (item.id === mainItem?.id) {
      setMainItem(null);
      return;
    }
    setMainItem(item);
    setPrimaryItem(null)
  };

  const clickPrimaryMenu = (item: ItemMenu) => {
    if (item.id === primanyItem?.id) {
      setPrimaryItem(null);
      return;
    }
    setPrimaryItem(item);
  };
  return (
    <>
      <svg style={{ display: 'none' }}>
        <symbol
          id="category-Laundry"
          viewBox="0 0 22 20"
          className="SvgIcon SvgIcon--category-laundry"
        >
          <path
            d="M16.616 17.97V5.914l2.847.186.37-3.247-4.497-.887c-.773 1.443-2.148 2.195-4.13 2.195-1.994 0-3.374-.747-4.143-2.197l-4.494.872.37 3.267 2.847-.176v12.053l10.83-.008zm1.7 1.7l-14.23.01V7.735l-2.654.164-.73-6.433L8.12.027l.246.686c.43 1.2 1.256 1.747 2.84 1.747 1.57 0 2.397-.554 2.83-1.75l.25-.685 7.413 1.463-.73 6.413-2.653-.174V19.67z"
            fillRule="nonzero"
          ></path>
        </symbol>
        <symbol
          id="category-Dishwashing"
          viewBox="0 0 14 21"
          className="SvgIcon SvgIcon--category-dishwashing"
        >
          <g fillRule="nonzero">
            <path d="M6.388 11.1h1.7v8.51h-1.7z"></path>
            <path d="M2.628 20.46v-1.7h9.23v1.7zM10.745 9.157a4.96 4.96 0 001.453-3.507V1.7h-9.91v3.95a4.96 4.96 0 004.951 4.96 4.96 4.96 0 003.506-1.453zM7.238 11.46l-.001.85A6.66 6.66 0 01.588 5.65V0h13.31v5.65a6.66 6.66 0 01-6.66 6.66v-.85z"></path>
          </g>
        </symbol>
        <symbol
          id="category-Cooling"
          viewBox="0 0 21 20"
          className="SvgIcon SvgIcon--category-cooling"
        >
          <g fillRule="nonzero">
            <path d="M6.873 4.702l1.475-.844 6.09 10.64-1.475.844z"></path>
            <path d="M6.88 2.985V.01h1.7v5.965L3.447 2.92l.87-1.462zM14.4 19.11h-1.7v-5.967l5.126 3.057-.87 1.46-2.555-1.523zM4.552 10.42l-.003-1.7 12.26-.02.003 1.7z"></path>
            <path d="M3.068 9.566L.48 8.088l.843-1.476 5.191 2.962-5.205 2.936-.835-1.48zM20.802 11.032l-.843 1.476-5.19-2.962 5.204-2.936.835 1.48-2.595 1.464zM8.347 15.254l-1.473-.848 6.11-10.62 1.473.848z"></path>
            <path d="M4.291 17.633l-.861-1.466 5.15-3.029-.04 5.978-1.7-.012.02-2.982zM16.981 1.486l.86 1.468-5.154 3.016.054-5.968 1.7.016-.027 2.972z"></path>
          </g>
        </symbol>
        <symbol
          id="category-Cooking"
          viewBox="0 0 20 21"
          className="SvgIcon SvgIcon--category-cooking"
        >
          <g fillRule="nonzero">
            <path d="M2.073 3.676a8.731 8.731 0 00.078 1.715c.14.919.446 1.655.929 2.164.31.328.645.523 1.01.613.561.139 1.206.03 1.86-.256L2.073 3.676zm5.073 5.543c-.096.052-.2.104-.309.157-1.03.492-2.102.702-3.154.443-.681-.169-1.303-.53-1.837-1.094C1.096 7.933.659 6.882.47 5.648.304 4.56.34 3.422.497 2.33c.05-.352.102-.618.138-.774l.367-1.57L18.7 19.327l-1.254 1.147-10.3-11.255z"></path>
            <path d="M16.326 2.157l1.254 1.146-15.75 17.23-1.254-1.146z"></path>
            <path d="M18.515 4.157l1.256 1.146-2.49 2.73-.1.093a3.85 3.85 0 01-5.608-5.133l.08-.105 2.48-2.73 1.26 1.144-2.433 2.677a2.15 2.15 0 003.115 2.853l2.44-2.675z"></path>
          </g>
        </symbol>
        <symbol
          id="chevron-right"
          viewBox="0 0 10 17"
          className="SvgIcon SvgIcon--chevron-right"
        >
          <path d="M9.23 8.03L2.242 0 .769 1.238 6.677 8.03.769 14.761 2.242 16z"></path>
        </symbol>
      </svg>
      <div
        className={styles['NavAppliances']}
        data-binding="NavL2"
        aria-expanded="true"
      >
        <div
          className={styles['NavAppliances__Container']}
          data-binding="NavL2Container"
        >
          <div className={styles['NavAppliances__Layout']}>
            <div
              className={`${styles['NavAppliances__Layout__ChildColumn']} ${styles['NavAppliances__Layout__Container']}`}
            >
              <div className="nav-item-container">
                {items.length > 0 &&
                  items.map(item => {
                    return (
                      <p
                        key={item.id}
                        data-id={item.id}
                        data-binding="NavComponentTrigger"
                        className={`${styles['NavItem__MainMenu']} ${
                          mainItem?.id == item.id &&
                          styles['NavItem__MainMenu__selected']
                        }`}
                        data-gtm-id="navigation_global-header_appliances_cottura"
                        onClick={() => clickMainMenu(item)}
                      >
                        <svg className="SvgIcon SvgIcon--category-Cooking">
                          <use href={item.icon}></use>
                        </svg>
                        {item.text}
                        <svg className="SvgIcon SvgIcon--chevron-right">
                          <use href="#chevron-right"></use>
                        </svg>
                      </p>
                    );
                  })}
              </div>
            </div>
            <div
              className={`${styles['NavAppliances__Layout__ChildColumn']} ${styles['NavAppliances__Layout__Panel']}`}
            ></div>
            {mainItem && (
              <>
                <div
                  id={`menu-item-130954${mainItem}`}
                  className={styles['nav-product__column-l2']}
                >
                  <div className={styles['nav-item-container-white']}>
                    <p
                      className={`${styles['NavItem__MainMenu']} ${styles['NavItem__MainMenu__primaryMenu']} ${styles['nav-product__item-main--disable-click']}`}
                    >
                      <svg className="SvgIcon SvgIcon--category-Cooking">
                        <use href={mainItem.icon}></use>
                      </svg>
                      {mainItem?.text}
                    </p>
                  </div>
                  {mainItem &&
                    primaryMenu[mainItem.id] &&
                    primaryMenu[mainItem.id]?.length !== 0 &&
                    primaryMenu[mainItem.id]?.map((item, index) => {
                      if (item.hasChildren) {
                        return (
                          <div
                            key={index}
                            data-id={item.id}
                            className={`${styles['nav-product__item-l3']} ${
                              styles['nav-product__item-l3__child']
                            } ${
                              primanyItem?.id == item.id &&
                              styles['nav-product__item-l3__selected']
                            }`}
                            onClick={() => clickPrimaryMenu(item)}
                          >
                            <div
                              className={
                                styles['nav-product__item-text-label-container']
                              }
                            >
                              <p className={styles['nav-product__item-text']}>
                                {item.text}
                              </p>
                            </div>
                            <svg className="SvgIcon SvgIcon--chevron-right">
                              <use href="#chevron-right"></use>
                            </svg>
                          </div>
                        );
                      }
                      return (
                        <a
                          data-id={item.id || 0}
                          key={index}
                          className={`${styles['nav-product__item-l3']} ${
                            primanyItem?.id == item.id &&
                            styles['nav-product__item-l3__selected']
                          }`}
                          target="_self"
                          onClick={() => setMainItem}
                        >
                          <div
                            className={
                              styles['nav-product__item-text-label-container']
                            }
                          >
                            <p className={styles['nav-product__item-text']}>
                              {item.text}
                            </p>
                          </div>
                        </a>
                      );
                    })}
                </div>
                {primanyItem && (
                  <div
                    id={`menu-item-${primanyItem?.id}`}
                    className={styles['nav-product__column-l3']}
                  >
                    <div className={styles['nav-item-container-white']}>
                      {secondMenu[primanyItem.id] &&
                        (secondMenu[primanyItem.id] as ItemMenu[])?.length >
                          0 &&
                        secondMenu[primanyItem.id]?.map((item, index) => {
                          return (
                            <a
                              key={index}
                              className={styles['nav-product__item-l3']}
                              target="_self"
                            >
                              <div
                                className={
                                  styles[
                                    'nav-product__item-text-label-container'
                                  ]
                                }
                              >
                                <p className={styles['nav-product__item-text']}>
                                  {item.text}
                                </p>
                              </div>
                            </a>
                          );
                        })}
                    </div>
                  </div>
                )}
                <div
                  className={styles['nav-content-module']}
                  id="nav-content-module-desktop-130954"
                  style={{ display: 'block', height: '174.89px' }}
                >
                  <a
                    href="/kitchen/cooking/ovens/"
                    data-gtm-id="navigation_global-header_appliances_cooking_promotion"
                    className="nav-content-module__image"
                  >
                    <img
                      alt="Kitchen"
                      className="lazyautosizes ls-is-cached lazyloaded"
                      src="https://www.electrolux.co.uk/siteassets/common-assets/12.-framework/menu/appliances-menu-images/cooking/cooking-category-electrolux-362x362.png?width=362&height=362&quality=70&mode=crop"
                      height={100}
                      width={362}
                    />
                  </a>
                  <div className={styles['nav-content-module__body-text']}>
                    Challenge conventions and take cuisine to the next level.{' '}
                  </div>
                  <a
                    className={styles['nav-content-module__read-more']}
                    // href="/kitchen/cooking/ovens/"
                    data-gtm-id="navigation_global-header_appliances_cooking_promotion"
                  >
                    Read more
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AppliancesNav;
