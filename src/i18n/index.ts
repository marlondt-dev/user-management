import { createI18n } from "vue-i18n";
import es from "@/i18n/es.json"
import en from "@/i18n/en.json"
import it from "@/i18n/it.json"
import fr from "@/i18n/fr.json"
import de from "@/i18n/de.json"

const i18n = createI18n({
    legacy: false,
    locale: 'es',
    fallbackLocale: 'en',
    messages: {
        es,
        en,
        it,
        fr,
        de
    }
})

export default i18n