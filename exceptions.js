/**
 * Created by SAMSUNG on 03.10.2016.
 */
function processFiles()
{
    var fileNames = collectFileNames();
    var entries = extractAllEntries(fileNames);
    processEntries(entries);
}

function extractAllEntries(fileNames)
{
    var allEntries = new Entries();
    fileNames.forEach(function (fileName)
    {
        try {
            var entry = extractOneEntry(fileName);
            allEntries.add(entry);
        } catch (e) {
            errorLog.log('Error in ' + fileName, e);
        }
    });
}
function extractOneEntry(fileName)
{
    var file = openFile(fileName);
}

function openFile(fileName)
{
    if (!exists(fileName)) {
        throw new Error('Could not find file ' + fileName);
    }
}


function throwIt(e)
{
    try {
        throw e;
    } catch (err) {
        console.log('Caught: ' + err);
    }
}



function idLog(x)
{
    try {
        console.log(x);
        return 'result';
    } finally {
        console.log('Finally');
    }
}

var count = 0;
function countUp()
{
    try {
        return count;
    } finally {
        count++;
    }
}

var notDefined;

var obj = {
    "name" : "Alex"
}

function catchIt()
{
    try {
        throwIt();
    } catch (e) {
        console.log(e.stack); //print stack trace
    }
}

function throwIt()
{
    throw new Error('');
}

function testFinally()
{
    try {
        return "sth";
    } catch (e) {
        return "sthelse";
    } finally {
        console.log('sth');
    }
}
function AlexExc(msg, refNm) {
    this.msg = msg;
    this.refNm = refNm;
}

AlexExc.prototype = new Error();

function testAlexExc()
{
    try {
        throw new AlexExc('this is my exception', 1);
    } catch (e) {
        if (e instanceof AlexExc)
        {
            console.log(e.stack);
        } else {
            console.log('this wasnt a TypeError');
        }
    }
}

//returns the first value
function process(values)
{
    if (!(values instanceof Array)) {
        throw new Error("process function: Argument must be an Array.");
    }

    values.sort();

    for (var i = 0, len = values.length; i < len; i++)
    {
        if (values[i] > 100)
        {
            return values[i];
        }
    }
}

window.addEventListener('error', function (ev)
{
    console.log('an ' + ev.type + ' occured');
});

window.onerror = function (message, url, line)
{
    console.log('message' + message);
    console.log('line: ' + line);
    return false;
}

function errorOnImage()
{
    var image = document.createElement('img');
    image.onload = function (ev)
    {
        console.log('image loaded');
    };

    image.onerror = function ()
    {
        console.log('the image hasnt loaded properly');
    };

    image.src = 'not existing';

}



// console.log('end of script');
