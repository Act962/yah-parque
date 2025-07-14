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
        className="object-cover size-10 w-fit "
        alt="Logo"
        width={80}
        height={80}
      />
    </Link>
  );
}
