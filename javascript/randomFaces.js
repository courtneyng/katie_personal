var faces = [
    '\\(^Д^)/',
    '(˚Δ˚)b',
    '\\(o_o)/',
    '(^-^*)',
    '(o^^)o',
    '(=\'X\'=)',
    '(>_<)',
];

function getFace() {
    var randomNumber = Math.floor(Math.random() * faces.length);
    document.getElementById('randomFace').innerHTML = faces[randomNumber];
}