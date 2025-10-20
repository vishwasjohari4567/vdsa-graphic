import React, { useState, useEffect, useCallback } from 'react';
import {
  PortfolioGrid,
  ProjectTools,
  Tool,
  ProjectLinks,
  ProjectLink,
  ModalBackground,
  ModalContent,
  ModalImage,
  ModalInfo,
  CloseButton,
} from './styles';
import type { ProjectType } from '../../types';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

  // Close modal on Escape key press
  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    },
    []
  );

  useEffect(() => {
    if (selectedProject) {
      window.addEventListener('keydown', onKeyDown);
      document.body.style.overflow = 'hidden'; // prevent background scroll
    } else {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedProject, onKeyDown]);

  const onBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setSelectedProject(null);
    }
  };

  return (
    <>
      <PortfolioGrid>
        {/* {projects.map((project) => (
          <ProjectCard
            key={project.id}
            onClick={() => setSelectedProject(project)}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setSelectedProject(project);
              }
            }}
            role="button"
            aria-label={`View project: ${project.title}`}
          >
            <ProjectImage src={project.image} alt={project.title} />
            <ProjectOverlay>
              <ProjectInfo>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectTools>
                  {project.tools.map((tool, index) => (
                    <Tool key={index}>{tool}</Tool>
                  ))}
                </ProjectTools>
                <ProjectLinks>
                  {project.behanceUrl && (
                    <ProjectLink
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.behanceUrl, '_blank');
                      }}
                    >
                      Behance
                    </ProjectLink>
                  )}
                  {project.instagramUrl && (
                    <ProjectLink
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.instagramUrl, '_blank');
                      }}
                    >
                      Instagram
                    </ProjectLink>
                  )}
                </ProjectLinks>
              </ProjectInfo>
            </ProjectOverlay>
          </ProjectCard>
        ))} */}
      </PortfolioGrid>

      {selectedProject && (
        <ModalBackground
          onClick={onBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <ModalContent>
            <ModalImage src={selectedProject.image} alt={selectedProject.title} />
            <ModalInfo>
              <h2 id="modal-title">{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>
              <div>
                <strong>Tools Used:</strong>
                <ProjectTools>
                  {selectedProject.tools.map((tool, index) => (
                    <Tool key={index}>{tool}</Tool>
                  ))}
                </ProjectTools>
              </div>
              <div>
                <strong>Year:</strong> {selectedProject.year}
              </div>
              <ProjectLinks>
                {selectedProject.behanceUrl && (
                  <ProjectLink
                    onClick={() => window.open(selectedProject.behanceUrl, '_blank')}
                  >
                    View on Behance
                  </ProjectLink>
                )}
                {selectedProject.instagramUrl && (
                  <ProjectLink
                    onClick={() => window.open(selectedProject.instagramUrl, '_blank')}
                  >
                    View on Instagram
                  </ProjectLink>
                )}
              </ProjectLinks>
            </ModalInfo>
          </ModalContent>
          <CloseButton
            aria-label="Close modal"
            onClick={() => setSelectedProject(null)}
          >
            ×
          </CloseButton>
        </ModalBackground>
      )}
    </>
  );
}