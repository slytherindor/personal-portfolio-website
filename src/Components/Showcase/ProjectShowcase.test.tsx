import {MockedProvider} from '@apollo/client/testing';
import Alert from '@material-ui/lab/Alert';
import {render} from '@testing-library/react';
import {GraphQLError} from 'graphql';
import {act, create, ReactTestRenderer} from 'react-test-renderer';
import ProjectCard from './ProjectCard';
import ProjectShowcase, {PROJECTS_QUERY} from './ProjectShowcase';

it('should render loading state for projects', () => {
  const {getByRole} = render(
    <MockedProvider>
      <ProjectShowcase />
    </MockedProvider>
  );
  expect(getByRole('progressbar')).toBeInTheDocument();
});

it('should render success state for projects', async () => {
  const mocks = {
    request: {
      query: PROJECTS_QUERY,
    },
    result: {
      data: {
        repos: [
          {
            name: 'Demo',
            description: 'Hello',
            repoUrl: 'http://url.com',
            language: 'R',
          },
        ],
      },
    },
  };
  let root: ReactTestRenderer;
  await act(async () => {
    root = create(
      <MockedProvider mocks={[mocks]} addTypename={false}>
        <ProjectShowcase />
      </MockedProvider>
    );
    await new Promise(resolve => setTimeout(resolve, 0));
  });
  const p = root!.root.findAllByType(ProjectCard);
  expect(p).toHaveLength(1);
  expect(p[0].props).toStrictEqual(mocks.result.data.repos[0]);
});

it('should render error state for projects upon network error', async () => {
  const mocks = {
    request: {
      query: PROJECTS_QUERY,
    },
    error: new Error('An error occurred'),
  };
  let root: ReactTestRenderer;
  await act(async () => {
    root = create(
      <MockedProvider mocks={[mocks]} addTypename={false}>
        <ProjectShowcase />
      </MockedProvider>
    );
    await new Promise(resolve => setTimeout(resolve, 0));
  });
  const alert = root!.root.findByType(Alert);
  expect(alert.props).toStrictEqual({
    severity: 'error',
    children: 'Failed to fetch projects',
  });
});

it('should render error state for projects upon graphql error', async () => {
  const mocks = {
    request: {
      query: PROJECTS_QUERY,
    },
    result: {
      errors: [new GraphQLError('Error!')],
    },
  };
  let root: ReactTestRenderer;
  await act(async () => {
    root = create(
      <MockedProvider mocks={[mocks]} addTypename={false}>
        <ProjectShowcase />
      </MockedProvider>
    );
    await new Promise(resolve => setTimeout(resolve, 0));
  });
  const alert = root!.root.findByType(Alert);
  expect(alert.props).toStrictEqual({
    severity: 'error',
    children: 'Failed to fetch projects',
  });
});
