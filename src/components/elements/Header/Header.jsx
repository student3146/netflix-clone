import Search from "../../UI/Search/Search";
import Profile from "./Profile";
import styles from "./Header.module.scss"

const Header = () => {
    return (
        <div className={styles.header}>
        <div>
        <a href='/'>
            <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
                 alt="Netflix"
                 height='35'
                 width='112'
                />
        </a>
        <Search />
        </div>
        <Profile />
        </div>
    );
};

export default Header;