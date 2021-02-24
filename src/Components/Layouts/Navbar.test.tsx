import {render, screen} from '@testing-library/react';
import {GeneralConstants} from '../../LocaleConstants/en/GeneralConstants';
import Navbar from './Navbar';

it('renders correct owner name on navbar', () => {
  // eslint-disable-next-line react/react-in-jsx-scope
  render(<Navbar />);
  expect(
    screen.getByText(
      GeneralConstants.OWNER_FIRST_NAME.toLocaleUpperCase() +
        ' ' +
        GeneralConstants.OWNER_LAST_NAME.toLocaleUpperCase()
    )
  ).toBeInTheDocument();
});

it('renders correct external links', () => {
  // eslint-disable-next-line react/react-in-jsx-scope
  render(<Navbar />);
  expect(screen.getByLabelText('linkedin')).toHaveAttribute(
    'href',
    'https://linkedin.com/in/shubhaarsay'
  );
  expect(screen.getByLabelText('github')).toHaveAttribute(
    'href',
    'https://github.com/slytherindor'
  );
});
