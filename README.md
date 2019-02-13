## Introduction

Reproduction for https://github.com/prisma/prisma/issues/4036

## To Reproduce

1. deploy the prisma server
2. start the graphql yoga server using index.js
3. create a new user, grab it's id
4. run the following mutation in yoga server (change the id)

```graphql
mutation {
  updateUser(
    id: "5c641db0a7b11b00071d1a71"
    data: {
      times: {
        create: [{ hour: 10, minute: 0 }]
        update: [{ where: { id: "yyy" }, data: { hour: 12, minute: 30 } }]
      }
    }
  ) {
    id
    times {
      id
      hour
      minute
    }
  }
}
```
