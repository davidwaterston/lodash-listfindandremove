var should = require('should');
var _ = require('lodash');
require('../src/listFindAndRemove.js')

describe('_.listFindAndRemove', function () {

    it('Removes the specified string from multiple places using the default delimiter (,)', function (done) {
        var list = 'd,a,b,c,d,e,d,f,d';
        _.listFindAndRemove(list,'d').should.equal('a,b,c,e,f');
        done();
    });

    it('Removes the specified string from multiple places using the default delimiter (,) ignoring those with different case', function (done) {
        var list = 'd,a,b,c,D,e,d,f,d';
        _.listFindAndRemove(list,'d').should.equal('a,b,c,D,e,f');
        done();
    });

    it('Removes the specified string from multiple places using a custom delimiter (~)', function (done) {
        var list = 'd~a~b~c~d~e~d~f~d';
        _.listFindAndRemove(list,'d','~').should.equal('a~b~c~e~f');
        done();
    });

    it('Returns an unchanged string when no match is found using the default delimiter (,)', function (done) {
        var list = 'a,b,c,d,e,f';
        _.listFindAndRemove(list,'z').should.equal('a,b,c,d,e,f');
        done();
    });

    it('Returns an unchanged string when no match is found using a custom delimiter (|)', function (done) {
        var list = 'a|b|c|d|e|f|xyz';
        _.listFindAndRemove(list,'z','|').should.equal('a|b|c|d|e|f|xyz');
        done();
    });

    it('Returns an empty string when an empty string is passed in', function (done) {
        var list = '';
        _.listFindAndRemove(list,'a').should.equal('');
        done();
    });

    it('Removes the specified number from multiple places using the default delimiter (,)', function (done) {
        var list = '1,2,3,100,4,1,5';
        _.listFindAndRemove(list,1).should.equal('2,3,100,4,5');
        done();
    });

    it('Treats a number in quotes as a number rather than a string when matching', function (done) {
        var list = '1,2,3,100,4,1,5';
        _.listFindAndRemove(list,'1').should.equal('2,3,100,4,5');
        done();
    });

});
