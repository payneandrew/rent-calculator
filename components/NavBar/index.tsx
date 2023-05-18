import Link from "next/link";

function NavBar() {
  return (
    <nav className="px-2 py-1 text-sm">
      <ul className="flex gap-2">
        <li className="text-lg font-extrabold">
          <Link href="/">Rent Calculator</Link>
        </li>
        <li role="separator" className="flex-1" />
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/rent-by-location">Rent Prices In Your Area</Link>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
