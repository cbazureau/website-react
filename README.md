# Global overview

First of all the result is available here : [cedric.bazureau.com](https://cedric.bazureau.com) on an OVH server.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

It also uses :

- _Gitlab Actions_ for pull_request (Build and Test) and for push on master (Build, test and deploy)
- _Prettier_ for auto-formatting code
- _husky/lint-staged_ to set hooks on pre-commit and pre-push
- _Jest_ for unit-testing
- _Server Push_ and _Cache optimizations_ using a template-generated .htaccess
- _Server Side Rendering_ using a puppeteer to pre-generate home HTML

# Continous deployment

https://github.com/cbazureau/website-react/workflows/Build,%20test%20and%20Deploy/badge.svg
