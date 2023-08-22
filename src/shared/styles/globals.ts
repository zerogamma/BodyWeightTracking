import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

@media (prefers-color-scheme: dark) {
  html {
    color-scheme: dark;
  }
  body {
    color: white;
    background: black;
  }
}

@keyframes animate {
  0%{
      transform: translateY(0) rotate(0deg);
      opacity: 1;
      border-radius: 0;
  }
  100%{
      transform: translateY(-1000px) rotate(720deg);
      opacity: 0;
      border-radius: 50%;
  }
}

.background {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  background: #4e54c8;
  overflow: hidden;
  z-index: -1;
}
.background li {
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.2);
  animation: animate 30s linear infinite;
}

.background li:nth-child(0) {
  left: 29%;
  width: 122px;
  height: 122px;
  bottom: -122px;
  animation-delay: 1s;
}
.background li:nth-child(1) {
  left: 52%;
  width: 102px;
  height: 102px;
  bottom: -102px;
  animation-delay: 5s;
}
.background li:nth-child(2) {
  left: 20%;
  width: 91px;
  height: 91px;
  bottom: -91px;
  animation-delay: 10s;
}
.background li:nth-child(3) {
  left: 14%;
  width: 92px;
  height: 92px;
  bottom: -92px;
  animation-delay: 3s;
}
.background li:nth-child(4) {
  left: 51%;
  width: 110px;
  height: 110px;
  bottom: -110px;
  animation-delay: 1s;
}
.background li:nth-child(5) {
  left: 6%;
  width: 124px;
  height: 124px;
  bottom: -124px;
  animation-delay: 21s;
}
.background li:nth-child(6) {
  left: 13%;
  width: 175px;
  height: 175px;
  bottom: -175px;
  animation-delay: 5s;
}
.background li:nth-child(7) {
  left: 73%;
  width: 107px;
  height: 107px;
  bottom: -107px;
  animation-delay: 4s;
}
.background li:nth-child(8) {
  left: 24%;
  width: 133px;
  height: 133px;
  bottom: -133px;
  animation-delay: 18s;
}
.background li:nth-child(9) {
  left: 34%;
  width: 137px;
  height: 137px;
  bottom: -137px;
  animation-delay: 17s;
}
.background li:nth-child(10) {
  left: 45%;
  width: 122px;
  height: 122px;
  bottom: -122px;
  animation-delay: 19s;
}
`;
