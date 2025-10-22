import { 
  ContactWrapper, 
  ContactContainer, 
  SectionTitle, 
  ContactContent, 
  ContactInfo, 
  ContactItem, 
  ContactIcon, 
  ContactText, 
} from './styles';

export default function Contact() {

  return (
    <ContactWrapper id="contact">
      <ContactContainer>
        <SectionTitle>
          Get In <span>Touch</span>
        </SectionTitle>
        
        <ContactContent>
          <ContactInfo>
            <h3>Let's Work Together</h3>
            <p>
              I'm always excited to collaborate on creative projects. Whether you need 
              illustrations, 3D art, photo editing, or design work, let's bring your 
              vision to life.
            </p>
            
            <ContactItem>
              <ContactIcon>📧</ContactIcon>
              <ContactText>
                <strong>Email</strong>
                <span>vishwasjohari4567@gmai.com</span>
              </ContactText>
            </ContactItem>
            
            <ContactItem>
              <ContactIcon>📱</ContactIcon>
              <ContactText>
                <strong>Phone</strong>
                <span>+91 7520704567</span>
              </ContactText>
            </ContactItem>
            
            <ContactItem>
              <ContactIcon>📍</ContactIcon>
              <ContactText>
                <strong>Location</strong>
                <span>Meerut</span>
              </ContactText>
            </ContactItem>
          </ContactInfo>
          
        </ContactContent>
      </ContactContainer>
    </ContactWrapper>
  );
}