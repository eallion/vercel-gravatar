# Vercel Gravatar Proxy for CHN users

> API: https://vercel-gravatar.vercel.app/avatar/

### Deploy

```bash
git clone https://github.com/eallion/vercel-gravatar.git

cd vercel-gravatar

### Login
# vercel login

### Deploy
vercel deploy

```

### Demo

- https://gravatar.eallion.com/avatar/171e4c30959e8c077a6c58b958624b31 # Custom Domain
- https://vercel-gravatar.vercel.app/avatar/171e4c30959e8c077a6c58b958624b31

### CORS Header

`api/gravatar.js`

```js
    new_response_headers.set("access-control-allow-origin", "https://www.eallion.com");
```
