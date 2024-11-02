FROM nginx:alpine AS base
COPY ./nginx/nginx.prod.conf /etc/nginx/nginx.prod.conf
COPY ./nginx/nginx.dev.conf /etc/nginx/nginx.dev.conf

# Production
FROM base AS prod
CMD ["/bin/sh", "-c", "cp /etc/nginx/nginx.prod.conf /etc/nginx/nginx.conf && nginx -g 'daemon off;'"]

# Development
FROM base AS dev
CMD ["/bin/sh", "-c", "cp /etc/nginx/nginx.dev.conf /etc/nginx/nginx.conf && nginx -g 'daemon off;'"]
