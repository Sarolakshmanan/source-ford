# stage 1
# ngnix as base server
from nginx:latest as server
# Remove default nginx website
run rm -rf /usr/share/nginx/html/*
# copying source code to ngnix
copy dist/starter-ui /usr/share/nginx/html/
# time zone
ARG TIME_ZONE
# exposing the port
EXPOSE 80
# ngnix entry point
ENTRYPOINT ["nginx", "-g", "daemon off;"]