# Modern Grayscale Chatbot with N8N & Gemini Integration

A sleek Node.js web application featuring a modern grayscale chat interface that connects to N8N workflows powered by Google's Gemini LLM for intelligent conversations.

## Features

- 🎨 Modern grayscale UI with responsive design
- 💬 Real-time chat interface
- 🔄 Webhook integration with N8N
- 🤖 Gemini LLM-powered responses
- 🔒 Environment variable configuration

## Prerequisites

- Node.js (v12 or higher)
- N8N instance with Gemini integration
- Webhook URL from your N8N workflow

## Installation

1. Clone the repository:

```bash
git clone https://github.com/warathepj/n8n-chatbot-gemini-nodejs-html.git
cd n8n-chatbot-gemini-nodejs-html
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory:

```
PORT=3000
WEBHOOK_URL=your_n8n_webhook_url_here
```

## Configuration

### N8N Webhook Setup

1. Create a new workflow in N8N
2. Add an HTTP Trigger node as your webhook entry point
3. Configure Gemini LLM node in your workflow
4. Connect the workflow to process incoming messages and return responses
5. Copy the webhook URL and add it to your `.env` file

## Usage

1. Start the server:

```bash
node index.js
```

2. Open your browser and navigate to:

```
http://localhost:3000
```

3. Start chatting with the Gemini-powered bot through the interface

## Project Structure

```
├── public/
│   └── index.html      # Frontend chat interface
├── index.js            # Express server and webhook handling
├── .env                # Environment variables
├── package.json        # Project dependencies
└── README.md          # Project documentation
```

## API Endpoints

- `POST /api/send-message`
  - Accepts JSON payload with a `message` field
  - Forwards message to N8N webhook
  - Returns response from the Gemini LLM

## Environment Variables

- `PORT`: Server port (default: 3000)
- `WEBHOOK_URL`: N8N webhook URL for the Gemini workflow

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Express.js](https://expressjs.com/) - Web framework
- [N8N](https://n8n.io/) - Workflow automation
- [Google Gemini](https://deepmind.google/technologies/gemini/) - Large Language Model
- [Axios](https://axios-http.com/) - HTTP client
