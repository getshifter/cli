@shifter/cli
===================

The Shifter Command Line Interface (CLI) allows you to create, develop, and deploy modern WordPress sites from the terminal.

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
@shifter/cli/0.1.2 darwin-x64 node-v14.16.1
$ shifter --help [COMMAND]
USAGE
  $ shifter COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`shifter artifacts:build`](#shifter-artifactsbuild)
* [`shifter artifacts:list`](#shifter-artifactslist)
* [`shifter artifacts:status`](#shifter-artifactsstatus)
* [`shifter domain:add`](#shifter-domainadd)
* [`shifter domain:attach`](#shifter-domainattach)
* [`shifter domain:delete`](#shifter-domaindelete)
* [`shifter domain:detach`](#shifter-domaindetach)
* [`shifter domain:get`](#shifter-domainget)
* [`shifter domain:get-verification-code`](#shifter-domainget-verification-code)
* [`shifter domain:list`](#shifter-domainlist)
* [`shifter help [COMMAND]`](#shifter-help-command)
* [`shifter sites:create`](#shifter-sitescreate)
* [`shifter sites:delete`](#shifter-sitesdelete)
* [`shifter sites:describe`](#shifter-sitesdescribe)
* [`shifter sites:list`](#shifter-siteslist)
* [`shifter sites:start`](#shifter-sitesstart)

## `shifter artifacts:build`

Artifacts build command

```
USAGE
  $ shifter artifacts:build

OPTIONS
  -S, --site-id=site-id    Shifter site id
  -U, --username=username  Shifter username
  -h, --help               show CLI help
  -v, --version            show CLI version
  --development            Work as development mode (Only for Shifter developer team)
  --verbose                Show verbose

EXAMPLES
  Simple usage
  $ shifter artifacts:build --username USERNAME --password PASSWORD --site-id xxx-YOUR-SITE-ID-xxxx
```

_See code: [src/commands/artifacts/build.ts](https://github.com/getshifter/cli/blob/main/src/commands/artifacts/build.ts)_

## `shifter artifacts:list`

Artifacts list command

```
USAGE
  $ shifter artifacts:list

OPTIONS
  -S, --site-id=site-id    Shifter site id
  -U, --username=username  Shifter username
  -h, --help               show CLI help
  -v, --version            show CLI version
  --development            Work as development mode (Only for Shifter developer team)
  --verbose                Show verbose

EXAMPLES
  Simple usage
  $ shifter artifacts:list --username USERNAME --password PASSWORD --site-id xxx-YOUR-SITE-ID-xxxx
```

_See code: [src/commands/artifacts/list.ts](https://github.com/getshifter/cli/blob/main/src/commands/artifacts/list.ts)_

## `shifter artifacts:status`

Artifacts status command

```
USAGE
  $ shifter artifacts:status

OPTIONS
  -S, --site-id=site-id    Shifter site id
  -U, --username=username  Shifter username
  -h, --help               show CLI help
  -v, --version            show CLI version
  --development            Work as development mode (Only for Shifter developer team)
  --verbose                Show verbose

EXAMPLES
  Simple usage
  $ shifter artifacts:status --username USERNAME --password PASSWORD --site-id xxx-YOUR-SITE-ID-xxxx
```

_See code: [src/commands/artifacts/status.ts](https://github.com/getshifter/cli/blob/main/src/commands/artifacts/status.ts)_

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

_See code: [src/commands/domain/add.ts](https://github.com/getshifter/cli/blob/main/src/commands/domain/add.ts)_

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
  $ shifter domain:attach --username USERNAME --password PASSWORD --site-id xxx-YOUR-SITE-ID-xxxx  --domain test.example.com

    Use own CDN (Netlify or own CloudFront etc...)
  $ shifter domain:attach --username USERNAME --password PASSWORD --site-id xxx-YOUR-SITE-ID-xxxx  --domain test.example.com 
  --no-shifter-cdn
```

_See code: [src/commands/domain/attach.ts](https://github.com/getshifter/cli/blob/main/src/commands/domain/attach.ts)_

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

_See code: [src/commands/domain/delete.ts](https://github.com/getshifter/cli/blob/main/src/commands/domain/delete.ts)_

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

_See code: [src/commands/domain/detach.ts](https://github.com/getshifter/cli/blob/main/src/commands/domain/detach.ts)_

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
  $ shifter domain:get --username USERNAME --password PASSWORD --site-id xxx-YOUR-SITE-ID-xxxx --domain test.example.com
```

_See code: [src/commands/domain/get.ts](https://github.com/getshifter/cli/blob/main/src/commands/domain/get.ts)_

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
  $ shifter domain:get-verification-code --username USERNAME --password PASSWORD --site-id xxx-YOUR-SITE-ID-xxxx 
  --domain test.example.com
```

_See code: [src/commands/domain/get-verification-code.ts](https://github.com/getshifter/cli/blob/main/src/commands/domain/get-verification-code.ts)_

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
  $ shifter domain:list --username USERNAME --password PASSWORD --site-id xxx-YOUR-SITE-ID-xxxx
```

_See code: [src/commands/domain/list.ts](https://github.com/getshifter/cli/blob/main/src/commands/domain/list.ts)_

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

## `shifter sites:create`

Create a new site

```
USAGE
  $ shifter sites:create

OPTIONS
  -S, --site-name=site-name  Shifter site name
  -U, --username=username    Shifter username
  -h, --help                 show CLI help
  -v, --version              show CLI version
  --development              Work as development mode (Only for Shifter developer team)
  --plan-id=plan-id          Shifter plan id
  --verbose                  Show verbose

EXAMPLES
  Simple usage
  $ shifter sites:create --username USERNAME --password PASSWORD --site-name "Name of site"
```

_See code: [src/commands/sites/create.ts](https://github.com/getshifter/cli/blob/main/src/commands/sites/create.ts)_

## `shifter sites:delete`

Sites delete command

```
USAGE
  $ shifter sites:delete

OPTIONS
  -S, --site-id=site-id    Shifter site id
  -U, --username=username  Shifter username
  -h, --help               show CLI help
  -v, --version            show CLI version
  --development            Work as development mode (Only for Shifter developer team)
  --verbose                Show verbose

EXAMPLES
  Simple usage
  $ shifter sites:delete --username USERNAME --password PASSWORD --site-id xxx-YOUR-SITE-ID-xxxx
```

_See code: [src/commands/sites/delete.ts](https://github.com/getshifter/cli/blob/main/src/commands/sites/delete.ts)_

## `shifter sites:describe`

Sites describe command

```
USAGE
  $ shifter sites:describe

OPTIONS
  -S, --site-id=site-id    Shifter site id
  -U, --username=username  Shifter username
  -h, --help               show CLI help
  -v, --version            show CLI version
  --development            Work as development mode (Only for Shifter developer team)
  --verbose                Show verbose

EXAMPLES
  Simple usage
  $ shifter sites:describe --username USERNAME --password PASSWORD --site-id xxx-YOUR-SITE-ID-xxxx
```

_See code: [src/commands/sites/describe.ts](https://github.com/getshifter/cli/blob/main/src/commands/sites/describe.ts)_

## `shifter sites:list`

Sites lists command

```
USAGE
  $ shifter sites:list

OPTIONS
  -U, --username=username  Shifter username
  -h, --help               show CLI help
  -v, --version            show CLI version
  --development            Work as development mode (Only for Shifter developer team)
  --verbose                Show verbose

EXAMPLES
  Simple usage
  $ shifter sites:list --username USERNAME --password PASSWORD
```

_See code: [src/commands/sites/list.ts](https://github.com/getshifter/cli/blob/main/src/commands/sites/list.ts)_

## `shifter sites:start`

describe the command here

```
USAGE
  $ shifter sites:start --username USERNAME --password PASSWORD --site-id xxx-YOUR-SITE-ID-xxxx

OPTIONS
  -S, --site-id=site-id    Shifter site id
  -U, --username=username  Shifter username
  -h, --help               show CLI help
  -v, --version            show CLI version
  --development            Work as development mode (Only for Shifter developer team)
  --verbose                Show verbose
```

_See code: [src/commands/sites/start.ts](https://github.com/getshifter/cli/blob/main/src/commands/sites/start.ts)_
<!-- commandsstop -->
