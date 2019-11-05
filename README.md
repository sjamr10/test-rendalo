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

## How to run the tests

```bash
docker-compose up --build mongo test-rendalo-test
```

## Comments

There are a couple of bad things here, particularly in the tests; in the real world it shouldn't connect to mongo there, it could use mocks or something like that. I'm doing that just for the sake of time and for the purposes of this test.

## License

[MIT](https://choosealicense.com/licenses/mit/)
