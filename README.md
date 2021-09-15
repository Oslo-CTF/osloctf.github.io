# osloctf.github.io

Followed this guide: https://blog.logrocket.com/build-deploy-vue-js-app-github-pages/

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
Once you've finished your changes and want to deploy them, this is the section
to follow. 

First, make sure you have access to the [`Settings > Pages`](https://github.com/Oslo-CTF/osloctf.github.io/settings/pages)
page in the top bar of this GitHub repository.

Then execute the following command: 
```
yarn deploy
```

After the deploy is done, go to `Settings > Pages` and write "osloctf.no" into 
the `Custom domain` field. Otherwise the page is no longer connected to our 
domain.

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

