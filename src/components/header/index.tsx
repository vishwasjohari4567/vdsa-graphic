import { HeaderWrapper, Logo, Nav, NavLinks, NavLink, LogoImage } from './styles';
import logoImg from '../../assets/logo/vdsa-logo.png';

type HeaderProps = {
  onNavigate: (section: string) => void;
};

export default function Header({ onNavigate }: HeaderProps) {
  return (
    <HeaderWrapper>
      <Nav>
        <Logo onClick={() => onNavigate('home')}>
            <LogoImage src={logoImg} alt="VDSA Logo" />
        </Logo>
        <NavLinks>
          <NavLink onClick={() => onNavigate('illustrations')}>Illustrations</NavLink>
          <NavLink onClick={() => onNavigate('motion-poster')}>Motion Poster</NavLink>
          <NavLink onClick={() => onNavigate('logo-design')}>Logo Design</NavLink>
          <NavLink onClick={() => onNavigate('photo-editing')}>Photo Editing</NavLink>
          <NavLink onClick={() => onNavigate('visiting-cards')}>Visiting Cards</NavLink>
          <NavLink onClick={() => onNavigate('contact')}>Contact</NavLink>

        </NavLinks>
      </Nav>
    </HeaderWrapper>
  );
}