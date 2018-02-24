# Lodash listFindAndRemove

[![Build Status](https://travis-ci.org/davidwaterston/lodash-listfindandremove.svg)](https://travis-ci.org/davidwaterston/lodash-listfindandremove)


Extends [Lodash](https://lodash.com/) to search a delimited string and remove any occurrences of a specified value.  
Returns a new string with the specified values removed, the original string is unchanged.    


### _.listFindAndRemove(list, target, [delimiter=','])

**Arguments**  
list (string): The string containing the delimited list to be search. Required.  
target (string): The value to remove from the list. Matching is case-sensitive. Required.  
[delimiter] (string): The optional character used to delimit items in the list. When none is supplied a comma (,) is used.  

**Returns**  
(string): Returns a string containing the delimited list with all occurrences of the _target_ removed.  


### Examples  
```
var _ = require('lodash')
require('lodash-listfindandremove')

_.listFindAndRemove(d,a,b,c,d,e,d,f,d', 'd') // 'a,b,c,e,f'  
_.listFindAndRemove('d,a,b,c,D,e,d,f,d', 'd') // 'a,b,c,D,e,f'  
_.listFindAndRemove('d~a~b~c~d~e~d~f~d', 'd', '~') // 'a~b~c~e~f'  
_.listFindAndRemove('a,b,c,d,e,f', 'z') // 'a,b,c,d,e,f'  
_.listFindAndRemove('a|b|c|d|e|f|xyz', 'z', '|') // 'a|b|c|d|e|f|xyz'  
_.listFindAndRemove('', 'a') // ''   
_.listFindAndRemove('1,2,3,100,4,1,5', '1') // '2,3,100,4,5'  
