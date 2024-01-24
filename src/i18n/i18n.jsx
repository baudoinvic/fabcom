

 import i18next from "i18next";
 import { initReactI18next } from "react-i18next";

 import enTranslation from "./translations/En/global.json";
 import frTranslation from "./translations/Fr/global.json";



 const resources = {
   en: {
     translation: enTranslation,
   },
   fr: {
     translation: frTranslation,
   },
 };

 i18n
   .use(initReactI18next) 
   .init({
     resources,
     lng: "en", 
     interpolation: {
       escapeValue: false, 
     },
   });

 export default i18n;