# Hachium Testing
This is my application test for the ReactJs position at Hachium.

## Table of Contents
- [Introduction](#introduction)
- [Installation](#installation)
  - [MockAPI](#mock-api)
  - [Frontend](#fe)
- [Run project](#run-project)
- [Kết Nối với json-server](#kết-nối-với-json-server)
- [Thank you](#thank-you)

## Introduction
This test is based on [Requirement](https://docs.google.com/document/d/1CWuf0ns1v8BawstjuqH5NfT6Jahy8wmxOBXIDTPqMBM/edit) 
to create a simple to-do list application using ReactJs and MockAPI. In this test, i am using json-server as a API server

## Installtion
### Requirements
- Node.js (20.17.0)
- npm (10.8.3) or yarn

#### MockAPI
First, navigate to the Mock-API directory
`
cd mock-api
`

Then install necessary dependencies
```bash
npm install
# or
yarn 
```

Lastly, run the api server
```bash
npm run start
# or
yarn start
```

Open [http://localhost:5000/tasks](http://localhost:5000/tasks) with your browser to see the data 

#### FE source
First, navigate to the FE directory
`
cd fe
`

Then install necessary dependencies
```bash
npm install
# or
yarn 
```

Lastly, run the development server
```bash
npm run start
# or
yarn start
```

Make sure you have started the API server. If not, check [here](#mock-api)
<br/>
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
