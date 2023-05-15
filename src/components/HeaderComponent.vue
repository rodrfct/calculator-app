<template>
    <header>
        <p>calc</p>

        <span>THEME</span>

        <form id="theme-switch">
            <div class="labels">
                <label for="theme-1">1</label>
                <label for="theme-2">2</label>
                <label for="theme-3">3</label>
            </div>
            <fieldset>
                <input type="radio" name="theme" id="theme-1">
                <input type="radio" name="theme" id="theme-2">
                <input type="radio" name="theme" id="theme-3">
            </fieldset>
        </form>
    </header>
</template>

<style scoped>
header {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    color: var(--white);
}

p {
    font-size: 1.6em;
}

span {
    grid-column: 3;
    place-self: center;
}


fieldset {
    margin: 0;
    border: none;
    border-radius: 20px;
    padding: 4px;

    background-color: var(--toggle-and-keypad-background);
}

.labels {
    padding: 4px;
    display: flex;
    justify-content: space-between;
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

    /*This is probably totally unresponsive */
    transform: translate(0, 15%);
}

input:checked {
    background-color: var(--red);
}

</style>