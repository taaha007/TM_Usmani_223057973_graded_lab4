document.getElementById('compare-btn').addEventListener('click', function() {

    var expectedText = document.getElementById('expected').value;
    var actualText = document.getElementById('actual').value;
    var resultList = document.getElementById('result');

    resultList.innerHTML = '';
    resultList.className = '';

    if (expectedText.trim() === '' && actualText.trim() === '') {
        var emptyMsg = document.createElement('li');
        emptyMsg.textContent = 'Please enter text in both text areas.';
        resultList.appendChild(emptyMsg);
        return;
    }
    var expectedLines = expectedText.split('\n');
    var actualLines = actualText.split('\n');

    var hasDifferences = false;

    var ol = document.createElement('ol');
    ol.id = 'differences';


    var maxLength = expectedLines.length;
    if (actualLines.length > maxLength) {
        maxLength = actualLines.length;
    }

    for (var i = 0; i < maxLength; i++) {

        var expLine = '';
        var actLine = '';

        if (i < expectedLines.length) {
            expLine = expectedLines[i];
        }
        if (i < actualLines.length) {
            actLine = actualLines[i];
        }

        if (expLine !== actLine) {
            hasDifferences = true;
            var li = document.createElement('li');
            li.textContent = 'Line ' + (i + 1) + ':\n  < ' + expLine + '\n  > ' + actLine;
            ol.appendChild(li);
        }
    }

    
    if (expectedLines.length !== actualLines.length) {
        hasDifferences = true;
        var lengthLi = document.createElement('li');
        lengthLi.textContent = 'Lengths differ: < ' + expectedLines.length + ', > ' + actualLines.length;
        ol.appendChild(lengthLi);
    }

    if (hasDifferences) {
        resultList.className = 'change';

        var msg = document.createElement('p');
        msg.textContent = 'Texts are different';
        resultList.appendChild(msg);

        resultList.appendChild(ol);

    } else {
        resultList.className = 'nochange';

        var noChangeLi = document.createElement('li');
        noChangeLi.textContent = 'No differences found';
        resultList.appendChild(noChangeLi);
    }

});


document.getElementById('clear-btn').addEventListener('click', function() {

    document.getElementById('expected').value = '';
    document.getElementById('actual').value = '';

    var resultList = document.getElementById('result');
    resultList.innerHTML = '';
    resultList.className = '';

});