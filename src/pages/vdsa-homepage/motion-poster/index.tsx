import { Section, Title, VideoWrapper, Video } from './styles';
import motionVideo from '../../../assets/videos/gandhi-jayanti.mp4';

export default function MotionPoster() {
  return (
    <Section id="motion-poster">
      <Title>Motion Poster</Title>
      <VideoWrapper>
        <Video autoPlay loop muted>
          <source src={motionVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </Video>
      </VideoWrapper>
    </Section>
  );
}
