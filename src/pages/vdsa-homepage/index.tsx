import { useState } from 'react';
import Header from '../../components/header';
import { Description, Main, SectionHeader, Title } from './styles';
import Portfolio from '../../components/portfolio';
import Contact from '../../components/contact';
import Hero from './hero';
import Illustation from './illustrations';

export default function VDSAHomepage() {

    const [currentSection, setCurrentSection] = useState('home');


    const handleNavigation = (section: string) => {
    setCurrentSection(section);
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
            <Illustation id={"illustrations"}/>
        </Main>
        <Contact />
    </>
  );
}