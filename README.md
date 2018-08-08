#Github Repo API
Github REPO API

## REST API
List of basic routes:

Route | HTTP | Description | Attributes
--- | --- | --- | ---
/api/getrepo?user=(set github user) | GET | Get specified user repositories | 
/api/searchtopic?topic=(set topic here) | GET | Search Repositories based on specified topic |
/api/createrepo | POST | create github repo | name (string) : repo name

## Usage
create .env file contain
access_token = "7cb27cc4a3f4d58d28ffc179c5769c4c276d3fc4"

With only npm:
```
npm install
npm run dev
```

Access the API via `http://localhost:3000/api`