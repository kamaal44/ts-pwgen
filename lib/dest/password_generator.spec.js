/// <reference path="../../typings/index.d.ts" />
"use strict";
var chai_1 = require("chai");
var password_generator_1 = require("./password_generator");
describe('PasswordGenerator', function () {
    describe('generate()', function () {
        it('should be able to generate a password of length 0', function () {
            var pwgen = new password_generator_1.PasswordGenerator();
            pwgen.options.parts.length = 0;
            chai_1.expect(pwgen.generate()).to.have.length(0);
        });
        it('should be able to generate a password of length 10', function () {
            var pwgen = new password_generator_1.PasswordGenerator();
            pwgen.options.parts.length = 10;
            chai_1.expect(pwgen.generate()).to.have.length(10);
        });
        it('should be able to generate a password of length 20', function () {
            var pwgen = new password_generator_1.PasswordGenerator();
            pwgen.options.parts.length = 20;
            chai_1.expect(pwgen.generate()).to.have.length(20);
        });
        it('should be able to generate a password of length 100', function () {
            var pwgen = new password_generator_1.PasswordGenerator();
            pwgen.options.parts.length = 100;
            chai_1.expect(pwgen.generate()).to.have.length(100);
        });
        it('should be able to generate 2 parts of 5 with a dash delimiter', function () {
            var pwgen = new password_generator_1.PasswordGenerator();
            pwgen.options.specialCharacters = false;
            pwgen.options.parts = {
                amount: 2,
                length: 5,
                delimiter: '-'
            };
            var expectRegex = /[a-zA-Z0-9]{5}-[a-zA-Z0-9]{5}/;
            chai_1.expect(expectRegex.test(pwgen.generate())).to.be.true;
        });
        it('should be able to generate 3 parts of 6 with a dash delimiter', function () {
            var pwgen = new password_generator_1.PasswordGenerator();
            pwgen.options.specialCharacters = false;
            pwgen.options.parts = {
                amount: 3,
                length: 6,
                delimiter: '-'
            };
            var expectRegex = /[a-zA-Z0-9]{6}-[a-zA-Z0-9]{6}-[a-zA-Z0-9]{6}/;
            chai_1.expect(expectRegex.test(pwgen.generate())).to.be.true;
        });
        it('should be able to generate 3 parts of 10 with a ! delimiter', function () {
            var pwgen = new password_generator_1.PasswordGenerator();
            pwgen.options.specialCharacters = false;
            pwgen.options.parts = {
                amount: 3,
                length: 10,
                delimiter: '!'
            };
            var expectRegex = /[a-zA-Z0-9]{10}![a-zA-Z0-9]{10}![a-zA-Z0-9]{10}/;
            chai_1.expect(expectRegex.test(pwgen.generate())).to.be.true;
        });
    });
    describe('generateMultiple()', function () {
        it('should be able to generate 1 password', function () {
            var pwgen = new password_generator_1.PasswordGenerator();
            var output = pwgen.generateMultiple(1);
            chai_1.expect(output).to.have.length(1);
        });
        it('should be able to generate 3 passwords', function () {
            var pwgen = new password_generator_1.PasswordGenerator();
            var output = pwgen.generateMultiple(3);
            chai_1.expect(output).to.have.length(3);
        });
        it('should be able to generate 20 passwords', function () {
            var pwgen = new password_generator_1.PasswordGenerator();
            var output = pwgen.generateMultiple(20);
            chai_1.expect(output).to.have.length(20);
        });
    });
});