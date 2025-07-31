import ChatbotWidget from "@/components/chat/chat";
import { HomeLayout } from "@/components/layout";
import { HomePage } from "@/templates/home";

export default function Home() {
  return (
    <HomeLayout>
      <HomePage />
      <ChatbotWidget />
    </HomeLayout>
  );
}
