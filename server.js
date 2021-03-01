const http = require('http');
const url = require('url');
const port = 8000;

  const requestHandler = (request, response) => {
    
    const parsedUrl = url.parse(request.url, true);
    (parsedUrl.query.name != null ? response.end(`Hello, ${parsedUrl.query.name} from ${parsedUrl.query.city} !`) : response.end('Please provide name and city parameters'))
    console.log(url.parse)
  };


const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if (err) {
      console.error('Something bad happened');
    } else {
      console.log(`server is listening on ${port}`);
    }
  });

