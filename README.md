# osloctf.github.io

## Prerequisites
In order to run the project, you will need to download [yarn](https://classic.yarnpkg.com/en/docs/install/).
You might need to install [Node.js](https://nodejs.org/en/download/) to get 
Yarn.

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
This is for local development. Hot-reload means that you don't have to stop the
process and serve again for every change you make. 
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
This is for maintaining some code standard rules.
```
yarn lint
```

### Deploy to Github Pages
Followed this guide: https://blog.logrocket.com/build-deploy-vue-js-app-github-pages/

Once you've finished your changes and want to deploy them, execute the following 
command: 
```
yarn deploy
```

To begin with, while deploying, GitHub is checking the DNS in order for our 
domain to be used. This takes a couple of minutes and then the webpage should 
show at https://osloctf.no. 

However, if something goes wrong, the domain name might not have been added
properly. Then you should go to [`Settings > Pages`](https://github.com/Oslo-CTF/osloctf.github.io/settings/pages)
and write "osloctf.no" into the `Custom domain` field. 

If you do not have access to the `Settings > Pages`-page, let us know in Discord.

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

