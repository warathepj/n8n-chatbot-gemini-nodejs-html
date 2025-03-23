# Webhook Message Sender

A simple Node.js application that sends messages to webhooks using Axios HTTP client.

## Features

- Send POST requests to webhooks
- Handle responses and errors
- Uses Axios for HTTP requests

## Installation

1. Clone this repository
2. Install dependencies:
```bash
npm install
```

## Usage

1. Update the webhook URL in `index.js` with your actual webhook endpoint:
```javascript
axios.post('your-webhook-url', {
  message: 'what color of sea?'
})
```

2. Run the application:
```bash
node index.js
```

## Dependencies

- [axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and Node.js

## Error Handling

The application includes basic error handling for failed requests:
- Successful responses are logged to the console
- Errors are caught and logged with details

## License

MIT

