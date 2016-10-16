locationPathname = location.pathname.replace('/ru', "").replace(".html", "");

var BreakException;

try {
    ['knowledge', 'index', 'thx', 'exists-thx'].forEach(function (elem) {
        if (locationPathname.indexOf(elem) > -1 ) {
            // console.log('the page is one of the following: knowledge, index, thx or exists-thx');
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

function concat (str1, str2, str3)
{
    var result = str1 + str2;
    if (str3 !== undefined) //avoid!!
    {
        result += str3;
    }
    return result;
}

function NotString(callee)
{
    var msg = 'the function ' + callee.name + ' expects a string as argument.';
    return msg;
}

function getQueryString(url)
{
    if (typeof url == "string")
    {
        var pos = url.indexOf('?');
        if (pos > -1)
        {
            return url.substring(pos +1);
        }
    }
    else throw NotString(arguments.callee);

}

function sortReverse(arr)
{
    if (arr instanceof Array)
    {
        arr.sort();
        arr.reverse();

        return arr;
    }
}

var urlAlex = "Bąk ćwiczą się główny";

var encodedUrl = encodeURI(urlAlex);


var malformedUrl = 'http://www.somedomain.com/?redir=http://www.someotherdomain.com?a=b&c=d';

function encodeQuery(url)
{
    if(typeof url == 'string')
    {
        var query = getQuery(url);
        var encodedQuery = encodeURIComponent(query);

        return url.replace(query, encodedQuery);
    }

}

function addQueryStringArg(url, name, value)
{
    if (url.indexOf('?') == -1)
    {
        url += '?';
    } else {
        url += '&';
    }

    url += encodeURIComponent(name) + '=' + encodeURIComponent(value);

    return url;

}

function getQuery(url)
{
    if (typeof url == 'string')
    {
        var pos = url.indexOf('?');

        if(pos !== -1)
        {
            return url.substring(pos);
        }
    }
    return "";
}


// for (var i = 0, len = mods.length; i < len; i++)
// {
//     // mods[i].init(); //possible fatal error
// }
//
// for (var i = 0, len = mod.length; i < len; i++)
// {
//     try {
//         // mods[i].init();
//     } catch (ex) {
//         logError("nonfatal", "Module init failed: " + ex.message);
//     }
// }

/**
 *
 * @param sev - severity (num or string)
 * @param msg - message
 */
function logError (sev, msg)
{
    var img = new Image();
    img.src = "log.php?sev=" + encodeURIComponent(sev) + " &msg=" + encodeURIComponent(msg);
}

$('.cross').hide();
$('.menu').hide();
$('.hamburger').click(function(){
    $('.menu').slideToggle('slow', function ()
    {
        $('.hamburger').hide();
        $('.cross').show();
    })
});

$('.cross').click(function(){
    $('.menu').slideToggle('slow', function ()
    {
        $('.cross').hide();
        $('.hamburger').show();
    })
});

var buttonRozwin = document.querySelector('#rozwin');


var animateHamburger = function (e)
{
    this.classList.toggle('open');
};

// buttonRozwin.addEventListener('click', animateHamburger);

// console.log('end of script');