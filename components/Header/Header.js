import TopNav from "../Navigation/TopNav";
import MainNav from "../Navigation/MainNav";
const Header = ({data}) => {
    return ( 
        <div className="Header">
            <TopNav {...data.topNavigation} />
            <MainNav {...data}/>
        </div>
     );
}
 
export default Header;