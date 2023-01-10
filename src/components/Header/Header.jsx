import style from "../Header/Header.module.css"
import { StyledLink } from './Header.styled';

const Header = () => {
  return (
    <nav className={style.header}>
      <StyledLink to="/" className={style.navigation}>
        Home
      </StyledLink>
      <StyledLink to="movies" className={style.navigation}>
        Movies
      </StyledLink>
    </nav>
  );
};

export default Header;