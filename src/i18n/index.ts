import { createI18n } from "vue-i18n";
import es from "@/i18n/es.json"
import en from "@/i18n/en.json"

const i18n = createI18n({
    legacy: false,
    locale: 'es',
    fallbackLocale: 'en',
    messages: {
        es,
        en
    }
})

export default i18n