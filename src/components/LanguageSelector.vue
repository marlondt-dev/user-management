<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { locale } = useI18n()

const languages = [
    { code: 'es', name: 'Español', flag: 'ES'},
    { code: 'en', name: 'English', flag: 'EN'},
]

const changeLanguage = (code: string) => {
    locale.value = code
}

</script>

<template>
    <div class="language-selector">
        <button v-for="lang in languages" :key="lang.code" :class="{ active: locale === lang.code }" 
        @click="changeLanguage(lang.code)" :title="lang.name">{{ lang.flag }}</button>
        
    </div>
</template>

<style lang="scss" scoped>


    .language-selector {
        margin-left: auto;
        display: flex;
        gap: 0.5rem;

        button{
            @include button($dark-gray);
            &.active {
            background: $primary;
            color: $white;
            border-color: $primary;
        }
        }  
        }

</style>