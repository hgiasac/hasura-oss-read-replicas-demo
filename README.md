# Hasura OSS Read replicas demo

## How to run

```sh
docker-compose up
```
Open http://localhost:3000 to see the demo.

## Project structure

- app: React webapp demo http://localhost:3000
- postgres-master: Postgres master server 
- postgres-replica: Postgres replica server 
- data: graphql-engine primary instance http://localhost:8080
- data-readonly: graphql-engine readonly instance http://localhost:8081
