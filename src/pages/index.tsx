import dynamic from 'next/dynamic';
// import Map from 'components/Map';

const MapClientSide = dynamic(() => import('components/Map'), { ssr: false });

export default function Home() {
  return (
    <main
      className="Home"
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
