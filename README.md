# Global overview

![pipeline](https://github.com/cbazureau/website-react/workflows/Build,%20test%20and%20Deploy/badge.svg)

First of all the result is available here : [cedric.bazureau.com](https://cedric.bazureau.com) on an OVH server.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

It also uses :

- **Gitlab Actions** for pull_request (Build and Test) and for push on master (Build, test and deploy)
- **Prettier** for auto-formatting code
- **husky/lint-staged** to set hooks on pre-commit and pre-push
- **Jest** for unit-testing
- **Server Push** and **Cache optimizations** using a template-generated .htaccess
- **Server Side Rendering** using a puppeteer to pre-generate home HTML
- **Intersection Observer** for cross-browser lazy loading
- **Github Actions** for ci and deploy

# Lighthouse Score

![lighthouse](/docs/lighthouse.gif)
