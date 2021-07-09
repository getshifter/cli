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
* [`shifter domain:add`](#shifter-domainadd)
* [`shifter domain:attach`](#shifter-domainattach)
* [`shifter domain:delete`](#shifter-domaindelete)
* [`shifter domain:detach`](#shifter-domaindetach)
* [`shifter domain:get`](#shifter-domainget)
* [`shifter domain:list`](#shifter-domainlist)
* [`shifter domain:get-verification-code`](#shifter-get-verification-code)
* [`shifter help [COMMAND]`](#shifter-help-command)

## `shifter domain:add`

Domain registration command

```
USAGE
  $ shifter domain:add

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
  $ shifter domain:add --username USERNAME --password PASSWORD --site-id xxx-YOUR-SITE-ID-xxxx --domain test.example.com
```

_See code: [src/commands/domain/add.ts](https://github.com/getshifter/domain-cli/blob/v0.1.2/src/commands/domain/add.ts)_

## `shifter domain:attach`

Domain attach command

```
USAGE
  $ shifter domain:attach

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

_See code: [src/commands/domain/attach.ts](https://github.com/getshifter/domain-cli/blob/v0.1.2/src/commands/domain/attach.ts)_

## `shifter domain:delete`

Domain delete command

```
USAGE
  $ shifter domain:delete

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
  $ shifter domain:delete --username USERNAME --password PASSWORD --site-id xxx-YOUR-SITE-ID-xxxx  --domain 
  test.example.com
```

_See code: [src/commands/domain/delete.ts](https://github.com/getshifter/domain-cli/blob/v0.1.2/src/commands/domain/delete.ts)_

## `shifter domain:detach`

Domain detach command

```
USAGE
  $ shifter domain:detach

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
  $ shifter domain:detach --username USERNAME --password PASSWORD --site-id xxx-YOUR-SITE-ID-xxxx  --domain 
  test.example.com
```

_See code: [src/commands/domain/detach.ts](https://github.com/getshifter/domain-cli/blob/v0.1.2/src/commands/domain/detach.ts)_

## `shifter domain:get`

Domain get command

```
USAGE
  $ shifter domain:get

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

_See code: [src/commands/domain/get.ts](https://github.com/getshifter/domain-cli/blob/v0.1.2/src/commands/domain/get.ts)_


## `shifter domain:list`

Domain lists command

```
USAGE
  $ shifter domain:list

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

_See code: [src/commands/domain/list.ts](https://github.com/getshifter/domain-cli/blob/v0.1.2/src/commands/domain/list.ts)_

## `shifter domain:get-verification-code`

Domain verification code command

```
USAGE
  $ shifter domain:get-verification-code

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
  $ shifter domain:get-verification-code --username USERNAME --password PASSWORD --site-id xxx-YOUR-SITE-ID-xxxx --domain 
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
<!-- commandsstop -->
