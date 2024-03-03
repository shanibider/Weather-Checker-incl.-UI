FROM nginx:alpine

RUN apk add --no-cache nodejs npm

COPY views/index.ejs /usr/share/nginx/html/
COPY index.js /usr/share/nginx/html/

EXPOSE 80

CMD ["sh", "-c", "node -e \"const ejs = require('ejs'); const fs = require('fs'); const rendered = ejs.render(fs.readFileSync('/usr/share/nginx/html/index.ejs', 'utf8')); fs.writeFileSync('/usr/share/nginx/html/index.html', rendered);\" && nginx -g 'daemon off;'"]
