import Link from "next/link";

export default function Header() {
  return (
    <header className="p-4 bg-gray-800 text-white">
      <nav className="container mx-auto flex justify-between">
        <Link href="/" className="font-bold">
          Raiteilla
        </Link>
        <div>
          <Link href="/stations" className="mr-4">
            Stations
          </Link>
          <Link href="/map" className="mr-4">
            Map
          </Link>
          <Link href="/status">Status</Link>
        </div>
      </nav>
    </header>
  );
}