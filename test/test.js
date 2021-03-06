// Simple async test for HTTP 200 response code using supertest
'use strict';

var request = require("supertest"),
    app = require("./../app");

describe('GET /', function(){
    it('expects HTTP response 200', function(done){
        request(app)
            .get('/')
            .expect(200, done);
    });
});

describe('GET /users', function(){
    it('expects HTTP response 200', function(done){
        request(app)
            .get('/users')
            .expect(200, done);
    });
});

describe('GET page Not found page', function(){
    it('expects HTTP response 200', function(done){
        request(app)
            .get('/undefined')
            .expect(200, done);
    });
});