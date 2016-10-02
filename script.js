locationPathname = location.pathname.replace('/ru', "").replace(".html", "");

var BreakException;

try {
    ['knowledge', 'index', 'thx', 'exists-thx'].forEach(function (elem) {
        if (locationPathname.indexOf(elem) > -1 ) {
            console.log('the page is one of the following: knowledge, index, thx or exists-thx');
            throw BreakException;
        }
    });

} catch (e) {
    //noinspection JSUnusedAssignment
    if (e !== BreakException) throw e;
}


if ( jQuery.inArray(locationPathname, ['knowledge', 'index', 'thx', 'exists-thx']) > -1 )
{
    console.log('the page is one of the following: knowledge, index, thx or exists-thx');
}

function onlyUnique(value, index, array) {
    //if the value iterated has already appeared before in the array
    //then return false - will not be present in the unique array
    return array.indexOf(value) === index;
}

// usage example:
var a = ['a', 1, 'a', 2, '1'];
//Array.filter returns an array with elems that passed the test in the onlyUnique
//the elems for which the cb will return true pass the test
var unique = a.filter( onlyUnique );
