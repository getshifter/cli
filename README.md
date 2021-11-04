@shifter/cli
============

Shifter command line interface

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@shifter/cli.svg)](https://npmjs.org/package/@shifter/cli)
[![Downloads/week](https://img.shields.io/npm/dw/@shifter/cli.svg)](https://npmjs.org/package/@shifter/cli)
[![License](https://img.shields.io/npm/l/@shifter/cli.svg)](https://github.com/getshifter/cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @shifter/cli
$ shifter COMMAND
running command...
$ shifter (-v|--version|version)
@shifter/cli/0.1.3 darwin-arm64 node-v17.0.1
$ shifter --help [COMMAND]
USAGE
  $ shifter COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`shifter dev:start [FILE]`](#shifter-devstart-file)
* [`shifter hello [FILE]`](#shifter-hello-file)
* [`shifter help [COMMAND]`](#shifter-help-command)

## `shifter dev:start [FILE]`

describe the command here

```
USAGE
  $ shifter dev:start [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/dev/start.ts](https://github.com/getshifter/cli/blob/v0.1.3/src/commands/dev/start.ts)_

## `shifter hello [FILE]`

describe the command here

```
USAGE
  $ shifter hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ shifter hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/getshifter/cli/blob/v0.1.3/src/commands/hello.ts)_

## `shifter help [COMMAND]`

display help for shifter

```
USAGE
  $ shifter help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.3/src/commands/help.ts)_
<!-- commandsstop -->
