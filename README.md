# File CLI
[![npm](https://img.shields.io/npm/v/file-cli)](https://www.npmjs.com/package/file-cli)
[![David](https://img.shields.io/david/woubuc/file-cli)](https://david-dm.org/woubuc/file-cli)
[![MIT license](https://img.shields.io/github/license/woubuc/file-cli)](https://github.com/woubuc/node-updown/blob/master/LICENSE.txt)


CLI tool to do basic file operations in a cross-platform way. Uses [fs-extra](https://www.npmjs.com/package/fs-extra) under the hood.

## Install
Install globally:
```
npm i -g file-cli
```

Or install into your project's dev-dependencies to use in your scripts:
```
npm i -D file-cli
```

## Commands
The CLI can be used as `fcli`, which is a little shorter than `file-cli`.

Run `fcli --help` to view a list of commands in your terminal.

#### Read
```
fcli read <path>
```

Reads a file and prints it to stdout

#### Write
```
fcli write <path> <data>
```

Writes data to a file

#### Ensure
```
fcli ensure <path> [-f]
```

Ensures a file or directory exists.

- `-f`, `--file`: path is a file

#### Copy
```
fcli copy <from> <to> [-o]
```

Copies a file or the contents of a directory (unix equivalent: `cp -r`)

- `-o`, `--overwrite`: overwrite target file if it already exists

#### Move
```
fcli move <from> <to> [-o]
```

Moves or renames a file (unix equivalent: `mv`)

- `-o`, `--overwrite`: overwrite target file if it already exists

#### Remove
```
fcli remove <path>
```

Removes a file or directory (unix equivalent: `rm -rf`)
