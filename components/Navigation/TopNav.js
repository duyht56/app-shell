import styles from "../../styles/module-styles/TopNav.module.scss";
import $ from "jquery";
import { useEffect } from "react";
const TopNav = ({ Login, ReasonsToBuy, StoreLocator }) => {
  useEffect(() => {
    $("ul.NavList-list--mobile li").each(function () {
      $(this).css("display", "none");
    });
    const childElement = $("ul.NavList-list--mobile li");
    const activeElment = $("ul.NavList-list--mobile li:first-child");
    let index = activeElment.toggle().index();
    const totalchild = childElement.length - 1;
    setInterval(function () {
      if (index === totalchild) {
        childElement.eq(index).addClass("reason-leave-active reason-leave-to");
        childElement.eq(0).addClass("reason-enter-active reason-enter");
        index = 0;
      } else {
        const nextElement = childElement
          .eq(index)
          .addClass("reason-leave-active reason-leave-to")
          .toggle()
          .next()
          .addClass("reason-enter-active reason-enter");
        index = nextElement.index();
      }
      setTimeout(function () {
        $("ul.NavList-list--mobile .reason-enter-active.reason-enter")
          .removeClass("reason-enter-active reason-enter")
          .toggle();
        $("ul.NavList-list--mobile .reason-leave-active.reason-leave-to")
          .removeClass("reason-leave-active reason-leave-to")
          .css("display", "none");
      }, 300);
    }, 3000);
  });
  return (
    <nav className={styles.NavBar}>
      <div className={styles.TopNav}>
        <div className={styles.NavList}>
          {ReasonsToBuy && (
            <ul
              className={
                styles["TopNav-list"] +
                " " +
                styles["TopNav-List-left"] +
                " " +
                styles["NavList-list"]
              }
            >
              {ReasonsToBuy.map((nav, index) => (
                <li className={styles["NavList-item"]} key={index}>
                  {nav && (
                    <a className={styles["TopNav-list-item-link"]}>
                      <span className={styles["NavList-text"]}>{nav.Text}</span>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div
          className={styles["TopNav-list"] + " " + styles["TopNav-list--right"]}
        >
          {StoreLocator && (
            <span
              className={
                styles["TopNav-list-item"] +
                " " +
                styles["TopNav-list-item--icon"]
              }
            >
              <a className={styles["TopNav-list-item-link"]}>
                <span className={styles["NavList-text"]}>
                  {StoreLocator.Text}
                </span>
              </a>
            </span>
          )}
          {Login && (
            <span
              className={
                styles["TopNav-list-item"] +
                " " +
                styles["TopNav-list-item--icon"]
              }
            >
              <a className={styles["TopNav-list-item-link"]}>
                <span className={styles["NavList-text"]}>{Login.Text}</span>
              </a>
            </span>
          )}
        </div>
      </div>
      <div className={styles["NavList--mobile"]}>
        <div className={styles.NavList}>
          {ReasonsToBuy && (
            <ul
              className={
                styles["TopNav-list"] +
                " " +
                styles["TopNav-List-left"] +
                " " +
                styles["NavList-list"] +
                " " +
                styles["NavList-list--mobile"]
              }
            >
              {ReasonsToBuy.map((nav, index) => (
                <li className={styles["NavList-item"]} key={index}>
                  <a className={styles["TopNav-list-item-link"]}>
                    <span className={styles["NavList-text"]}>{nav.Text}</span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
