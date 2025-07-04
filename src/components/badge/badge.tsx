interface Bagde {
  title: string;
}

export function Badge({ title }: Bagde) {
  return <span className="py-1 px-4 bg-[#00c7df]"> {title} </span>;
}
