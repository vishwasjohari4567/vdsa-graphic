import { SkillsWrapper, SkillsContainer, SectionTitle, SkillsGrid, SkillCategory, CategoryTitle, SkillItem, SkillName, SkillBar, SkillProgress } from './styles';

const skillsData = [
  {
    category: 'Design Tools',
    skills: [
      { name: 'Adobe Photoshop', level: 95 },
      { name: 'Adobe Illustrator', level: 90 },
      { name: 'Procreate', level: 85 },
      { name: 'Figma', level: 80 },
      { name: 'Adobe After Effects', level: 75 },
    ]
  },
  {
    category: '3D & Animation',
    skills: [
      { name: 'Blender', level: 88 },
      { name: 'Cinema 4D', level: 82 },
      { name: 'Maya', level: 70 },
      { name: 'Substance Painter', level: 75 },
      { name: 'Unreal Engine', level: 65 },
    ]
  },
  {
    category: 'Traditional Art',
    skills: [
      { name: 'Pencil Drawing', level: 92 },
      { name: 'Digital Painting', level: 88 },
      { name: 'Watercolor', level: 78 },
      { name: 'Character Design', level: 85 },
      { name: 'Concept Art', level: 83 },
    ]
  },
  {
    category: 'Technical',
    skills: [
      { name: 'Photo Retouching', level: 93 },
      { name: 'Color Grading', level: 87 },
      { name: 'UI/UX Design', level: 80 },
      { name: 'Typography', level: 85 },
      { name: 'Brand Design', level: 82 },
    ]
  }
];

export default function Skills() {
  return (
    <SkillsWrapper id="skills">
      <SkillsContainer>
        <SectionTitle>
          My <span>Skills</span>
        </SectionTitle>
        
        <SkillsGrid>
          {skillsData.map((category, categoryIndex) => (
            <SkillCategory key={category.category} delay={categoryIndex * 0.2}>
              <CategoryTitle>{category.category}</CategoryTitle>
              {category.skills.map((skill, skillIndex) => (
                <SkillItem key={skill.name} delay={(categoryIndex * 0.2) + (skillIndex * 0.1)}>
                  <SkillName>{skill.name}</SkillName>
                  <SkillBar>
                    <SkillProgress 
                      level={skill.level} 
                      delay={(categoryIndex * 0.2) + (skillIndex * 0.1) + 0.5}
                    />
                  </SkillBar>
                </SkillItem>
              ))}
            </SkillCategory>
          ))}
        </SkillsGrid>
      </SkillsContainer>
    </SkillsWrapper>
  );
}