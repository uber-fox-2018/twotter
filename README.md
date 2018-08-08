# twotter

List of routes

Route | HTTP | Description
------------ | ------------- | --------------|
 /api/me | GET | Get user repos based on Token
 /api/search-repo-name/:repo_name | GET | Search repos by name
 /api/me/create-repo/:repo_name| POST | Create a repo

## Usage

```
npm install
npm start
```

**Promise Version of request**

request (npm) got a promise version that is based by native promise.

[request-promise-native on npm](https://github.com/request/request-promise-native)

also check out other versions of promise-based request:

[request-promise (by bluebird)](https://www.npmjs.com/package/request-promise)