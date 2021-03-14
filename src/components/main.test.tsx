import { screen, render } from '@testing-library/react';

import Main from './main';

describe('<Main />', () => {
  it('should render the heading', () => {
    render(<Main />);

    expect(
      screen.getByRole('heading', {
        name: /main component/
      })
    ).toBeInTheDocument();
  });
});
