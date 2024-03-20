// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/about"><a>About Us</a></Link></li>
        <li><Link href="/contact"><a>Contact Us</a></Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

