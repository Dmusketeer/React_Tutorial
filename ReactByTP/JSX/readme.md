# -------------------- JSX (JavaScript XML) ---------------------


React uses JSX for templating instead of regular JavaScript. It is not necessary to use it, however, following are some pros that come with it.

- It is faster because it performs optimization while compiling code to JavaScript.

- It is also type-safe and most of the errors can be caught during compilation.

- It makes it easier and faster to write templates, if you are familiar with HTML.


## Using JSX
- JSX looks like a regular HTML in most cases.
## Nested Elements
- If we want to return more elements, we need to wrap it with one container element. 
## Attributes
- We can use our own custom attributes in addition to regular HTML properties and attributes. When we want to add custom attribute, we need to use data- prefix.  

## JavaScript Expressions
- JavaScript expressions can be used inside of JSX. We just need to wrap it with curly brackets {}. 

<b>Note</b> : We cannot use if else statements inside JSX, instead we can use conditional (<b>ternary</b>) expressions. 

## Styling
- React recommends using inline styles. When we want to set inline styles, we need to use camelCase syntax. React will also automatically append px after the number value on specific elements.

## Comments
- When writing comments, we need to put curly brackets {} when we want to write comment within children section of a tag. It is a good practice to always use {} when writing comments.
  
## Naming Convention
- HTML tags always use lowercase tag names, while React components start with Uppercase.

<b>NOTE</b> : class is reserve in js that's why we not use class in jsx we use className instead of that.