import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="cursor-pointer
    "
    >
      <Image
        src="/logo.svg"
        className="object-cover"
        alt="Logo"
        width={80}
        height={80}
      />
    </Link>
  );
}
