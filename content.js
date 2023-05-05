console.log("Kurt berners content.js loaded");

function kurtnerize() {
    console.log("Where is Kurt!")
    var elements = document.getElementsByTagName('*');

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        for (var j = 0; j < element.childNodes.length; j++) {
            var node = element.childNodes[j];

            if (node.nodeType === 3) {
                var text = node.nodeValue;
                var replacedText = text.replace(/\b(Dalo|Pixel|Ruby|Bytey|Bylo)\b/gi, 'Kurt Berner');

                if (replacedText !== text) {
                    element.replaceChild(document.createTextNode(replacedText), node);
                }
            }
        }
    }
}

document.addEventListener('click', kurtnerize);