# Stage 1: Build static assets
FROM node:22-alpine AS builder

WORKDIR /app

# Disable Astro telemetry for CI/container builds
ENV ASTRO_TELEMETRY_DISABLED=1 \
    NODE_ENV=production

# Install dependencies using lockfile
COPY package.json package-lock.json ./
RUN npm ci

# Copy application source code
COPY . .

# Compile static distribution bundle
RUN npm run build

# Stage 2: Minimalist production web server
FROM nginx:alpine

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy compiled static files
COPY --from=builder /app/dist /usr/share/nginx/html

# Lightweight healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/healthz || exit 1

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
