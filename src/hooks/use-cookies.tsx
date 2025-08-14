// import { useEffect, useState } from "react";

// export function useCookieConsent() {
//   const [cookieSettings, setCookieSettings] = useState(null);

//   useEffect(() => {
//     const settings = localStorage.getItem("yah-cookies-accepted");
//     if (settings) {
//       setCookieSettings(JSON.parse(settings));
//     }
//   }, []);

//   const resetCookieConsent = () => {
//     localStorage.removeItem("yah-cookies-accepted");
//     setCookieSettings(null);
//     window.location.reload(); // Recarrega a página para mostrar o banner novamente
//   };

//   return {
//     cookieSettings,
//     isAccepted: cookieSettings !== null,
//     canUseAnalytics: cookieSettings?.analytics || false,
//     canUseThirdParty: cookieSettings?.thirdParty || false,
//     resetCookieConsent,
//   };
// }
