import Link from "next/link";

// USE THIS LATER IF NECESSARY. REFER TO BF CLONE FOR THE REST OF THE CODE
// type NavLink = {
//   name: string;
//   href: string;
// };

// const navLinks: NavLink[] = [
//   {name: 'read', href: '/read'},
//   {name: 'watch', href: '/watch'},
// ];

const Navbar: React.FC = () => {
  return (
    <nav>
      <div>
        <div>
          <Link href={'/'}>R|W</Link>
        </div>
        <div>
          <Link href={'/pages/read'}>
            Read
          </Link>
        </div>
        <div>
          <Link href={'/pages/watch'}>
            Watch
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;