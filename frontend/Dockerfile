FROM node:22 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build
# Production stage (Serve static files)
FROM node:alpine AS production
WORKDIR /app
COPY --from=build /app/dist .
EXPOSE 4173
CMD ["npx", "serve", "-s", "."]
