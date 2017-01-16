Pokemon-Learnsets
=================

Organises Showdown's learnset object by method of learning and level learned at.

Input
-----

A modified version of [this file](https://github.com/Zarel/Pokemon-Showdown/blob/master/data/learnsets.js). I changed the name of the object and used `ctrl+H` to remove unnecessary bits of the object. It sits in `./data/learnsets.js`.

`node generate-learnsets.js <generation>`

Parameter  | Format
-----------|---------
generation | Integer

Output
------

The result is saved in `./output/` in .json format, under the name `"gen" + generation + ".json"`, with the following structure:

    {
    	<pokemon>: {
    		level: {
    			<Integer>: <move>,
    			.
    			.
    			.
    		},
    		tm:         [<move>...],
    		egg:        [<move>...],
    		tutor:      [<move>...],
    		dreamWorld: [<move>...],
    		event:      [<move>...]
    	},
    	.
    	.
    	.
    }

Placeholder  | Type
-------------|---------
generation   | Integer
move         | String (Showdown move ID format)
pokemon      | String (Showdown pokémon ID format)

By Showdown's ID move/pokémon format I mean the name used internally independent of language. They're usually formatted by taking the English name for the move/pokémon making it lower case and removing all non-alphanumeric characters.

Requirements
------------

* nodejs

Problems
--------

Some moves marked with a 'C' in Showdown don't get included, because I don't know what that refers to or whether it's a typo. Some seem to be egg moves and some seem to be pre-evolution moves. If you know what this refers to, please tell me.

Specifically these are:

Pokémon    | Move        | Gen
-----------|-------------|-----
machamp    | bulletpunch | 4
hitmontop  | foresight   | 4
gliscor    | batonpass   | 4
cloyster   | rapidspin   | 3
hitmontop  | machpunch   | 3
masquerain | hydropump   | 3
