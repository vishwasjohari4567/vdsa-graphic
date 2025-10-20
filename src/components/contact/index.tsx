import { useState } from 'react';
import { 
  ContactWrapper, 
  ContactContainer, 
  SectionTitle, 
  ContactContent, 
  ContactInfo, 
  ContactItem, 
  ContactIcon, 
  ContactText, 
  ContactForm, 
  FormGroup, 
  FormLabel, 
  FormInput, 
  FormTextarea, 
  SubmitButton,
} from './styles';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add email service integration here
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
                <span>vishwas@example.com</span>
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
          
          <ContactForm onSubmit={handleSubmit}>
            <FormGroup>
              <FormLabel>Name *</FormLabel>
              <FormInput
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel>Email *</FormLabel>
              <FormInput
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel>Subject *</FormLabel>
              <FormInput
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Project inquiry, collaboration, etc."
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel>Message *</FormLabel>
              <FormTextarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project, timeline, and what kind of creative work you need..."
                rows={5}
              />
            </FormGroup>
            
            <SubmitButton type="submit">
              Send Message
            </SubmitButton>
          </ContactForm>
        </ContactContent>
      </ContactContainer>
    </ContactWrapper>
  );
}