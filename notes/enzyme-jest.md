# Installation

## Setup Jest

```bash
  yarn add jest -D
```

### With Typescript

```bash
  yarn add ts-jest @types/jest
```

If you're using typescript you'll get some error when using global jest methods like test().

To avoid that, add:

```bash
  yarn add @types/jest -D
```

## Setup Enzyme

Add three depenencies: enzyme jest-enzyme enzyme-adapter-react-\*

- Here you must typer the React's version you're using!

```bash
  yarn add enzyme jest-enzyme enzyme-adapter-react-16 -D
```

import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

Enzyme.configure({
adapter: new EnzymeAdapter()
})
