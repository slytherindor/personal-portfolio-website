import {render, screen} from '@testing-library/react';
import ProjectCard, {ProjectInterface} from './ProjectCard';

it('renders a project card with all prop values', () => {
  const project: ProjectInterface = {
    name: 'Demo',
    description: 'This is a demo description',
    language: 'R',
    repoUrl: 'http://url.com',
  };
  // eslint-disable-next-line react/react-in-jsx-scope
  render(<ProjectCard {...project} />);
  expect(screen.getByRole('heading')).toHaveTextContent(project.name);
  const paragraphElements = screen.getAllByRole('paragraph');
  expect(paragraphElements.length).toBe(2);
  expect(paragraphElements[0]).toHaveTextContent(project.description);
  expect(paragraphElements[1]).toHaveTextContent(project.language);
  expect(screen.getByRole('link')).toHaveAttribute('href', project.repoUrl);
});
