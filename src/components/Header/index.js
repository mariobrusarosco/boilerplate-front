import Link from "next/link";

const Header = () => (
  <header>
    <nav>
      <style jsx>{`
        a {
          margin: 0 10px 0 0;
        }
      `}</style>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/intro" prefetch={false}>
            <a>Intro</a>
          </Link>
        </li>
        <li>
          <Link href="/shows" prefetch={false}>
            <a>Shows</a>
          </Link>
        </li>
        <li>
          <a href="/non-existing">Non Existing Page</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
