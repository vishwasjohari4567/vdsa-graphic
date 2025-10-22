import { ImageBox, ImagesWrapper, Section, Title } from './styles';

import visitingCardImage from '../../../assets/images/visiting-cards/card-1.png';
import card  from '../../../assets/images/visiting-cards/card-2.png';

export default function VisitingCard() {

  return (
      <Section id={"visiting-cards"}>
         <Title>Visiting Cards</Title>
        <ImagesWrapper>
            <ImageBox>
            <img src={visitingCardImage} alt="Visiting Card" />
            </ImageBox>
            <ImageBox>
            <img src={card} alt="Card" />
            </ImageBox>
        </ImagesWrapper>
      </Section>
  );
}