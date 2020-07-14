# Start OHMYFOOD Project 

use node-sass 

## Project init

In the project file, use `npm init` command 
and `npm install --save-dev node-sass` command

Create a scss file and css file

In package.json => scripts 

`"transpile": "node-sass scss/mains.scss css/style.css",`
`"watch": "node-sass scss/mains.scss css/style.css -w",`
`"sass": "node-sass scss/mains.scss css/style.css -w --output-style=compact"`

save and use `npm run sass` command.

### You're ready for the code !