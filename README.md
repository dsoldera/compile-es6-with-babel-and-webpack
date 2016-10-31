# PROJECT COMPILE ES2015 WITH BABEL

# Installing and running the Babel directly

1. `npm install babel-cli -g` to install globally the Babel
2. `npm install` for instal other project dependencies
3. run `babel src/index.js.es6 --presets es2015` to compile the code on the terminal
4. run `babel src/index.js.es6 --presets es2015 > dist/index.js` to compile the code and save on a new file

# Running Babel throw Webpack

1. `npm install webpack -g` to install globally the Babel
2. Run `webpack` to compile the code from src to dist