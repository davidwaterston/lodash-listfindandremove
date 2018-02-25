# Lodash listFindAndRemove

[![Build Status](https://travis-ci.org/davidwaterston/lodash-listfindandremove.svg)](https://travis-ci.org/davidwaterston/lodash-listfindandremove)
[![Known Vulnerabilities](https://snyk.io/test/github/davidwaterston/lodash-listfindandremove/badge.svg?targetFile=package.json)](https://snyk.io/test/github/davidwaterston/lodash-listfindandremove?targetFile=package.json)
[![NPM version](http://img.shields.io/npm/v/lodash-listfindandremove.svg)](https://www.npmjs.com/package/lodash-listfindandremove/)


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
```


### Version History

| Version | Release Date | Details |   
| :-- | :-- | :-- |    
| 1.0.2 | 25th February, 2018 | An extra character had snuck into one of the links meaning the badge was correct but clicking on it didn't give the expected result. No functionality changes. |
| 1.0.1 | 25th February, 2018 | Added 2 new badges to the README (Known Vulnerabilities  & NPM Version) and this Version History. No functionality changes. |
| 1.0.0 | 24th February, 2018 | Initial release. |
