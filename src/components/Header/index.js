import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <Link href="/">
        <span>BLOG</span>
      </Link>
      <nav>
        <Link href="https://github.com/b-emrekalkan" target="_blank">
          About
        </Link>
      </nav>
    </header>
  )
}

export default Header;