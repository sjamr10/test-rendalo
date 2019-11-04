# Rendalo test

Test for Rendalo hiring process

## How to run the app

You need to have the latest version of [Docker](https://www.docker.com/get-started) and [Docker Compose](https://docs.docker.com/compose) installed.
Then run:

```bash
docker-compose up --build mongo test-rendalo-prod
```

Then you can test the routes on localhost on port 3003.
i.e:
http://localhost:3003/api/people

## License

[MIT](https://choosealicense.com/licenses/mit/)
