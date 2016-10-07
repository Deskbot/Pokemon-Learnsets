Pokemon-Learnsets
=================

Organises Showdown's learnset object by method of learning and level learned at.

Input
-----

A modified version of [this file](https://github.com/Zarel/Pokemon-Showdown/blob/master/data/learnsets.js). I changed the name of the object and used `ctrl+H` to remove unnecessary bits of the object. It sits in `./data/learnsets.js`.

`node generate-learnsets.js <generation>`

Parameter  | Type
-----------|---------
generation | Integer

Output
------

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
move         | String (Showdown Move ID format)
pokemon      | String (Showdown Pokémon ID format)

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
