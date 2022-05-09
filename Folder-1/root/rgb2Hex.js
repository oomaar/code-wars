function rgb(r, g, b) {
    // complete this function
    r < 0 ? r = 0 : null;
    g < 0 ? g = 0 : null;
    b < 0 ? b = 0 : null;

    r > 255 ? r = "FF" : null;
    g > 255 ? g = "FF" : null;
    b > 255 ? b = "FF" : null;

    var hexR = r.toString(16);
    var hexG = g.toString(16);
    var hexB = b.toString(16);

    hexR = hexR.length == 1 ? "0" + hexR : hexR;
    hexG = hexG.length == 1 ? "0" + hexG : hexG;
    hexB = hexB.length == 1 ? "0" + hexB : hexB;

    return "#" + hexR.toUpperCase() + hexG.toUpperCase() + hexB.toUpperCase();
}

console.log(rgb(300, 255, -14));
