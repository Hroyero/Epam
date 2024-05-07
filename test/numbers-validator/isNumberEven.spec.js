// Importing the NumbersValidator class from the relative path '../app/numbers-validator'
// so we can test its methods.
import {NumbersValidator} from '../../app/numbers_validator.js';
import { expect } from 'chai';

// 'describe' is used to group related tests together into a test suite.
// Here, it describes a suite of tests for the 'isNumberEven' method of NumbersValidator class.
describe('isNumberEven positive test', () => {
  // Declaring a variable 'validator' outside of the 'beforeEach' and 'it' blocks
  // to make it accessible throughout this describe block.
  let validator;

  // 'beforeEach' is a hook that runs before each test ('it' block) within this 'describe' block.
  // It's usually used for setting up the test environment.
  beforeEach(()=>{
    // Instantiates a new NumbersValidator object before each test and assigns it to 'validator'
    validator = new NumbersValidator();

  });

  // 'afterEach' is a hook that runs after each test. It is often used for cleanup activities.
  afterEach(()=>{
    // Sets the validator variable to null to clean up memory after each test
    validator = null;
  });

  // 'it' is used for individual test cases - it includes the actual test.
  // The string argument describes what the test should do.
  it('should return true when provided with an even number', ()=>{
    // Using 'expect' to assert that the 'isNumberEven' method returns true when
    // passed the even number 4. The '.to.be.equal(true)' is the actual assertion check.
    const validationResult = validator.isNumberEven(4);
    expect(validationResult).to.be.equal(true);
  });

  it('should return false when provided with an even number', ()=>{
    // Using 'expect' to assert that the 'isNumberEven' method returns true when
    // passed the even number 4. The '.to.be.equal(true)' is the actual assertion check.
    const validationResult = validator.isNumberEven(5);
    expect(validationResult).to.be.equal(false);
  });
/*
  it('shloud throw an erro when provided a string', () => {
    expect(()=>{
      validator.isNumberEven('4')
    });
  });
  */
});