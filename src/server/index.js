const fs = require('fs');
const path = require('path');
const mime = require('mime-types');
const http = require('http');
const config = require('../config');

const PORT = process.env.PORT || config.APP_PORT;

/*
  http + SSL SERVER
*/
const server = http.createServer();

const serverRoot = 'dist/web';

/* eslint-disable-next-line */
server.on('error', err => console.error(new Error(err)));
/* eslint-disable-next-line */
server.on('socketError', err => console.error(new Error(err)));
/*
  HANDLING WITH ALL REQUESTS
*/
server.on('request', (request, response) => {
  const reqPath = request.url;
  const onlyPath = reqPath.includes('?')
    ? reqPath.substr(0, reqPath.indexOf('?'))
    : reqPath;
  const fileName = onlyPath === '/' ? '/index.html' : onlyPath;
  const requestedPath = path.join(serverRoot, fileName);
  const responseMimeType = mime.lookup(requestedPath);

  if (request.headers['x-forwarded-proto'] === 'http') {
    // eslint-disable-next-line no-console
    console.log(
      `Redirecting ${
        request.headers.host
      } to HTTPS because of x-forwarded-proto: ${
        request.headers['x-forwarded-proto']
      } - ${request.url}`
    );
    response.writeHead(301, {
      Location: `https://${request.headers.host}${request.url}`,
      'Cache-Control': 'public',
      Expires: new Date(Date.now() + 60 * 1000).toUTCString(),
    });
    response.end();
    return false;
  }

  const fullPath = fs.existsSync(requestedPath)
    ? requestedPath
    : path.join(serverRoot, 'index.html');

  const fileStats = fs.statSync(fullPath);
  const readStream = fs.createReadStream(fullPath);

  const responseOptions = {
    'content-length': fileStats.size,
    'content-type': responseMimeType,
    'cache-control': 'public',
    expires: new Date(Date.now() + 60 * 1000).toUTCString(),
  };

  response.writeHead(200, responseOptions);
  readStream.pipe(response);

  readStream.on('error', err => {
    // eslint-disable-next-line no-console
    console.error(new Error(err));
    response.writeHead(404);
    response.end();
  });
  return true;
});

server.listen(PORT, () => {
  /* eslint-disable-next-line */
  console.log(`Server running on port ${PORT}`);
});
