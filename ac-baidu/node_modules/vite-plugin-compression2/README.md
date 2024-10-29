<p align="center">
<img src="https://socialify.git.ci/nonzzz/vite-plugin-compression/image?description=1&font=KoHo&language=1&logo=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F65625612%3Fs%3D200%26v%3D4&name=1&owner=1&pattern=Solid&theme=Auto" width="640" height="320" />
</p>

[![codecov](https://codecov.io/gh/nonzzz/vite-plugin-compression/branch/master/graph/badge.svg?token=NG4475OP6B)](https://codecov.io/gh/nonzzz/vite-compression-plugin)

## Install

```bash
$ yarn add vite-plugin-compression2 -D

# or

$ npm install vite-plugin-compression2 -D
```

## Usage

```js
import { defineConfig } from 'vite'

import { compression } from 'vite-plugin-compression2'

export default defineConfig({
  plugins: [
    // ...your plugin
    compression()
    // If you want to create a tarball archive you can import tarball plugin from this package and use
    // after compression.
  ]
})
```

## Options

| params                 | type                                          | default                                                      | description                                                                                |
| ---------------------- | --------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `include`              | `string \| RegExp \| Array<string \| RegExp>` | `/\.(html\|xml\|css\|json\|js\|mjs\|svg\|yaml\|yml\|toml)$/` | Include all assets matching any of these conditions.                                       |
| `exclude`              | `string \| RegExp \| Array<string \| RegExp>` | `-`                                                          | Exclude all assets matching any of these conditions.                                       |
| `threshold`            | `number`                                      | `0`                                                          | Only assets bigger than this size are processed (in bytes)                                 |
| `algorithm`            | `string\| function`                           | `gzip`                                                       | The compression algorithm                                                                  |
| `compressionOptions`   | `Record<string,any>`                          | `{}`                                                         | Compression options for `algorithm`(details see `zlib module`)                             |
| `deleteOriginalAssets` | `boolean`                                     | `false`                                                      | Whether to delete the original assets or not                                               |
| `skipIfLargerOrEqual`  | `boolean`                                     | `true`                                                       | Whether to skip the compression if the result is larger than or equal to the original file |
| `filename`             | `string`                                      | `[path][base].gz`                                            | The target asset filename                                                                  |

## Q & A

[FAQ](./Q&A.md)

### Others

- If you want to analysis your bundle assets. Maybe you can try [vite-bundle-analyzer](https://github.com/nonzzz/vite-bundle-analyzer)

- `tarball` option `dest` means to generate a tarball somewhere

- `tarball` is based on the `ustar`. It should be compatible with all popular tar distributions out there (gnutar, bsdtar etc)

### Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/nonzzz/sponsors/sponsorkit/sponsors.svg">
    <img src="https://cdn.jsdelivr.net/gh/nonzzz/sponsors/sponsorkit/sponsors.svg"/>
  </a>
</p>

### LICENSE

[MIT](./LICENSE)

### Author

Kanno
