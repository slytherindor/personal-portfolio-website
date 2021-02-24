import {render, screen} from '@testing-library/react';
import {GeneralConstants} from '../../LocaleConstants/en/GeneralConstants';
import Introduction from './Introduction';

it('renders correct introduction text', () => {
  // eslint-disable-next-line react/react-in-jsx-scope
  render(<Introduction />);
  expect(
    screen.getByText(GeneralConstants.INTRO_PART_1, {
      trim: false,
      exact: true,
      collapseWhitespace: false,
    })
  ).toBeInTheDocument();

  expect(
    screen.getByText(GeneralConstants.INTRO_PART_2, {
      trim: false,
      exact: true,
      collapseWhitespace: false,
    })
  ).toBeInTheDocument();
});
