raw.js originally from: https://github.com/Zarel/Pokemon-Showdown/blob/master/data/learnsets.js

learnsets.js is an altered version of raw.js with the following changes in order to map Pokémon names to an object of moves

1. crtl+H: 'learnset:{' => ''
2. ctrl+H: '}}' => '}'
3. ctrl+H: 'exports.BattleLearnsets' => 'module.exports'
4. removed Pokémon before Bulbasaur because they were Capmons (i.e. not real)
