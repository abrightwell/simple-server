# simple-server

This is simply just a configuration for runnint [Grunt Connect](https://github.com/gruntjs/grunt-contrib-connect).

## Usage

Place whatever files desired to be made available into the ```www-root``` directory.

```
# Install grunt if not already installed.
$> npm install -g grunt-cli

# Install grunt connect module.
$> npm install grunt-contrib-connect

# Run server.
$> grunt connect
```

This will install and run a basic HTTP server on port 3000 that is listening on all interfaces.
