import { ImageBox, ImagesWrapper, Section, Title } from './styles';

import smokyGearImage from '../../../assets/images/logo-design/smoky-gear.jpg';
import sericImages from '../../../assets/images/logo-design/seric.jpg';

export default function LogoDesign() {
  return (
    <Section id="illustrations">
      <Title>Illustration</Title>
      <ImagesWrapper>
        <ImageBox>
          <img src={smokyGearImage} alt="Smoky Gear Logo Design" />
        </ImageBox>
        <ImageBox $landscape>
          <img src={sericImages} alt="Seric Logo Design" />
        </ImageBox>
      </ImagesWrapper>
    </Section>
  );
}
