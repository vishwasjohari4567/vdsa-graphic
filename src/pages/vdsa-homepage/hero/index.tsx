import { CTAButton, HeroContentWrapper, Section, LeftContent, RightImage, StyledImage, Subtitle, Title } from './styles';

import heroImg from '../../../assets/images/hero.png';

type HeaderProps = {
  onNavigate: (section: string) => void;
};


export default function Hero({ onNavigate }: HeaderProps) {

  return (
    <>
      <Section id={"home"}>
        <HeroContentWrapper>
          <LeftContent>
            <Title>
              Welcome to <span>VDSA</span>
            </Title>
            <Subtitle>
              Illustration • Logo Design • Photo Editing • Creative Solutions
            </Subtitle>
            <p>
              At VDSA, we specialize in turning imagination into reality.
              Whether it’s eye-catching logos, polished photo edits, or
              captivating illustrations, our creative services are tailored
              to bring your brand to life.
            </p>
            <CTAButton onClick={() => onNavigate('projects')}>
              View My Work
            </CTAButton>
          </LeftContent>

          <RightImage>
            <StyledImage src={heroImg} alt="VDSA Hero Illustration" />
          </RightImage>
        </HeroContentWrapper>
      </Section>
    </>
  );
}