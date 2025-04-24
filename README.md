# Frontend Mentor - QR code component solution

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

# Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Improved with](#improved-with)
  - [Tested with](#tested-with)
  - [Iterations](#iterations)
    - [Iteration 1](#iteration-1)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)

# Overview

## Screenshot

## Links

- Solution URL: [On Frontend Mentor](#)
- Live Site URL: [On Github Pages](#)

# My process

## Built with

- Semantic HTML5 markup
- CSS custom properties
- Mobile-first workflow
- Responsive design
- Next.js + React.js

## Improved with

- Autoprefixer to increase browser coverage

## Tested with

- W3C Markup validation service
- WAVE Web Accessibility Evaluation Tool
- Jest + React Testing Library + User Event Testing Library

## Iterations

### Iteration 1

Show the styled page on mobile devices.

## What I learned

### Next.js fonts

When using static fonts instead of variable ones in Next.js, you will need to specify the weights like this:

```javascript
import { Poppins } from "next/font/google";

const poppinsSansSerif = Poppins({
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins-sans-serif",
});
```

### Next.js background

Place the background image into the static folder instead of the public folder, that is not cached then use css:

```css
.background {
  background-image: url(/static/bg-intro-mobile.png);
  background-size: cover;
  background-position: center;
}
```

## Useful resources

**Next.js background images:**

- [How to Add a Background Image in Next.js: A Comprehensive Guide](https://www.dhiwise.com/post/how-to-add-a-background-image-in-nextjs-a-comprehensive-guide)

**Styling form and form controls**

- [Styling web forms](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [How to build custom form controls](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls)
- [Advanced form styling](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
