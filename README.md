@shifter/domain-cli
===================

Simple Shifter domain management cli

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@shifter/domain-cli.svg)](https://npmjs.org/package/@shifter/domain-cli)
[![Downloads/week](https://img.shields.io/npm/dw/@shifter/domain-cli.svg)](https://npmjs.org/package/@shifter/domain-cli)
[![License](https://img.shields.io/npm/l/@shifter/domain-cli.svg)](https://github.com/getshifter/domain-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @shifter/domain-cli
$ shifter COMMAND
running command...
$ shifter (-v|--version|version)
@shifter/domain-cli/0.1.2 darwin-x64 node-v14.16.1
$ shifter --help [COMMAND]
USAGE
  $ shifter COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`shifter add`](#shifter-add)
* [`shifter attach`](#shifter-attach)
* [`shifter delete`](#shifter-delete)
* [`shifter detach`](#shifter-detach)
* [`shifter domain:list [FILE]`](#shifter-domainlist-file)
* [`shifter get`](#shifter-get)
* [`shifter get-verification-code`](#shifter-get-verification-code)
* [`shifter help [COMMAND]`](#shifter-help-command)
* [`shifter list`](#shifter-list)

## `shifter add`

Domain registration command

```
USAGE
  $ shifter add

OPTIONS
  -D, --domain=domain      target domain name (eg. example.com)
  -S, --site-id=site-id    Shifter site id
  -U, --username=username  Shifter username
  -h, --help               show CLI help
  -v, --version            show CLI version
  --development            Work as development mode (Only for Shifter developer team)
  --verbose                Show verbose

EXAMPLES
  Simple usage
  $ shifter add --username USERNAME --password PASSWORD --site-id xxx-YOUR-SITE-ID-xxxx --domain test.example.com
```

_See code: [src/commands/add.ts](https://github.com/getshifter/domain-cli/blob/v0.1.2/src/commands/add.ts)_

## `shifter attach`

Domain attach command

```
USAGE
  $ shifter attach

OPTIONS
  -D, --domain=domain      Target domain name (eg. www.example.com)
  -S, --site-id=site-id    Shifter site id
  -U, --username=username  Shifter username
  -h, --help               show CLI help
  -v, --version            show CLI version
  --development            Work as development mode (Only for Shifter developer team)
  --no-shifter-cdn         If you using another CDN like Netlify or own CloudFront etc... Please set the flag.
  --verbose                Show verbose

EXAMPLES
  Simple usage
  $ shifter attach --username USERNAME --password PASSWORD --site-id xxx-YOUR-SITE-ID-xxxx  --domain test.example.com

    Use own CDN (Netlify or own CloudFront etc...)
  $ shifter attach --username USERNAME --password PASSWORD --site-id xxx-YOUR-SITE-ID-xxxx  --domain test.example.com 
  --no-shifter-cdn
```

_See code: [src/commands/attach.ts](https://github.com/getshifter/domain-cli/blob/v0.1.2/src/commands/attach.ts)_

## `shifter delete`

Domain delete command

```
USAGE
  $ shifter delete

OPTIONS
  -D, --domain=domain      Target domain name (eg. www.example.com)
  -S, --site-id=site-id    Shifter site id
  -U, --username=username  Shifter username
  -h, --help               show CLI help
  -v, --version            show CLI version
  --development            Work as development mode (Only for Shifter developer team)
  --verbose                Show verbose

EXAMPLES
  Simple usage
  $ shifter delete --username USERNAME --password PASSWORD --site-id xxx-YOUR-SITE-ID-xxxx  --domain test.example.com
```

_See code: [src/commands/delete.ts](https://github.com/getshifter/domain-cli/blob/v0.1.2/src/commands/delete.ts)_

## `shifter detach`

Domain detach command

```
USAGE
  $ shifter detach

OPTIONS
  -D, --domain=domain      Target domain name (eg. www.example.com)
  -S, --site-id=site-id    Shifter site id
  -U, --username=username  Shifter username
  -h, --help               show CLI help
  -v, --version            show CLI version
  --development            Work as development mode (Only for Shifter developer team)
  --no-shifter-cdn         If you using another CDN like Netlify or own CloudFront etc... Please set the flag.
  --verbose                Show verbose

EXAMPLE
  $ shifter detach --username USERNAME --password PASSWORD --site-id xxx-YOUR-SITE-ID-xxxx  --domain test.example.com
```

_See code: [src/commands/detach.ts](https://github.com/getshifter/domain-cli/blob/v0.1.2/src/commands/detach.ts)_

## `shifter domain:list [FILE]`

describe the command here

```
USAGE
  $ shifter domain:list [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/domain/list.ts](https://github.com/getshifter/domain-cli/blob/v0.1.2/src/commands/domain/list.ts)_

## `shifter get`

Domain get command

```
USAGE
  $ shifter get

OPTIONS
  -D, --domain=domain      target domain name (eg. example.com)
  -S, --site-id=site-id    Shifter site id
  -U, --username=username  Shifter username
  -h, --help               show CLI help
  -v, --version            show CLI version
  --development            Work as development mode (Only for Shifter developer team)
  --verbose                Show verbose

EXAMPLES
  Simple usage
  $ shifter get --username USERNAME --password PASSWORD --site-id xxx-YOUR-SITE-ID-xxxx --domain test.example.com
```

_See code: [src/commands/get.ts](https://github.com/getshifter/domain-cli/blob/v0.1.2/src/commands/get.ts)_

## `shifter get-verification-code`

Domain verification code command

```
USAGE
  $ shifter get-verification-code

OPTIONS
  -D, --domain=domain      target domain name (eg. example.com)
  -S, --site-id=site-id    Shifter site id
  -U, --username=username  Shifter username
  -h, --help               show CLI help
  -v, --version            show CLI version
  --development            Work as development mode (Only for Shifter developer team)
  --verbose                Show verbose

EXAMPLES
  Simple usage
  $ shifter get-verification-code --username USERNAME --password PASSWORD --site-id xxx-YOUR-SITE-ID-xxxx --domain 
  test.example.com
```

_See code: [src/commands/get-verification-code.ts](https://github.com/getshifter/domain-cli/blob/v0.1.2/src/commands/get-verification-code.ts)_

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

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `shifter list`

Domain lists command

```
USAGE
  $ shifter list

OPTIONS
  -S, --site-id=site-id    Shifter site id
  -U, --username=username  Shifter username
  -h, --help               show CLI help
  -v, --version            show CLI version
  --development            Work as development mode (Only for Shifter developer team)
  --verbose                Show verbose

EXAMPLES
  Simple usage
  $ shifter list --username USERNAME --password PASSWORD --site-id xxx-YOUR-SITE-ID-xxxx
```

_See code: [src/commands/list.ts](https://github.com/getshifter/domain-cli/blob/v0.1.2/src/commands/list.ts)_
<!-- commandsstop -->
