# Chat-Implementation
## Table of Contents  
* [APIs](#apis)
* [Chatbot Resources](#chatbot-resources)
* [Express](#express)
* [Google](#google)
    * [Dialogflow](#dialogflow)
* [Heroku](#heroku)
* [RESTful](#restful)
* [Sendgrid](#sendgrid)
  
## Links
* [Live Agent Developer Guide](https://resources.docs.salesforce.com/sfdc/pdf/live_agent_dev_guide.pdf)
* [How Are Apps Authenticated with the Web Server OAuth Authentication Flow?](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_understanding_web_server_oauth_flow.htm)
* [Web Services Architecture](https://www.w3.org/TR/ws-arch/#introduction)
* [Swagger Editor Github](https://github.com/swagger-api/swagger-editor)
* [Configure your Node.js Applications](https://www.npmjs.com/package/config)

## Google
* [Actions on Google](https://console.actions.google.com/u/0/project/crowdart-8e66f/simulator/?pli=1)
* [Google Cloud AI Products](https://console.actions.google.com/u/0/project/crowdart-8e66f/simulator/?pli=1)
* [Google Maps Platform](https://cloud.google.com/maps-platform/)

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

## Chatbot Resources
* [Bootpages](http://www.bootpages.com/)
* [Botlist](https://botlist.co/)
* [Dashbot](https://botlist.co/)
* [Entities Overview](https://botlist.co/)

## Dialogflow
* [Rich messages](https://dialogflow.com/docs/intents/rich-messages)
* [Dialogflow Console](https://console.dialogflow.com/api-client/#/agent/c4c953cc-2d6c-43d9-9fd2-d4d15253d093/intents)

## Express
Bulding webservices on top of Node.js.  
* `export PORT=5000`
* http://localhost:5000/api/post/2018/1?sortby=name
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

## Heroku
* [View Logs](https://devcenter.heroku.com/articles/logging#view-logs)

# Sendgrid
* [Sendgrid App on Heroku](https://app.sendgrid.com/settings/account)
* [SendGrid on Heroku Dev Center](https://devcenter.heroku.com/articles/sendgrid#node-js)
* [v3 API Node.js Code Example](https://sendgrid.com/docs/for-developers/sending-email/v3-nodejs-code-example/)

## RESTful
* callback function is: (req, res) => {}
* use `let` identifier if you want to reset the variable later
* `app.use(express.json);` - when we call `express.json` method, the method returns a piece of middleware, and then we call `app.use` to use the middleware in the request processing timeline.
