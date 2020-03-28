## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start
k
# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


## Notes

Done by following [this](https://youtu.be/wqhNoDE6pb4) tutorial. TBC 41:49

### Controllers

Handle requests and return responses. Delegate more complex tasks to providers.
```
$ nest g controller items
```

**DTO** is an object that defines how data is sent over the network.

### Decorator
Stuff with @. Used for meta data?.

### Service

```
$ nest g service cats
```

### Module
Classes with @Module. Used to build application graph.
```
$ nest g module cat
```
`app.module.ts` is like a meeting place for [everything](https://youtu.be/wqhNoDE6pb4?t=2295)

### Provider
Can inject dependencies. A class with the @Injectable thingy.

### Database