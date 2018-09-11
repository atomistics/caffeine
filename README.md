# @atomistics/caffeine

Atomic positions and numbers of the caffeine molecule.

## Install

```
npm i --save @atomistics/caffeine
```

## API

```js
const caffeine = require("@atomistics/caffeine");
```

Returns an object with the atomic positions and numbers of the caffeine molecule.

| Name               | Type        | Description                                                                            |
| ------------------ | ----------- | -------------------------------------------------------------------------------------- |
| caffeine.positions | Nx3 ndarray | An Nx3 ndarray containing the atomic positions of the caffeine molecule.               |
| caffeine.numbers   | int array   | A javascript array of length N containing the atomic numbers of the caffeine molecule. |
