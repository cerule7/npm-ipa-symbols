# npm-ipa-symbols
The [International Phonetic Alphabet](https://en.wikipedia.org/wiki/International_Phonetic_Alphabet) is a standardized representation of speech sounds in as a system
of characters and associated attributes. This repository provides a dictionary of IPA characters (symbols) and their attributes, as well as links to their Wikipedia pages.

It is published as `ipa-symbols` on [npm](https://www.npmjs.com/package/ipa-symbols) and can be installed using this command:

`npm i ipa-symbols`

### Structure

Currently, these are the files in this package:
* `ipa_symbols.js`: contains the IPA symbol objects and enum values. 
* `utils.js`: contains various helpful utility functions for filtering symbols, determining if a symbol is a vowel/consonant and getting Wikipedia-formatted links. 
* `index.js`: exports the above two files.

### Constants

Manners, places of articulation, height, backness, roundedness and voicedness are all defined using enums/constants. These can be found at the top of ipa_symbols.js.

### Symbols

These are divided into consonants and vowels with the same basic structure. 

Consonants have information about manner, place and whether they are voiced or not. 

Example consonant:

`{
        manner: NA,
        place: BI,
        symbol: 'm̥',
        voiced: false,
        url: 'https://en.wikipedia.org/wiki/Voiceless_bilabial_nasal',
 }`
 
 Vowels have information about height, backness and whether they are rounded or not. 
 
 Example vowel: 
 
`{
        symbol: 'i',
        height: C,
        backness: F,
        roundedness: UR,
        url: 'https://en.wikipedia.org/wiki/Close_front_unrounded_vowel',
}`