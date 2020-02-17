# File CLI
CLI tool to do basic file operations in a cross-platform way. Uses [fs-extra](https://www.npmjs.com/package/fs-extra) under the hood.

## Install
Install globally:
```
npm i -g fcli
```

Or install into your project's dev-dependencies to use in your scripts:
```
npm i -D fcli
```

## Command
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
