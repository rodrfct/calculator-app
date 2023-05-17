# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)


## Overview

### The challenge

Users should be able to:

- [x] See the size of the elements adjust based on their device's screen size
- [x] Perform mathmatical operations like addition, subtraction, multiplication, and division
- [x] Adjust the color theme based on their preference
- [x] **Bonus**: Have their initial theme preference checked using `prefers-color-scheme` and have any additional changes saved in the browser


### Links

- Solution URL: [My Solution](https://www.frontendmentor.io/solutions/calculator-app-with-vue-and-pinia-8BPhG6DN26)
- Live Site URL: [My Live Site](https://rodrfct.github.io/calculator-app/)

## My process

### Built with

- CSS Grid
- [Vue](https://vuejs.org/) - JS library
- [Pinia](https://pinia.vuejs.org/) - Vue store



### What I learned

I started this challenge to improve my CSS (specially Grid) and learn Pinia as well as to get more practice with Vue.

```css
/*I learned to prevent overflow on grid containers */
.input {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
    /*Setting a percenteage for the row-gap causes overflow, but a fixed size doesn't,
    I took a long time to realize. The reason I don't know, but column-gap seems fine */
    gap: 1em 5%;
}

/*I learned the :has() pseudo-class, which is very powerful but it is not supported by Firefox (my browser of choice) yet */
root:has(#theme-1:checked) {
  /* Theme 1 */
  
    /* Backgrounds */
...
}
```

```javascript
// I learned about the eval() function
pool.value = eval(expr);
```

### Useful resources

- [ChatGPT](https://chat.openai.com/)
- [MDN](https://developer.mozilla.org/) - Amazing resource as always. Provides in-depth information about every HTML tag, every CSS property and every JS API.
- [Kevin Powell's channel](https://www.youtube.com/@KevinPowell) - Really good videos overall, I like that he focuses on the *why* and not only the *how*. I learned to make the theme switcher with [this video](https://www.youtube.com/watch?v=fyuao3G-2qg&t=1486s)

