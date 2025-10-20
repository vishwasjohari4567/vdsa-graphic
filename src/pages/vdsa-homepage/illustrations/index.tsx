import { ImageBox, ImagesWrapper, Section, Title } from './styles';

import pharmaceuticalImage from '../../../assets/images/illustrations/pharmaceuticals.png';
import janmashtamiImage from '../../../assets/images/illustrations/janmashtami.jpg';
import independenceImage from '../../../assets/images/illustrations/independence.png';

export default function Illustation() {

  return (
      <Section id={"illustrations"}>
         <Title>Illustration</Title>
        <ImagesWrapper>
            <ImageBox>
            <img src={pharmaceuticalImage} alt="Left Illustration" />
            </ImageBox>
            <ImageBox $landscape>
            <img src={janmashtamiImage} alt="Center Illustration" />
            </ImageBox>
            <ImageBox>
            <img src={independenceImage} alt="Right Illustration" />
            </ImageBox>
        </ImagesWrapper>
      </Section>
  );
}