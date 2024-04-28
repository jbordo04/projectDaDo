# Project of Dice Game Table

A funny table game with 2 dice, where 2 players takes turns throwing both dice. the first player to roll a total of 7 wins!

## What features can we expect?

- Class Code

- Validation Routes with JWT

- Unit Test with Jest

- Hexagonal Architecture

- Prisma ORM

## How to setup?

For a better experience, this project was made with docker features, you can install it <a href='https://www.docker.com/products/docker-desktop/'>here</a>.

After that, we need to create a connection and synchronize it with our Prisma ORM. Just copy the following command into your terminal.

```sh
npm i
npm run docker
npm run generate
```

Now just lets check it out with some virtual Client like POSTMAN, INSOMNIA or our best extension ThunderCLient VSC, but before run our server.

```sh
npm run build
```

## Testing?

To prevent any issue and ensure that all functions works as expected, we need to test every function or route. You can choose to run all or a subset of the tests, whichever you prefer.

```sh
npm run test
```

```sh
npm run test:players
```

```sh
npm run test:games
```

## API Documentation??

We'll use ThunderClient or a free-alternative-to-share Rest Client extension of VSC

For Rest Client :

- In `api.http` will have all queries and its properties

- Data `setting.json` must be in general setting file of VSC

- To get value of {{ value }}, press Ctr + shitf + P => Rest Client: Switch Environment => local
