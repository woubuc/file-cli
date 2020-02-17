#!/usr/bin/env node

const fs = require('fs-extra');
const yargs = require('yargs');

yargs
	.scriptName('fcli')

	.command('read <path>', 'read a file to stdout', (y) => {
		y.positional('path');
	}, (args) => {
		process.stdout.write(fs.readFileSync(args.path));
	})

	.command('write <path> <data> [-c]', 'write data to a file', (y) => {
		y.positional('path', { type: 'string' });
		y.positional('data', { type: 'string' });
		y.option('c', {
			alias: 'create',
			describe: `create file if it doesn't exist`,
			type: 'boolean',
			default: false,
		});
	}, (args) => {
		if (args.create) {
			fs.ensureFileSync(args.path);
		}

		fs.writeFileSync(args.path, args.data);
	})

	.command('ensure <path> [-f]', 'ensure file or directory exists', (y) => {
		y.positional('path', { type: 'string' });
		y.option('f', {
			alias: 'file',
			describe: 'treat path as a file',
			type: 'boolean',
			default: false,
		});
	}, (args) => {
		if (args.file) {
			fs.ensureFileSync(args.path);
		} else {
			fs.ensureDirSync(args.path);
		}
	})

	.command('copy <from> <to> [-o]', 'copy a file or the contents of a directory', (y) => {
		y.positional('from', { type: 'string' });
		y.positional('to', { type: 'string' });
		y.option('o', {
			alias: 'overwrite',
			describe: 'overwrite if target file already exists',
			type: 'boolean',
			default: false,
		});
	}, (args) => {
		fs.copySync(args.from, args.to, {
			overwrite: args.overwrite,
			errorOnExist: true,
		});
	})

	.command('move <from> <to> [-o]', 'move or rename a file or directory', (y) => {
		y.positional('from', { type: 'string' });
		y.positional('to', { type: 'string' });
		y.option('o', {
			alias: 'overwrite',
			describe: 'overwrite if target file already exists',
			type: 'boolean',
			default: false,
		});
	}, (args) => {
		fs.moveSync(args.from, args.to, {
			overwrite: args.overwrite,
		});
	})

	.command('remove <path>', 'deletes a file or directory', (y) => {
		y.positional('path', { type: 'string' });
	}, (args) => {
		fs.removeSync(args.path);
	})

	.argv;

