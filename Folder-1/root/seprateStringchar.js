function stringgs(s) {
    for (let i = 0; i <= s.length; i++) {
        var temp = "";
        var x = s.charAt(i);
        var result = x.slice(0).toUpperCase() + x.repeat(i);
        temp = temp + " " + result;
        console.group('stringgs');
        console.log(temp);
        console.groupEnd();
    }
}

stringgs("loolxa");