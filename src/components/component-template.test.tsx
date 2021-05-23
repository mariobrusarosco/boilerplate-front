import { screen, render } from '@testing-library/react';

import ComponentTemplate from 'components/component-template';

describe('<ComponentTemplate />', () => {
  it('should render the heading', () => {
    render(<ComponentTemplate />);

    expect(
      screen.getByRole('heading', {
        name: /component template/
      })
    ).toBeInTheDocument();
  });
});
