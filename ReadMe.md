### Install

```shell
 npm install
```

### Up Docker Container 

```shell
 docker compose up -d
```

### Env 
create .env from .env.example


### Start Producer (who adding job)

```shell
 node producer.js
```
### Start consumer (who handle to process the job)

```shell
 node consumer.js
```

### Simulate job withou using queue

```shell
 node job-without-queue.js
```