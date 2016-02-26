# Experimenting with react

This is an intentionally overly complicated take on the [Thinking in React](https://facebook.github.io/react/docs/thinking-in-react.html) tutorial in the React quick start guide, fragmented into more components to experiment with different aspects of [React](https://facebook.github.io/react).

To run [dev server](https://webpack.github.io/docs/webpack-dev-server.html)
```shell
make dev
```

To build with [webpack module bundler](https://webpack.github.io).
```shell
make build
```

## Styles
Creating modularized styles with `styles-loader` + `css-loader` + `sass-loader` + `postcss-loader`.

## Tests
Testing with mocha + some magic (inspired by [react-test-boilerplate](https://github.com/algolia/react-test-boilerplate)).

To run tests
```shell
make test
```
To run tests with watch
```shell
make test-watch
```