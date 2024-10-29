# TarMini

It's an implementation based on the `ustar` format. This package only provides low-level API's.

### Usage

```ts
// packing
import { createPack, createExtract } from 'tar-mini'

const pack = createPack()

pack.add(new Uint8Array(512), {
  // options
})

pack.done()

// extracting

const extract = createExtract()

extract.on('entry', (head, file) => {
  // todo
})

pack.receiver.pipe(extract.receiver)
```

### Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/nonzzz/sponsors/sponsorkit/sponsors.svg">
    <img src="https://cdn.jsdelivr.net/gh/nonzzz/sponsors/sponsorkit/sponsors.svg"/>
  </a>
</p>

### Related

- [tar](https://www.gnu.org/software/tar/manual/html_node/Standard.html)

### LICENSE

[MIT](./LICENSE)

### Author

Kanno
