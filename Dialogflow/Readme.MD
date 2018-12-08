# Dining Out
## Contexts
Connect intents - Contexts represent the current context of a user's request. This is helpful for differentiating phrases which may be vague or have different meanings depending on the user’s preferences, geographic location, the current page in an app, or the topic of conversation. Contexts can be used to structure non-linear conversations. 
## Events
Trigger the intent from non-verbal signals - Events allow you to invoke an intent based on a non-verbal signal, such as a button click, or the start of a new conversation with a bot. Events can be used by external services to trigger Dialogflow intents, for example the Google Assistant's built-in intents.

## Actions and Parameters
[Extract the action and parameter](https://dialogflow.com/docs/intents/actions-parameters) - Parameters are specific values extracted from a user's request when entities are matched. The values captured by parameters can be used in fulfillment, or in building a response. If you mark parameters as required, Dialogflow will prompt the user if their values were not extracted from their initial request.



## Default Welcome Intent
#### Events
* Welcome
#### Training Phrases
* Hey
* Hello
* hi
#### Responses
* Hi! I can help you to find a nice place to eat. Tell me what are you looking for?
* Hello! I can help you to find a nice place to eat. Tell me what are you looking for?
* Good day! I can help you to find a nice place to eat. Tell me what are you looking for?
* Greetings! I can help you to find a nice place to eat. Tell me what are you looking for?

