# Installation

## Setup Jest

```bash
  yarn add jest -D

```

### With Typescript

```bash
  yarn add ts-jest @types/jest
```

```bash
  ts-jest init
```

This command will generate this file:

```js
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
};
```

## Setup Enzyme

Add three depenencies: enzyme jest-enzyme enzyme-adapter-react-\*

- Here you must typer the React's version you're using!

```bash
  yarn add enzyme jest-enzyme enzyme-adapter-react-16 -D
```

### With Typescript

```bash
  yarn add @types/enzyme @types/enzyme-adapter-react-16 -D
```

import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

Enzyme.configure({
adapter: new EnzymeAdapter()
})

## Use Webpack Global Variables

If you provide global variable for all your modules, via Webpack you need to declare
them inside the `jest.config.js` file and pass its content all over again.

your `webpack` config file:

```js
new webpack.DefinePlugin({
  APPLICATION: JSON.stringify({
    name: "to-do-list",
    version: "1.0.0",
  }),
});
```

```js
globals: {
  APPLICATION: {
    name: "to-do-list",
    version: "1.0.0",
  },
},
```

### Providing React as Global variable also on Jest

globalThis.React = require("react");

### Removing data attributes for Production

babel-plugin-react-remove-properties

## State

### Set a state

```js
const wrapper = shallow(<AppAsClass {...props} />);

wrapper.setState({ counter: 0 });
```

### Access the state

```js
const wrapper = shallow(<AppAsClass {...props} />);

wrapper.setState({ counter: 0 });
```

## Events

### Click Event

```js
const button = ...;

button.simulate('click')
```

## Get a text content of a ShallowWrapper

```js
const button = wrapper.find('[data-testid="button"]');

expect(button.text()).toContain("click here");
```
