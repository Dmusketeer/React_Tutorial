import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html,
body,
div,
span,
applet,
object,
iframe,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
del,
dfn,
em,
font,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend {
  vertical-align: baseline;
  font-family: inherit;
  font-weight: inherit;
  font-style: inherit;
  font-size: 100%;
  outline: 0;
  padding: 0;
  margin: 0;
  border: 0;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  max-width: 100%;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Roboto Mono", monospace;
  background: ${({ theme }) => theme.colors.body};
  color: ${({ theme }) => theme.colors.fontColor};
  line-height: 1.5;
}

input {
    font-family: "Roboto Mono", monospace;
}
`;

export default GlobalStyles;
