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
    - [Iteration 2](#iteration-2)
    - [Iteration 3](#iteration-3)
    - [Iteration 4](#iteration-4)
    - [Iteration 5](#iteration-5)
  - [What I learned](#what-i-learned)
    - [Next.js fonts](#nextjs-fonts)
    - [Next.js background](#nextjs-background)
    - [Iteration 1 - Lesson learned](#iteration-1---lesson-learned)
    - [Iteration 2 - Lesson learned](#iteration-2---lesson-learned)
    - [Testing style applied through CSS](#testing-style-applied-through-css)
    - [Form no validation](#form-no-validation)
  - [Useful resources](#useful-resources)

# Overview

## Screenshot

## Links

- Solution URL: [On Frontend Mentor](#)
- Live Site URL: [On Github Pages](https://radkr.github.io/intro-component-with-signup-form/)

# My process

## Built with

- Semantic HTML5 markup
- CSS custom properties
- Mobile-first workflow
- Responsive design
- Next.js + React.js
- Zod schema validation package

## Improved with

- TODO: Autoprefixer to increase browser coverage

## Tested with

- TODO: WAVE Web Accessibility Evaluation Tool
- Jest + React Testing Library + User Event Testing Library

## Iterations

### Iteration 1

Show the styled page on mobile devices.

### Iteration 2

Show the styled page on both desktop and mobile devices.

### Iteration 3

Refactor: Rewrite the style to use grid instead of flexbox to prevent glitches around the breakpoint.

### Iteration 4

Refactor: Factor the reused Input component and the functional SignUpForm component out into React Functional Components to enhance the maintainablilty and the testability of the page.

### Iteration 5

Show error messages on submittion attempt and prevent submittion when no or invalid data has been entered to any field so as the user be able to fix any error in the form right away.

### Iteration 6

Show error messages on lost input focus when no or invalid data has been entered to any field so as the user is notified even more earlier about any form error.

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

### Iteration 1 - Lesson learned

Building a webpage according to a reference screenshot instead of a figma file is much harder and will probably not pixel accurate even not to the degree when working with figma files.

I found the [PerfectPixel Chrome extension](https://chromewebstore.google.com/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi) that overlays the reference screenshots over the rendered webpage under construction that helps visually see the differences.

### Iteration 2 - Lesson learned

When the element sizes change with the layout, using flexbox can be tricky. Iteration 3 will maybe to refactor the current solution to grid layout to prevent the undesired glitches around the breakpoint.

### Testing style applied through CSS

My intent was to test: that the Input component renders input that change its border color when get in error state with code something like this:

```javascript
it("renders input that change its border color when get in error state", () => {
  // Arrange and act
  //
  // Not in error state
  render(<Input id="firstName" placeholder="First Name" />);
  const inactiveInput = screen.getByLabelText("First Name");
  const inactiveBorderColor =
    window.getComputedStyle(inactiveInput).borderColor;

  // In error state
  render(<Input id="firstName" placeholder="First Name" active />);
  const activeInput = screen.getByLabelText("First Name");
  const activeBorderColor = window.getComputedStyle(activeInput).borderColor;

  // Assert
  expect(activeBorderColor).not.toBe(inactiveInput);
});
```

This test failed because both `activeBorderColor` and `inactiveInput` result to be empty strings.

As I found out jest with jsdom does not populates the dom with style properties spcified in the css files. There are packages like `jest-transform-css` that intend to do the work.

Lessons learned:

- The `toHaveStyle` Jest DOM function can check against concrete style properties
- `jsdom` provides the `document` and `window` objects that implements many browser API for testing
- By default, Jest doesn't understand how to process CSS files or CSS Modules. It's primarily a JavaScript testing framework.
- CSS files or CSS modules are mocked in a default next.js environment this allows to verify that the correct class names are being applied to your HTML elements, but the actual CSS style properties defined in those files are not populated in the `jsdom` environment.
- There is a package `jest-transform-css` that do the work.
- Performance: Fully parsing and applying CSS in a unit testing environment can be resource-intensive and slow down the test suite. Mocking provides a faster and more focused approach.

### Form no validation

Zod works properly only if `noValidate` is set on the `form` element. Otherwise, the `form` element catches email format error before passed to Zod. This prevented showing the error message specified.

## Useful resources

**Next.js background images:**

- [How to Add a Background Image in Next.js: A Comprehensive Guide](https://www.dhiwise.com/post/how-to-add-a-background-image-in-nextjs-a-comprehensive-guide)

**Styling form and form controls**

- [Styling web forms](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [How to build custom form controls](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls)
- [Advanced form styling](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
