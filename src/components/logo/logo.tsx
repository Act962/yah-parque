import Image from "next/image";

export function Logo() {
  return (
    <Image
      src="/logo.svg"
      className="object-cover size-8 w-fit "
      alt="Logo"
      width={100}
      height={100}
    />
  );
}
