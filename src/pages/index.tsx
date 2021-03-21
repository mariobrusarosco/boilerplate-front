import dynamic from 'next/dynamic';
// import Map from 'components/Map';

// const MapClientSide = dynamic(() => import('components/Map'), { ssr: true });

export default function Home() {
  // console.warn(MapClientSide);
  return (
    <main
      className="test"
      data-testid="home-page-wrapper"
      style={{
        height: '100vh',
        width: '100vw'
      }}
    >
      {/* <MapClientSide data-test="test" /> */}
    </main>
  );
}

// import { screen, render, waitFor } from '@testing-library/react';

// import IndexPage from 'pages/index';

// describe('Pages | Index', () => {
//   it('renders the a <main> node element', async () => {
//     // act(() => {
//     render(<IndexPage />);
//     // });

//     await waitFor(() => expect(screen.queryByText('Leaflet')).toBeInTheDocument());

//     // act(() => {
//     //   expect(screen.getByTestId('home-page-wrapper')).toBeInTheDocument();
//     // });

//     // ------------------------------
//     // await waitFor(() => {
//     //   // screen.debug();
//     //   // expect(screen.getByTestId('home-page-wrapper')).toBeInTheDocument();
//     // });

//     // process.nextTick(async () => {
//     //   // screen.debug();

//     //   await waitFor(() => {
//     //     screen.debug();
//     //     expect(screen.getByTestId('home-page-wrapper')).toBeInTheDocument();
//     //   });

//     //   done();
//     // });
//     // ------------------------------
//   });
// });
