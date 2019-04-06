# Modelify Client

This repository contains the client of Modelify, a bespoke tool for job tracking and communication in the fashion industry.
The live version of the entire project can be found [here](https://modelify.agency).

## Getting started

To use the project, download it to your device.

Open the terminal of your choice and navigate to the root of the project and install the dependencies by executing:

```bash
npm i
```

Before running any command, make a `.env` file inside the root of the project that contains the following:

```text
REACT_APP_API_URL="https://modelify.herokuapp.com"
```

Afterwards, run the following command in a terminal window:

```bash
npm start
```

The app will automatically open a browser page to [http://localhost:3000/](http://localhost:3000/). Otherwise, navigate to this page.

If you want to run the server locally as well and connect it to this app, please follow the guide in the `README.md` in the server's repository. 
Afterwards. replace the contents of `.env` in this project with the following command and restart the client.

```text
REACT_APP_API_URL="http://localhost:5656"
```

## Test

If you want to run the test suite, make sure the cleitn is not running, then execute the command below and follow the instructions:

```bash
npm test
```