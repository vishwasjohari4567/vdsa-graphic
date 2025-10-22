import { ImageBox, ImagesWrapper, Section, Title } from './styles';

import diwaliImage from '../../../assets/images/photo-editing/diwali.png';

export default function PhotoEditing() {
  return (
    <Section id="photo-editing">
      <Title>Photo Editing</Title>
      <ImagesWrapper>
        <ImageBox>
          <img src={diwaliImage} alt="Diwali Image" />
        </ImageBox>
      </ImagesWrapper>
    </Section>
  );
}
