import { CONSONANTS, VOWELS } from "ipa-symbols/ipa_symbols.js";

//Returns true if a symbol is a vowel, else false
export const isVowel = (symbol) => {
    return VOWELS.filter(s => s.symbol === symbol.symbol).length !== 0; 
};

//Filter vowels by height
export const getVowelsByHeight = (height) => {
    return VOWELS.filter(s => s.height === height);
}

//Filter vowels by backness
export const getVowelsByBackness = (backness) => {
    return VOWELS.filter(s => s.backness === backness);
}

//Returns true if a symbol is a consonant, else false
export const isConsonant = (symbol) => {
    return CONSONANTS.filter(s => s.symbol === symbol.symbol).length !== 0;
};

//Filter consonants by place
export const getConsonantsByPlace = (place) => {
    return CONSONANTS.filter(s => s.place === place);
}

//Filter consonants by manner
export const getConsonantsByManner = (manner) => {
    return CONSONANTS.filter(s => s.manner === manner);
}

// Returns a Wikipedia link for a given symbol, or the symbol itself if there is no link
export const getSymbolLink = (symbol) => {
    if (symbol?.url === undefined || symbol?.url === '') return `${symbol.symbol}`;
    const name = symbol.url.split("/wiki/")[1].split("_").join(" ");
    return "[[" + name + "| " + symbol.symbol + "]]";
};

//Returns a Wikipedia link for vowel backnesses
export const getBacknessLink = (backness) => {
    switch (backness) {
        case 'front':
            return "[[Front vowel|Front]]";
        case 'central':
            return "[[Central vowel|Central]]";                 
        case 'back':          
            return "[[Back vowel|Back]]";                               
        default:
            return backness.charAt(0).toUpperCase() + backness.slice(1);
    };
};

//Returns a Wikipedia link for vowel heights
export const getHeightLink = (height) => {
    switch (height) {
        case 'close':
            return "[[Close vowel|Close]]";
        case 'near-close':
            return "[[Near-close vowel|Near-close]]";
        case 'close-mid':
            return "[[Close-mid vowel|Close-mid]]";     
        case 'mid':          
            return "[[Mid vowel|Mid]]";                
        case 'open-mid':                   
            return "[[Open-mid vowel|Open-mid]]";                 
        case 'near-open':          
            return "[[Near-open vowel|Near-open]]";                
        case 'open':           
            return "[[Open vowel|Open]]";                                  
        default:
            return height;
    };
};

//Returns a Wikipedia link for consonant places
export const getPlaceLink = (place) => {
    switch (place) {
        case 'BILABIAL':
            return "[[Bilabial consonant|Bilabial]]";
        case 'LABIODENTAL':
            return "[[Labiodental consonant|Labio-dental]]";                 
        case 'LINGUOLABIAL':          
            return "[[Linguolabial consonant|Linguo-labial]]";                 
        case 'DENTAL':                   
            return "[[Dental consonant|Dental]]";                 
        case 'ALVEOLAR':          
            return "[[Alveolar consonant|Alveolar]]";                 
        case 'POSTALVEOLAR':           
            return "[[Postalveolar consonant|Post-alveolar]]";                 
        case 'RETROFLEX':           
            return "[[Retroflex consonant|Retroflex]]";                 
        case 'PALATAL':           
            return "[[Palatal consonant|Palatal]]";   
        case 'LABIALVELAR':
            return "[[Labial–velar consonant|Labial–velar]]";
        case 'VELAR':          
            return "[[Velar consonant|Velar]]";                 
        case 'UVULAR':           
            return "[[Uvular consonant|Uvular]]";                 
        case 'PHARYNGEAL/EPIGLOTTAL':           
            return "[[Pharyngeal consonant|Pharyngeal/Epiglottal]]";                 
        case 'GLOTTAL':           
            return "[[Glottal consonant|Glottal]]";                 
        default:
            return place;
    };
};

//Returns a Wikipedia link for consonant manners
export const getMannerLink = (manner) => {
    switch (manner) {
        case 'NASAL':
            return "[[Nasal consonant|Nasal]]";
        case 'PLOSIVE':
            return "[[Plosive]]";  
        case 'IMPLOSIVE':
            return "[[Implosive consonant|Implosive]]";               
        case 'SIBILANT AFFRICATE':          
            return "[[Sibilant]] [[affricate]]";                 
        case 'NON-SIBILANT AFFRICATE':                   
            return "Non-sibilant affricate";                 
        case 'SIBILANT FRICATIVE':          
            return "Sibilant [[fricative]]";                 
        case 'NON-SIBILANT FRICATIVE':           
            return "Non-sibilant fricative";                 
        case 'APPROXIMANT':           
            return "[[Approximant]]";                 
        case 'TAP/FLAP':           
            return "[[Tap and flap consonants|Tap/flap]]";                 
        case 'TRILL':          
            return "[[Trill consonant|Trill]]";                 
        case 'LATERAL AFFRICATE':           
            return "[[Lateral consonant|Lateral]] affricate";                 
        case 'LATERAL FRICATIVE':           
            return "Lateral fricative";                 
        case 'LATERAL APPROXIMANT':           
            return "Lateral approximant";          
        case 'LATERAL TAP/FLAP':           
            return "Lateral tap/flap";                        
        default:
            return manner;
    };
};