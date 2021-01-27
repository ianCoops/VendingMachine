const insertNickel = require("./script");

test('Check if insert nickel function call is successful and nickel added to total and if unsuccessful and error will be thrown.', () => {
  expect(() => insertNickel()).toThrow();
  expect(() => insertNickel()).toThrow(Error);

});

const insertDime = require("./script");

test('Check if insert dime function call is successful and dime added to total and if unsuccessful an error will be thrown.', () => {
  expect(() => insertDime()).toThrow();
  expect(() => insertDime()).toThrow(Error);

});

const insertQuarter = require("./script");

test('Check if insert quarter function call is successful and quarter added to total if unsuccessful an error will be thrown.', () => {
  expect(() => insertQuarter()).toThrow();
  expect(() => insertQuarter()).toThrow(Error);

});

const insertPenny = require("./script");

test('Check if insert penny function call is successful and penny rejected and if unsuccesful an error will be thrown.', () => {
  expect(() => insertPenny()).toThrow();
  expect(() => insertPenny()).toThrow(Error);

});

const takeCoins = require("./script");

test('Check if take coins function call is successful and coins taken from the dispenser if not an error will be thrown.', () => {
  expect(() => takeCoins()).toThrow();
  expect(() => takeCoins()).toThrow(Error);

});

const selectCola = require("./script");

test('Check if select cola function call is successful and cola was selected if not an error will be thrown.', () => {
  expect(() => selectCola()).toThrow();
  expect(() => selectCola()).toThrow(Error);

});

const selectChips = require("./script");

test('Check if select chips function call is successful and cola was selected if not an error will be thrown.', () => {
  expect(() => selectChips()).toThrow();
  expect(() => selectChips()).toThrow(Error);

});

const selectCandy = require("./script");

test('Check if select chips function call is successful and cola was selected if not an error will be thrown.', () => {
  expect(() => selectCandy()).toThrow();
  expect(() => selectCandy()).toThrow(Error);

});

const cancel = require("./script");

test('Check if the transaction was cancelled and money returned if not an error will be thrown.', () => {
  expect(() => cancel()).toThrow();
  expect(() => cancel()).toThrow(Error);

});

const vend = require("./script");

test('Check if the product was dispensed if not an error will be thrown.', () => {
  expect(() => vend()).toThrow();
  expect(() => vend()).toThrow(Error);

});

const takeProduct = require("./script");

test('Check if the product was taken from the dispenser if not an error will be thrown.', () => {
  expect(() => takeProduct()).toThrow();
  expect(() => takeProduct()).toThrow(Error);

});