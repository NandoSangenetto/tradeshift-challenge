# Tradeshift Challenge

## Install

### Requirements

To run this project, you need to have Node 10 installed on your machine.

### Installation

```
git clone git@github.com:nandosangenetto/tradeshift-challenge.git
cd tradeshift-challenge
npm i
```

## Testing

```
npm t
```

## Usage

Development mode

```
npm run start:dev
```

Production mode

```
npm run build && npm start
```

## CI/CD

This project connects to a project on the Google Cloud Platform. Every commit we run our CI, testing, and building it.

When the master branch is updated, we also run a new step to deploy it to the Google App Engine automatically.

You can see the steps in two files; the first one is `cloudbuild.yaml` which is used to run the steps after every commit or pull request. And the second one is the `deployment/cloudbuild/production.yaml` which has the extra step to deploy it.

Google App Engine reads the `app.yaml` to know what language and version it will use. Unfortunately, the latest version of Node is the LTS version, not the 12.

## Online demo

This project has an online demonstration running on Google App Engine, and you can access it through this URL address: https://tradeshift-249615.appspot.com/

## Decisions

### Husky

This project has hooks configured. Thus every commit we run the `npm run validate` script, which describes in the `package.json` file.
The `validate` script runs the lint, tests, and build the project before every commit. If something fails, the commit stops.

Also, the hook runs only on the files you have changed. We keep the hard work to run everything to the CI.

### Lint

The project also has strict lint rules for javascript (Airbnb rules) and CSS (styled-components rules).

### UI

I kept the UI of this project simple since the challenge mentioned that I could use the Tradeshift's library, but that was not mandatory. I used some styles from the library but kept away from it using React.

### React

I could use the technology of my choice, and I have a good experience with React, which made me do this challenge very fast; And I've heard from my friend that Tradeshift is migrating some projects to React. Then I chose to use React as the library for this project because I thought that it would be a good idea.

### Styled-components

I love the way how Styled Components turn the code more readable and declarative. After some years using it, I can see lots of benefits like performance, readability, and testability.

### Why not use HTTPS

On the `server.js` we could use HTTPS to run on the local machine, but it's overkill just for development, and we are not using any Web API which requires HTTPS like the Service Worker API. The demo version has HTTPS because Google's load balancer handle with it for us.

### CI/CD

As I said above, I'm using the Google Cloud Platform to run all build steps, and deploy the project using their "always free" free tier. I think that was a good decision because it makes the development more enjoyable since we will get alerts when something is wrong.

### Docker

I'm using App Engine to run the project, and it is a frontend project, I thought that the lack of Docker wouldn't be an issue.

## What could be improved

### The form could be more generic

This project is pretty straightforward, and then I didn't make all the components very generic because I wouldn't use another form in the project.

### Performance

I could break up the components in more components to have better control of the Hooks lifecycle, but the effort wouldn't be a good trade-off.
We don't have very components or DOM nodes, so that is not a real problem.

### Add test on the server (HTTP)

The only file I didn't create any test was the `server.js`. I just created this file to serve the static files, and in production, we could use some HTTP server like Nginx, I didn't focus on this side of the project.

### Center the triangle

I'm challenging myself to improve this issue. When I generate the image of the triangle on the SVG, the first point is on the X of 0 and Y of 0 that way the triangle aligns to the left.
The way to solve this issue is by moving it to the center; To do that I need to figure out these values:
Center of the triangle;
The distance from the center of the triangle to the center of the SVG canvas;
Calculate the percentage of this distance to move it to the right.
Also, I have to make sure that the triangle doesn't escape from the canvas.
