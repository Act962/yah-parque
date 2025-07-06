import { Footer } from "../footer";
import { Header } from "../header";

interface HomeLayoutProps {
  children: React.ReactNode;
}

export function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col bg-white">
      <Header />
      <main className="h-full flex flex-col">{children}</main>
      <Footer />
    </div>
  );
}
