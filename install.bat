call vars.bat

call npm install babel-cli babel-preset-env --save --no-bin-links
call npm install babel-preset-es2015 babel-preset-react babel-preset-stage-2 --save --no-bin-links
call npm install --save-dev babel-plugin-transform-class-properties --no-bin-links
call jspm install
call jspm install npm:babel-plugin-transform-react-jsx core-js
call jspm dl-loader --latest
