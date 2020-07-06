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
$ shifter-domain COMMAND
running command...
$ shifter-domain (-v|--version|version)
@shifter/domain-cli/0.1.0 darwin-x64 node-v12.9.1
$ shifter-domain --help [COMMAND]
USAGE
  $ shifter-domain COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`shifter-domain abstract.command`](#shifter-domain-abstractcommand)
* [`shifter-domain add`](#shifter-domain-add)
* [`shifter-domain attach`](#shifter-domain-attach)
* [`shifter-domain get`](#shifter-domain-get)
* [`shifter-domain get-verification-code`](#shifter-domain-get-verification-code)
* [`shifter-domain help [COMMAND]`](#shifter-domain-help-command)
* [`shifter-domain list`](#shifter-domain-list)

## `shifter-domain abstract.command`

```
USAGE
  $ shifter-domain abstract.command
```

_See code: [src/commands/abstract.command.ts](https://github.com/getshifter/domain-cli/blob/v0.1.0/src/commands/abstract.command.ts)_

## `shifter-domain add`

Domain registration command

```
USAGE
  $ shifter-domain add

OPTIONS
  -D, --domain=domain      target domain name (eg. example.com)
  -S, --site-id=site-id    Shifter site id
  -U, --username=username  Shifter username
  -h, --help               show CLI help
  -v, --version            show CLI version
  --development            Work as development mode (Only for Shifter developer team)
  --verbose                Show verbose

EXAMPLES
  Simply usage
  $ shifter-domain add --username USERNAME --password PASSWORD --site-id xxx-YOUR-SITE-ID-xxxx --domain test.example.com
```

_See code: [src/commands/add.ts](https://github.com/getshifter/domain-cli/blob/v0.1.0/src/commands/add.ts)_

## `shifter-domain attach`

Domain attach command

```
USAGE
  $ shifter-domain attach

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
  Simply usage
  $ shifter-domain attach --username USERNAME --password PASSWORD --site-id xxx-YOUR-SITE-ID-xxxx  --domain 
  test.example.com

    Use own CDN (Netlify or own CloudFront etc...)
  $ shifter-domain attach --username USERNAME --password PASSWORD --site-id xxx-YOUR-SITE-ID-xxxx  --domain 
  test.example.com --no-shifter-cdn
```

_See code: [src/commands/attach.ts](https://github.com/getshifter/domain-cli/blob/v0.1.0/src/commands/attach.ts)_

## `shifter-domain get`

Domain get command

```
USAGE
  $ shifter-domain get

OPTIONS
  -D, --domain=domain      target domain name (eg. example.com)
  -S, --site-id=site-id    Shifter site id
  -U, --username=username  Shifter username
  -h, --help               show CLI help
  -v, --version            show CLI version
  --development            Work as development mode (Only for Shifter developer team)
  --verbose                Show verbose

EXAMPLES
  Simply usage
  $ shifter-domain get --username USERNAME --password PASSWORD --site-id xxx-YOUR-SITE-ID-xxxx --domain test.example.com
```

_See code: [src/commands/get.ts](https://github.com/getshifter/domain-cli/blob/v0.1.0/src/commands/get.ts)_

## `shifter-domain get-verification-code`

Domain verification code command

```
USAGE
  $ shifter-domain get-verification-code

OPTIONS
  -D, --domain=domain      target domain name (eg. example.com)
  -S, --site-id=site-id    Shifter site id
  -U, --username=username  Shifter username
  -h, --help               show CLI help
  -v, --version            show CLI version
  --development            Work as development mode (Only for Shifter developer team)
  --verbose                Show verbose

EXAMPLES
  Simply usage
  $ shifter-domain get-verification-code --username USERNAME --password PASSWORD --site-id xxx-YOUR-SITE-ID-xxxx 
  --domain test.example.com
```

_See code: [src/commands/get-verification-code.ts](https://github.com/getshifter/domain-cli/blob/v0.1.0/src/commands/get-verification-code.ts)_

## `shifter-domain help [COMMAND]`

display help for shifter-domain

```
USAGE
  $ shifter-domain help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.1.0/src/commands/help.ts)_

## `shifter-domain list`

Domain lists command

```
USAGE
  $ shifter-domain list

OPTIONS
  -S, --site-id=site-id    Shifter site id
  -U, --username=username  Shifter username
  -h, --help               show CLI help
  -v, --version            show CLI version
  --development            Work as development mode (Only for Shifter developer team)
  --verbose                Show verbose

EXAMPLES
  Simply usage
  $ shifter-domain list --username USERNAME --password PASSWORD --site-id xxx-YOUR-SITE-ID-xxxx
```

_See code: [src/commands/list.ts](https://github.com/getshifter/domain-cli/blob/v0.1.0/src/commands/list.ts)_
<!-- commandsstop -->
