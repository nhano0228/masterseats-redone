# MasterSeats Server

Before interfacing with this server, be sure to have node, docker, tslint, and tsoa installed onto your computer. If you want to upload to the production server, you must also have the heroku cli installed.

## Install
To install the application, do the following after cloning the repository:
```bash
$ npm install
```

## Build and Run
To build the application locally:
```bash
$ npm run build:all
```

And to run the server locally:
```bash
$ docker-compose up
```

To build the application in anticipation of a production upload:
```bash
$ npm run build-prod:all
```

Run the following to upload a new version to heroku:
```bash
$ docker image build .
$ heroku container:push web --app masterseats-server
$ heroku container:release web --app masterseats-server
```

To create a local docker image:
```bash
$ docker image build -f Dockerfile.test .
```

## Codestyle
To check the codestyle (lint), do the following:
```bash
$ npm run lint
```
