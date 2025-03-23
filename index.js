const axios = require('axios');

axios.post('your-webhook-url', {
  message: 'what color of sea?'
})
.then(response => {
  console.log('Response from n8n:', response.data);
})
.catch(error => {
  console.error('Error sending message:', error);
});
