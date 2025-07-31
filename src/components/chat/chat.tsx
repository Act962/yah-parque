// components/ChatbotWidget.js
import Script from "next/script";

export default function ChatbotWidget() {
  return (
    <>
      <Script
        id="omnichat-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.omniChatQueueId = 13;
            window.omniChatDomain = 'grupoativa.alochat.com.br';
          `,
        }}
      />
      <Script
        src="https://statics.atenderbem.com/js/wbchat.min.js"
        strategy="afterInteractive"
        async
      />
    </>
  );
}
