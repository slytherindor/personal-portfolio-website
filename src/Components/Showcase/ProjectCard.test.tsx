import {render, screen} from '@testing-library/react';
import ProjectCard, {IProjectCardProps} from './ProjectCard';

it('renders a project card with all prop values', () => {
  const project: IProjectCardProps = {
    name: 'Demo',
    description: 'This is a demo description',
    language: 'R',
    repoUrl: 'http://url.com',
  };
  // eslint-disable-next-line react/react-in-jsx-scope
  render(<ProjectCard {...project} />);
  expect(screen.getByLabelText('cardHeader')).toHaveTextContent(project.name);
  expect(screen.getByLabelText('cardBody')).toHaveTextContent(
    project.description
  );
  expect(screen.getByLabelText('cardFooter')).toHaveTextContent(
    project.language
  );

  expect(screen.getByLabelText('repoUrlButton')).toHaveAttribute(
    'href',
    project.repoUrl
  );
});
