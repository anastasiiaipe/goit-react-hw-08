import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const activeLink = ({ isActive }) =>
    clsx(styles.link, isActive && styles.isActive);
  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <NavLink to="/" className={activeLink}>
              Home
            </NavLink>
          </li>
          {isLoggedIn && (
            <li>
              <NavLink to="/contacts" className={activeLink}>
                Contacts
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
