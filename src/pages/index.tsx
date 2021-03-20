import dynamic from 'next/dynamic';
// import Map from 'components/Map';

const MapClientSide = dynamic(() => import('components/Map'), { ssr: true });

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
      <MapClientSide data-test="test" />
    </main>
  );
}
