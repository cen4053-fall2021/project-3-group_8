FROM node:16
WORKDIR /docker-action
# COPY PACKAGE JSON
# RUN NPM INSTALL
COPY WriteFile.js /docker-action
ENTRYPOINT ["/docker-action/WriteFile.js"]