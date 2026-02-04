import { createI18n } from "vue-i18n";
import es from "@/i18n/en.json"
import en from "@/i18n/en.json"

const i18n = createI18n({
    locale: 'es',
    fallbackLocale: 'en',
    messages: {
        es,
        en
    }
})

export default i18n