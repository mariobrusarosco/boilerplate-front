import { screen, render, act, waitFor, wait } from '@testing-library/react';

import IndexPage from 'pages/index';

describe('Pages | Index', () => {
  it('renders the a <main> node element', async () => {
    // act(() => {
    render(<IndexPage />);
    // });

    await waitFor(() => expect(screen.queryByText('Leaflet')).toBeInTheDocument());

    // act(() => {
    //   expect(screen.getByTestId('home-page-wrapper')).toBeInTheDocument();
    // });

    // ------------------------------
    // await waitFor(() => {
    //   // screen.debug();
    //   // expect(screen.getByTestId('home-page-wrapper')).toBeInTheDocument();
    // });

    // process.nextTick(async () => {
    //   // screen.debug();

    //   await waitFor(() => {
    //     screen.debug();
    //     expect(screen.getByTestId('home-page-wrapper')).toBeInTheDocument();
    //   });

    //   done();
    // });
    // ------------------------------
  });
});
