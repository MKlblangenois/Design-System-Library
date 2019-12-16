

const rgb2hex = rgb => {
    rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    return (rgb && rgb.length === 4) ? "#" +
     ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
     ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
     ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
}

const hexToHSL = H => {
    // Convert hex to RGB first
    let r = 0,
        g = 0,
        b = 0;
    if (H.length === 4) {
        r = "0x" + H[1] + H[1];
        g = "0x" + H[2] + H[2];
        b = "0x" + H[3] + H[3];
    } else if (H.length === 7) {
        r = "0x" + H[1] + H[2];
        g = "0x" + H[3] + H[4];
        b = "0x" + H[5] + H[6];
    }
    // Then to HSL
    r /= 255;
    g /= 255;
    b /= 255;
    let cmin = Math.min(r, g, b),
        cmax = Math.max(r, g, b),
        delta = cmax - cmin,
        h = 0,
        s = 0,
        l = 0;

    if (delta === 0)
        h = 0;
    else if (cmax === r)
        h = ((g - b) / delta) % 6;
    else if (cmax === g)
        h = (b - r) / delta + 2;
    else
        h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    if (h < 0)
        h += 360;

    l = (cmax + cmin) / 2;
    s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    return "hsl(" + h + "," + s + "%," + l + "%)";
}





/**
 * Split HSL(a) Color code.
 *
 * Get the HSL(a) color code and return an array with each value of HSL.
 *
 * @since      0.1.0
 *
 * @param {string} HSLa           HSL(a) color code.
 *
 * @return {array} Return each value of HSLa code in an array.
 */

const splitHSLa = HSLa => {
    if(HSLa.substring(0, 3) === 'hsl') {
        // On vérifie d'abord si il s'agit d'un code HSL ou HSLA,
        // on récupère ensuite les valeurs entre parenthèses,
        // puis on sépare chaque valeur par virgule,
        // et on supprime les espaces dans chaque élément.
        return HSLa.substring((HSLa.substring(0, 4) === 'hsla') ? 5 : 4, HSLa.length - 1 ).split(',').map(item => item.trim());
    } else {
        return false
    }
}




/**
 * Concat value in HSL(a) code.
 *
 * Get each value of color in array and return an HSL(a) code.
 *
 * @since      0.1.0
 *
 * @param {array}  HSLaValues    HSL(a) value in array.
 *
 * @return {array} Return HSL(a) color code.
 */

const concatHSLa = HSLaValues => {
    return `${(HSLaValues.length === 4) ? `hsla` : `hsl`}(${HSLaValues.join(', ')})`
}



export const lightenHSLa = (HSLa, amount) => {
    // TODO: Il faudra ajouter une étape pour convertir :
    // TODO: - RGBa to HSLa

    if(HSLa.substring(0, 3) === 'rgb')
        HSLa = hexToHSL(rgb2hex(HSLa))


    if(HSLa.substring(0, 1) === '#')
        HSLa = hexToHSL(HSLa);

    // ! pour l'instant, assumons qu'il s'agisse d'un code HSLa
    let HSLaValues = splitHSLa(HSLa);

    HSLaValues[2] = (parseInt(HSLaValues[2].substring(0, HSLaValues[2].length - 1)) + amount >= 100)
        ? `100%` : `${(parseInt(HSLaValues[2].substring(0, HSLaValues[2].length - 1)) + amount)}%`

    return concatHSLa(HSLaValues)
}

export const darkenHSLa = (HSLa, amount) => {
    // TODO: Il faudra ajouter une étape pour convertir :
    // TODO: - RGBa to HSLa

    if(HSLa.substring(0, 3) === 'rgb')
        HSLa = hexToHSL(rgb2hex(HSLa))

    if(HSLa.substring(0, 1) === '#')
        HSLa = hexToHSL(HSLa);

    // ! pour l'instant, assumons qu'il s'agisse d'un code HSLa
    let HSLaValues = splitHSLa(HSLa);

    HSLaValues[2] = (parseInt(HSLaValues[2].substring(0, HSLaValues[2].length - 1)) - amount < 0)
        ? `0%` : `${(parseInt(HSLaValues[2].substring(0, HSLaValues[2].length - 1)) - amount)}%`

    return concatHSLa(HSLaValues)
}