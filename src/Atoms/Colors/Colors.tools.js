export const shadeColor = (color, percent) => {

    // On vérifie si la couleur est au format rbg(a)
    if(color.substring(0, 3) === 'rgb')
        color = rgb2hex(color)

    let R = parseInt(color.substring(1,3),16),
        G = parseInt(color.substring(3,5),16),
        B = parseInt(color.substring(5,7),16);

    R = parseInt(R * (100 + percent) / 100);
    G = parseInt(G * (100 + percent) / 100);
    B = parseInt(B * (100 + percent) / 100);

    R = (R<255) ? R : 255;  
    G = (G<255) ? G : 255;  
    B = (B<255) ? B : 255;  

    let RR = ((R.toString(16).length===1) ? "0"+R.toString(16) : R.toString(16)),
        GG = ((G.toString(16).length===1) ? "0"+G.toString(16) : G.toString(16)),
        BB = ((B.toString(16).length===1) ? "0"+B.toString(16) : B.toString(16));

    return "#"+RR+GG+BB;
}

const rgb2hex = rgb => {
    rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    return (rgb && rgb.length === 4) ? "#" +
     ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
     ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
     ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
}