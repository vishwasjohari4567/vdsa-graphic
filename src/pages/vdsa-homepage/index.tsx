import Header from '../../components/header';
import { Main } from './styles';
import Contact from '../../components/contact';
import Hero from './hero';
import Illustation from './illustrations';
import MotionPoster from './motion-poster';
import LogoDesign from './logo-design';

export default function VDSAHomepage() {
    const handleNavigation = (section: string) => {
    const targetSection = document.getElementById(section);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
        <Header onNavigate={handleNavigation} />
        <Main id="projects">
            <Hero onNavigate={handleNavigation} />
            <Illustation />
            <MotionPoster />
            <LogoDesign />
        </Main>
        <Contact />
    </>
  );
}