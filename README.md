# Chat-Implementation
## Table of Contents  
* [APIs](#apis)
* [Argument vs Parameter](#argument-vs-parameter)
* [Asynchronous JavaScript](#asynchronous-javascript)
   * [Callbacks](#callbacks)
   * [Promises](#promises)
   * [Async Functions](#async-functions)
* [Authentication and Authorization](#authentication-and-authorization)
* [Banking APIs](#banking-apis)
* [Chatbot Resources](#chatbot-resources)
    * [Chatbot Technology Stack](#chatbot-technology-stack)
* [Dialogflow](#dialogflow)
* [ES6](#es6)
* [Express](#express)
* [Google](#google)
    * [Dialogflow](#dialogflow)
    * [Google Cloud SDK](#google-cloud-sdk)
* [Heroku](#heroku)
* [joi](#joi)
* [Links](#links)
  * [Chat Apps](#chat-apps)
* [mongoDB](#mongodb)
* [ngrok](#ngrok)
* [NPM Packages](#npm-packages)
  * [joi-password-complexity](#joi-password-complexity)
* [Object Oriented Programming](#object-oriented-programming)
* [PostgreSQL](#postgresql)
* [React](#react)
* [RESTful](#restful)
* [Sendgrid](#sendgrid)
 

## APIs
* [myTeachable](https://sso.teachable.com/secure/teachable_accounts/profile)
* [Cassandra vs MongoDB](https://stackoverflow.com/questions/2892729/mongodb-vs-cassandra?rq=1)
* [OpenWeatherMap API](https://openweathermap.org/api)
* [API.ai](https://www.npmjs.com/package/apiai)
* [Travel APIs Providers](http://www.travelotas.com/worlds-leading-travel-apis-provider/)
* [What APIs are there for finding flights?](https://www.quora.com/What-APIs-are-there-for-finding-flights)
* [Commission Junction](https://members.cj.com/member/publisher/home.do)
* [OpenWeather API](https://home.openweathermap.org/api_keys) - 8202bf8ac17a5affa77cb6942abb73a5
* [APIs for flight fare search](https://www.quora.com/?activity_story=42881226)

## Asynchronous JavaScript
Waiting for actions to finish is implicit in the synchronous model, while it is explicit, under our control, in the asynchronous one.
* `var myArray = new Array();`
* `document.getElementById("id").onClick` - onClick property returns the click event handler code on the current element
```javascript
var myArray = new Array()=function() {
  document.getElementById('first dev').innerHTML = myArray[1];
}
```
* [Eloquent Javascript](https://eloquentjavascript.net/11_async.html)
* [Writing neat asynchronous Node JS code with Promises & Async/Await](https://medium.com/@tkssharma/writing-neat-asynchronous-node-js-code-with-promises-async-await-fa8d8b0bcd7c)
* [Async/await](https://javascript.info/async-await)
* `.then` method - registers a callback function to be called when the promise resolves and produces a value.  You can add multiple callbacks to a single promise, and they will be called, even if you add them after the promise has already resolved (finished).
`.then` method returns another promise, which resolves to the value that the handler function returns or, if that returns a promise, waits for the promise and then resolves its result.
* To create a promise, you can use promise as a constructor.
* Construtor - method for creating and initializing an object created within a class.
* `Promise` - based interface for the `readStorage` function:
```javascript
function storage(nest, name) {
  return new Promise(resolve => {
    nest.readStorage(name, result => resolve(result));
  });
}

storage(bigOak, "enemies")
  .then(value => console.log('Got', value));
```
Main advantage of Promises is that they simplify use of callback functions.

Instead of having to pass around callbacks, promise-based functions look similar to regular ones: they take input as arguments and return their outputs.

Async code is used to load data into tables, make requests to the server, load DOM elements on priority, write non-blocking code on Node.

### Creating a Promise
We create a promise in our Node.js program using the 'new' constructor.

* `var myPromise = new Promise (function(resolve, reject)){}`
* `let` - allows you to declare variables that are limited in scope to the block, statement, or expression on which it is used.  `let` bindings are created at the top of the (block) scope containing the declaration => this is `hoisting`.
* `var` keyword - defines a variable globally, or locally to entire function regardless of block scope.


There are three patterns to deal with asynchronous code:
* [Callbacks](#callbacks) - a function to call when a result of an asynchronous operation is ready.  Callbacks are used to signal completion of a task.
* Promises - object that can hold results of an asynchronous operation.  It can be in 3 states: Pending, Fulfilled and Rejected.  Initially, it is an a pending state.  If the operation is completed successfully it is resolved or fulfilled.  If the state of the promise fails, it will go from pending to rejected. Every `promise` object has two method.
If you have an async function that returns a callback, modify it to return a promise.
A promise is an asynchronous action that may complete at some point and produce a value. It is able to notify anyone who is interested when its value is available.  To get the result of a promise, you can use its then method.   This registers a callback function to be called when the promise resolves and produces a value. You can add multiple callbacks to a single promise, and they will be called, even if you add them after the promise has already resolved (finished).  The main advantage of promises—they simplify the use of asynchronous functions. 
* Async/await

## Authentication and Authorization
1. Register: POST /api/users {name, email, password}
```json
email: {
  type: String,
  unique: true
}
```
2. Login: POST /api/logins
### Callbacks
* Callbacks are used to signal completion of a task.  
* `setTimeout` function waits a given number of milliseconds and then calls a function"
```javascript
setTimeout(() => console.log('Vuk'), 2000);
```
```javascript
import {bigOak} from "./crow-tech"

bigOak.readStorage("food cache", cache = > {
   let firstCache = cache[0];
   bigOak.readStorage(firstCache, info => {
      console.log(info);
   });
});
```
* `.then` - method registers a callback function to be called when the promise resolves and produces a value.  You can add multiple callbacks to a single promise, and they will be called, even if you add them after the promise has already resolved (finished).
* `.then` - method returns another promise, which resolves to value that the handler function returns or, if that returns a promise, waits for that promise then resolves its result.

### Promises
It can be in 3 states: Pending, Fulfilled and Rejected.  Initially, it is an a pending state.  If the operation is completed successfully it is resolved or fulfilled.  If the state of the promise fails, it will go from pending to rejected. Every `promise` object has two method.

To create a promise, you can use Promise as a constructor.

`constructor` - method for creating and initializing an object created within a class.

If you have an async function that returns a callback, modify it to return a promise.

A promise is an asynchronous action that may complete at some point and produce a value. It is able to notify anyone who is interested when its value is available.  To get the result of a promise, you can use its then method.   This registers a callback function to be called when the promise resolves and produces a value. You can add multiple callbacks to a single promise, and they will be called, even if you add them after the promise has already resolved (finished).  The main advantage of promises—they simplify the use of asynchronous functions. 

The easiest way to create a promise is by calling `Promise.resolve`.  To get the result of a promise, you can use its `then` method. 
```javascript
let fifteen = Promise.resolve(15);
fifteen.then(value => console.log( 'Got ${value} ')):
```

## Argument vs Parameter
* Parameter is a variable in a method definition.  When a method is called, the arguments are the data you pass into the method's parameters.  
* Parameter is a variable in the declaration of a function.  Argument is the actual value of this variable that gets passed to function.
* A parameter is a variable defined by a method that receives a value when the method is called.
* An argument is a value that is passed to a method when it is invoked.
* parameters are the name within the function definition.
* Arguments are the values passed in when the function is called.
* Parameters don’t change when the program is running
* Arguments are probably going to be different every time the function is called.

## Banking APIs
* [BofA API Setup Form](https://developer-static-prodb.bankofamerica.com/CPODevPortal/apidocs/public/resources/API%20Setup%20Form.pdf)
* [BofA API Developer Portal](https://developer.bankofamerica.com/CPODevPortal/apidocs/public/APIDevPortal.html#/home)
* [Amex for Developers](https://developer.americanexpress.com/products)
* 

## Chatbot Resources
* [Bootpages](http://www.bootpages.com/)
* [Botlist](https://botlist.co/)
* [Dashbot](https://botlist.co/)
* [Entities Overview](https://botlist.co/)
* [Chatbot Comparison – Facebook, Microsoft, Amazon, and Google](https://www.techemergence.com/chatbot-comparison-facebook-microsoft-amazon-google/)
* [OpenWeatherMap](https://openweathermap.org/current)

### Chatbot Technology Stack
* Dialogflow
    * Dialogflow is a natural language processor used to understand what our visitors want from the bot.  Components to use: agents, intents, parameters, prebuilt agents, slotfilling, etc.
* React
* NodeJS
* mongoDB
* ExpressJS
* git
* Heroku
* Nodemon - local development server
##
* rich messages like cards and quick replies. 
* setup React, configure local servers, create a proxy for communicating with backend. 
* [Slotfilling](https://nlp.stanford.edu/projects/kbp/) - the task is to complete all known information about a given query entity.  
* [Entity Linking](https://nlp.stanford.edu/projects/kbp/) - Spanning multiple documents and linking mentions to concrete entities (when possible), rather than simply clustering them.

## Dialogflow
* `export GOOGLE_APPLICATION_CREDENTIALS=/path-to-keys/key-file.json`
Every time you restart the computer run this command to set up the environment variable.  It you see the authentication error it is because the environment variable is reset.
* `export GOOGLE_APPLICATION_CREDENTIALS=/Users/vukdukic/Apps/Chatbot/crowdart-8e66f-0062b215343e.json`
* [Dialogflow: Node.js Client](https://github.com/CrowdArt/nodejs-dialogflow)
* [Rich messages](https://dialogflow.com/docs/intents/rich-messages)
* [Dialogflow Console](https://console.dialogflow.com/api-client/#/agent/c4c953cc-2d6c-43d9-9fd2-d4d15253d093/intents)
* [Create fulfillment using webhook](https://dialogflow.com/docs/tutorial-build-an-agent/create-fulfillment-using-webhook#create_a_new_calendar_and_configure_the_code_in_the_webhook)
* [Setting up authentication](https://dialogflow.com/docs/reference/v2-auth-setup)
* [System Entities](https://dialogflow.com/docs/reference/system-entities)
* [Make your agent multilingual](https://dialogflow.com/docs/agents/multilingual)
* [Google Project FAQ](https://dialogflow.com/docs/concepts/google-projects-faq)
* [Method: projects.agent.sessions.detectIntent](https://cloud.google.com/dialogflow-enterprise/docs/reference/rest/v2beta1/projects.agent.sessions/detectIntent)
* [Follow-up intent expressions](https://dialogflow.com/docs/reference/follow-up-intent-expressions)

## ES6
`use strict;` Defines that JavaScript code should be executed in "strict mode", a literal expression.  With strict mode, you can not, for example, use undeclared variables.
- With object destructuring, when declaring a variable or constant use {} and add the property of the target object.
* Node.js - operates on a single thread event loop, using non-blocking I/O calls, allowing it to support tens of thousands of concurrent connections without incurring the cost of thread context switching.

## Express
Bulding webservices on top of Node.js.  
* `export PORT=5000`
* http://localhost:5000/api/post/2018/1?sortby=name
* `app.use(express.json)` - when we call `express.json` method, the method returns a piece of middleware and then we call the `app.use` to use the middleware in the request processing timeline.
* When the server creates a new object and/or resource it should write that in the body of the response.

## Facebook Messenger
* [Facebook Messenger Generic Template](https://developers.facebook.com/docs/messenger-platform/send-messages/template/generic)
* [Messenger Platform](https://developers.facebook.com/docs/messenger-platform)
* [Button Template](https://app.sendgrid.com/settings/account)
*  EAADnk6ZBTzAQBALZBN7TAfAqlw1WChZAjs86ZAgZBuZCpPcm3aQdxaw5wjXThuFRjaQzGmIjU7QAldii1B8ZCCG975RMhnXIRrgZAaRZBGRZAHCmLZAYdQoECvgTJQ1okrayZBhpJsqZCZCKsIryT8DAUKODnUYBeKmLnTPQ0yl3IzMWcJPAZDZD
* [Webhook](https://developers.facebook.com/docs/messenger-platform/webhook)
* Callback URL: https://chatbot-facebook1.herokuapp.com/webhook/
* Verify Token: my_chatbot_password
* Subscription fields: messages, messaging postbacks
* [Messenger Settings](https://developers.facebook.com/apps/254621491907588/messenger/settings/)
* [chatbot-facebook-v2-final](https://github.com/jbergant/chatbot-facebook-v2-final)

## Google
* [Actions on Google](https://console.actions.google.com/u/0/project/crowdart-8e66f/simulator/?pli=1)
* [Google Cloud AI Products](https://console.actions.google.com/u/0/project/crowdart-8e66f/simulator/?pli=1)
* [Google Maps Platform](https://cloud.google.com/maps-platform/)
* [Setting Up Authentication for Server to Server Production Applications](https://cloud.google.com/docs/authentication/production)
* [Service Accounts](https://cloud.google.com/iam/docs/service-accounts)
* [Understanding Service Accounts](https://cloud.google.com/iam/docs/understanding-service-accounts)
### Google Cloud SDK
* [Google Cloud SDK Documentation](https://cloud.google.com/sdk/docs/?authuser=1)
* ./google-cloud-sdk/bin/gcloud init
* gcloud init --skip-diagnostics

## Heroku
* [View Logs](https://devcenter.heroku.com/articles/logging#view-logs)

## joi
joi allows you to create blueprints or schemas for JavaScript objects (an object that stores information) to ensure validation of key information.
* [joi npm](https://www.npmjs.com/package/joi)

## Links
* [Live Agent Developer Guide](https://resources.docs.salesforce.com/sfdc/pdf/live_agent_dev_guide.pdf)
* [How Are Apps Authenticated with the Web Server OAuth Authentication Flow?](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_understanding_web_server_oauth_flow.htm)
* [Web Services Architecture](https://www.w3.org/TR/ws-arch/#introduction)
* [Swagger Editor Github](https://github.com/swagger-api/swagger-editor)
* [Configure your Node.js Applications](https://www.npmjs.com/package/config)
* [Chatbot Tech Stack](https://chatbotsmagazine.com/the-ultimate-guide-to-designing-a-chatbot-tech-stack-333eceb431da)
### Chat Apps
* [98point6](https://www.98point6.com/)

## mongoDB
* [mongoDB Atlas](https://cloud.mongodb.com/v2/5ba07910c0c6e3623d88789f#clusters)

## ngrok
* [ngrok dashboard](https://dashboard.ngrok.com/get-started)
With the fremium version, each time we run a ngrok command a new address will be created
#### Steps:
1. sudo cp ngrok /usr/local/bin
2. /usr/local/bin/ngrok authtoken tokenxxxxxx
3. /usr/local/bin/ngrok http 5000
4. /usr/local/bin/ngrok http -subdomain=xxxx 5000

## Node.js
* [Node.js Request Module Tutorial](https://blog.risingstack.com/node-hero-node-js-request-module-tutorial/)
* [An Update on ES6 Modules in Node.js](https://medium.com/the-node-js-collection/an-update-on-es6-modules-in-node-js-42c958b890c)
* Node.js operatates on a single thread event loop, using non-blocking I/O calls, allowing it to support tens of thousand concurrent connections without incurring the cost of thread context switching.

## NPM Packages
* [nodemon](https://www.npmjs.com/package/nodemon)
* [Concurrently]
* [http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware)
* npm install axios --save
* [uuid](https://www.npmjs.com/package/uuid) - npm i uuid --save
* `npm i universal-cookie --save`

### joi-password-complexity
* [joi-password-complexity](https://www.npmjs.com/package/joi-password-complexity)
* `request` - npm package removes the boilerplate code of inbuilt http package.
* `npm install concurrently --save-dev` - Run multiple commands concurrently.

## Object Oriented Programming
Four pillars of object oriented programming:
1. Encapsulation - isolate impact of changes (reduce complexity)
2. Abstraction - isolate impact of changes
3. Inheritance - eliminate redundant code
4. Polymorphism - refactor switch/case statements

## PostgreSQL
* [pgAdmin 4](http://127.0.0.1:56621/browser/)

## React
* npm install --save react-router-dom
* [HTML DOM scrollIntoView Method](https://www.w3schools.com/jsref/met_element_scrollintoview.asp)
* [Refs and the DOM](https://reactjs.org/docs/refs-and-the-dom.html)
* [Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html?no-cache=1)
* [State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)
* `componentDidUpdate` - method is called after the component is re-rendered.
* With Refs- to access DOM nodes of React elements created when rendering components.
#### Functional Components
* javascript functions
#### Class Components
* states
* lifecycle hooks (componentWillMount, componentDidMount)
* extra methods
#### Redux
When you have some piece of application state that needs to be mapped to multiple components
#### Default Components
https://reactpatterns.com/
* [State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)
#### Named Components
https://reactpatterns.com/
#### Unique sessions for visitors
1. Generate `unique id` in React frontend
2. Set the id to cookie
3. Send this id to API endpoint in backend app
4. Construct a session from global session and unique id
5. Make a call to Dialogflow with new session
#### Cards
* header
* image
* description
* link 
* price
## RESTful
* callback function is: (req, res) => {}
* use `let` identifier if you want to reset the variable later
* `app.use(express.json);` - when we call `express.json` method, the method returns a piece of middleware, and then we call `app.use` to use the middleware in the request processing timeline.
* When the server creates a new object and/or resource, it should write that in the body of the response

## Sendgrid
* [Sendgrid App on Heroku](https://app.sendgrid.com/settings/account)
* [SendGrid on Heroku Dev Center](https://devcenter.heroku.com/articles/sendgrid#node-js)
* [v3 API Node.js Code Example](https://sendgrid.com/docs/for-developers/sending-email/v3-nodejs-code-example/)
