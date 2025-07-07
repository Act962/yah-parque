import { Footer } from "../footer";
import { Navbar } from "../navbar";
import { WhatsFloating } from "../whats-floating";

interface HomeLayoutProps {
  children: React.ReactNode;
}

export function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="h-full flex flex-col">{children}</main>
      <WhatsFloating />
      <Footer />
    </div>
  );
}
