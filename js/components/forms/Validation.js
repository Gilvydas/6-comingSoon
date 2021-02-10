class Validation {
    static isValidName(name) {
        //ne tuscias tekstas +
        if (!Validation.isNotEmtyText(name)) {
            return 'Vardas negali buti tuscias';
        }
        //tekste gali buti tik raides

        if (!Validation.onlyAlphabetLetters(name)) {
            return 'Vardas gali buti sudarytas tik is raidziu';
        }
        //nei priekije nei gale nera tarpu+
        if (!Validation.noSpacesAround(name)) {
            return 'Pries ir po vardo negali buti tarpu';
        }
        //negali buti daugiau nei vienas zodis(be tarpu) +
        if (!Validation.isSingleWord(name)) {
            return 'Varde negali but tarpu';
        }
        //pirma raide didzioji +
        if (!Validation.isFirstLetterUppercase(name)) {
            return 'Pirma vardo raide turi buti didzioji';
        }
        //visos likusios mazosios
        if (!Validation.isLowercaseButFirst(name)) {
            return 'Tik pirmoji vardo raide gali buti didzioji';
        }
        ///tik abeceles raides(nurodyti kokios abeceles primmtinos)

        return true;
    }

    static isValidEmail(email) {
        //ne tuscias tekstas+
        if (!Validation.isNotEmtyText(email)) {
            return 'El pastas negali buti tuscias';
        }
        //email negali tureti tarpu+
        if (!Validation.isSingleWord(email)) {
            return 'El pasto adrese negali but tarpu';
        }
        //nei priekije nei gale nera tarpu+
        if (!Validation.noSpacesAround(email)) {
            return 'Pries ir po El pasto negali buti tarpu';
        }
        //turi tureti tik viena @+
        if (!Validation.textContainsLetter(email, '@')) {
            return 'El paste turi buti vienas @ simbolis';
        }

        const emailParts = email.split('@');
        const local = emailParts[0];
        const domain = emailParts[1];
        //pries @ turi buti ne tuscias tekstas+
        if (!Validation.isNotEmtyText(local)) {
            return 'Pries @ simboli negali buti tuscia';
        }
        //uz@ turi buti ne tuscias tekstas+
        if (!Validation.isNotEmtyText(domain)) {
            return 'Uz @ simbolio negali buti tuscia';
        }
        return true;
    }

    static isValidText(text) {
        //negali buti tuscias+
        if (!Validation.isNotEmtyText(text)) {
            return 'Tekstas negali buti tuscias';
        }
        //
        return true;
    }

    static isNotEmtyText(text) {
        if (text === '' || typeof text !== 'string') {
            return false;
        }
        return true;
    }

    static isSingleWord(text) {
        if (text.includes(' ')) {
            return false;
        }
        return true;
    }

    static isFirstLetterUppercase(text) {

        return text[0] === text[0].toUpperCase();
    }

    static noSpacesAround(text) {
        return text === text.trim();
    }

    static isLowercaseButFirst(text) {
        const rest = text.slice(1);
        return rest === rest.toLowerCase();
    }

    static textContainsLetter(text, letter, count = 1) {
        let letterCount = 0;
        for (let symbol of text) {
            if (symbol === letter) {
                letterCount++
            }
        }
        return letterCount === count;
    }

    static onlyAlphabetLetters(text) {
        const uppercase = text.toUpperCase();
        const lowercase = text.toLowerCase();
        const size = text.length;

        for (let i = 0; i < size; i++) {

            if (uppercase[i] === lowercase[i]) {
                return false;
            }

        }
        return true;

    }
}
export { Validation }