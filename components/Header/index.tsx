import MainNav from './MainNav';
import TopNav from './TopNav';
import { IHeader } from './model';

const Header = ({ topNavigation }: IHeader) => {
  return (
    <>
      <div className="Header">
        <TopNav {...topNavigation} />
        <MainNav />
      </div>
    </>
  );
};

export default Header;
