<script setup>
import {ref, watch} from 'vue';

const selectedTheme = ref("")

function retrieveTheme() {
    try {
        selectedTheme.value = localStorage.getItem("theme")
    } catch (error) {
        return
    }
}

retrieveTheme()

// When the selected theme changes, save the selection
watch(selectedTheme, async (newValue, oldValue) => {
    localStorage.setItem("theme", newValue)
})

</script>

<template>
    <header>
        <h1>calc</h1>

        <span aria-hidden="true" >THEME</span>

        <form id="theme-switch" aria-hidden="true">
            <div class="labels">
                <label for="theme-1">1</label>
                <label for="theme-2">2</label>
                <label for="theme-3">3</label>
            </div>
            <fieldset>
                <input v-model="selectedTheme" type="radio" name="theme" id="theme-1" value="1">
                <input v-model="selectedTheme" type="radio" name="theme" id="theme-2" value="2">
                <input v-model="selectedTheme" type="radio" name="theme" id="theme-3" value="3">
            </fieldset>
        </form>
    </header>
</template>

<style scoped>
header {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    color: var(--text-color);
}

span {
    grid-column: 3;
    place-self: center end;

    font-size: .8rem;
}

form {
    place-self: center;
}

fieldset {
    margin: 0;
    border: none;
    border-radius: 20px;
    padding: 4px 0;

    background-color: var(--toggle-and-keypad-background);
}

.labels, fieldset {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    place-items: center;
}

label, input {
    margin: 0 3px;
}

input {
    --size: .9rem;
    appearance: none;
    border-radius: 50%;

    width: var(--size);
    height: var(--size);
}

input:checked {
    background-color: var(--eq-key-background);
}

input:hover {
    filter: brightness(150%);
    cursor: pointer;
}

</style>