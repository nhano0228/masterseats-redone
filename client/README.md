# MasterSeats Client

## Getting Started

In order to get this repo running, you need to have npm (or yarn), and openapi-generator installed on your computer. Once that is done, you can follow the following steps to get it running.

First, install pacakages:
```bash
$ npm install
```

To build and connect to local, ALREADY RUNNING, server:
```bash
$ npm run build:api
```

To connect to the production server:
```bash
$ npm run build-prod:api
```

To start local client:
```bash
$ yarn run dev
```

To upload to staging on vercel:
```bash
$ vercel
```

To upload to production version:
```bash
$ vercel --prod
```