import Link from "next/link";
import { PiBookBookmarkLight, PiTelevision } from "react-icons/pi";
import Button from "../ui/Button";

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
    <nav className="flex items-center justify-between p-4 mb-6">
      <div className="flex-grow justify-center w-1/5 h-12 text-2xl p-1">
        <Link className="hover:bg-[#535C91]" href={'/'}>R|W</Link>
      </div>
      <div className="flex flex-grow justify-center items-center  space-x-20 w-3/5 h-12">
        <Link href={'/pages/read'}>
          <PiBookBookmarkLight className="size-8 hover:bg-[#535C91]" />
        </Link>
        <Link href={'/pages/watch'}>
          <PiTelevision className="size-9 hover:bg-[#535C91]" />
        </Link>
      </div>
      <div className="flex-grow w-1/5 h-12">
        <Button>Search</Button>
        <input className="mt-4 ml-2 text-gray-800" placeholder="Search..."/>
      </div>
    </nav>
  );
};

export default Navbar;

