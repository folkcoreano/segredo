import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';

export const changeTitle = defineStore("title", () => {
    const pageTitle = ref(
        useLocalStorage("titlePage", {
            title: "",
        })
    );
    const newPageTitle = (newTitle) => {
        pageTitle.value.title = newTitle;
        document.title = `LetterWHO - ${newTitle}`
    }
    return {
        pageTitle,
        newPageTitle
    };
});