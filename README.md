# @greedybear/gb-ui

GreedyBear frontend components library. Built on React.js + reactstrap + more. Fork of [certego/certego-ui](https://github.com/certego/certego-ui), used by the [GreedyBear](https://github.com/GreedyBear-Project/GreedyBear) project.

Not published to npm. Consume this repo as a git dependency from `package.json`, e.g.:

```json
"@greedybear/gb-ui": "github:GreedyBear-Project/gb-ui#<commit-or-tag>"
```

## Documentation

### Use local build of `gb-ui` with hot-reload (for faster development)

You can configure your local development environment in a way that any change in the `gb-ui` directory will trigger a new build which, in turn, will trigger a new build of your project. This will save you a lot of development time and headache.

- Clone the [gb-ui](https://github.com/GreedyBear-Project/gb-ui) repository if you haven't already.

```bash
$ git clone git@github.com:GreedyBear-Project/gb-ui.git /home/user/gb-ui
```

- Install dependencies and start local dev server,

```bash
/home/user/gb-ui$ npm install
/home/user/gb-ui$ npm start
```

- In your other project that uses `gb-ui`, open the `package.json` file and modify under `"dependencies"` to `"@greedybear/gb-ui": "/home/user/gb-ui"`.
- Now re-install dependencies and start local dev server,

```bash
/home/user/gb-ui$ npm install
/home/user/gb-ui$ npm start
```

### Start example project

- Open a terminal and start local dev server for `gb-ui`,

```bash
/home/user/gb-ui$ npm start
```

- Open another terminal and start local dev server for the `gb-ui/example` app,

```bash
/home/user/gb-ui/example$ npm install
/home/user/gb-ui/example$ npm start
```

- The example application will be served on http://localhost:3000/.


### Shipping changes

No npm publishing. Merge to `main`, then point the GreedyBear `package.json` at the new commit / tag. The `version` field in `package.json` is decorative.

## License

MIT © [GreedyBear Project](https://github.com/GreedyBear-Project)
