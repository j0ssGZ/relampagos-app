FROM oven/bun:latest

ARG APP_DIR=frontend
WORKDIR /app/${APP_DIR}

COPY ./${APP_DIR}/package.json .
COPY ./${APP_DIR}/bun.lockb* ./

RUN bun install

COPY ./${APP_DIR} .

EXPOSE 3000 3001

CMD ["bun", "run", "dev"]