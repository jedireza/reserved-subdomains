# reserved-subdomains

A list of names that should be reserved in multitenant apps.

## Install

```bash
$ npm install reserved-subdomains
```


## API reference

- [Properties](#properties)
  - [`names`](#names)
  - [`nameMap`](#namemap)
  - [`patterns`](#patterns)
  - [`patternsRegex`](#patternsregex)
- [Methods](#methods)
  - [`isNotValid(name)`](#isnotvalidname)
  - [`isValid(name)`](#isvalidname)

### Properties

#### `names`

An array of strings. Ex: `['www', 'ftp', 'mail', ...]`.

#### `nameMap`

An object where keys are names. Ex: `{ www: true, ftp: true, mail: true, ...}`.

#### `patterns`

An array of regular expression strings. Ex: `['ww[a-z0-9-]+', 'ftp[0-9]+', 'mail[0-9]+', ...]`.

#### `patternsRegex`

An array of regular expression objects. Ex: `[/ww[a-z0-9-]+/, /ftp[0-9]+/, /mail[0-9]+/, ...]`.

### Methods

#### `isNotValid(name)`

Returns `true` if the name _is not_ valid where:

- `name` - the name to test.

#### `isValid(name)`

Returns `true` if the name _is_ valid where:

- `name` - the name to test.


## Inspired by

https://github.com/nkkollaw/reserved-subdomains

## License

MIT
