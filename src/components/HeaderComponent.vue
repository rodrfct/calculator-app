<template>
    <header>
        <span>calc</span>

        <span>THEMES</span>

        <div class="themes">
            <form>
                <label for="theme-1">1</label>
                <label for="theme-2">2</label>
                <label for="theme-3">3</label>
                <fieldset>
                    <input type="radio" name="theme" id="theme-1">
                    <input type="radio" name="theme" id="theme-2">
                    <input type="radio" name="theme" id="theme-3">
                </fieldset>
            </form>
        </div>
    </header>
</template>

<style scoped>
header {
    width: 100%;
}

.themes {
    display: inline;
}

</style>