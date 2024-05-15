// Importing the NumbersValidator class from the relative path '../app/numbers-validator'
// so we can test its methods.
import NumbersValidator from '../../app/numbers_validator.js'
import { expect }  from 'chai';


describe('isNumberEven positive test', () => {

  let validator;

  beforeEach(()=>{
    validator = new NumbersValidator();
  });

  afterEach(()=>{
    validator = null;
  });


  it('should check if a number is even', ()=>{

    expect(validator.isNumberEven(4)).to.be.equal(true);
    expect(validator.isNumberEven(3)).to.be.equal(false);
    expect(() => validator.isNumberEven('4')).to.throw();

  });

  it('should return an array of even numbers', () => {
    const arrayOfNumbers = [1, 2, 3, 4, 5];
    const arrayOfString = ["1", "2", "3", "4", "5"];

    expect(validator.getEvenNumbersFromArray(arrayOfNumbers)).to.include.members([2, 4]);
    expect(() => validator.getEvenNumbersFromArray(arrayOfString)).to.throw();

  });

  it('should check if all elements in an array are numbers', () => {
    const arrayOfNumbers = [1, 2, 3, 4, 5];
    const notArray = "I am not an array";

    expect(validator.isAllNumbers(arrayOfNumbers)).to.be.equal(true);
    expect(() => validator.isAllNumbers(notArray)).to.throw();

  });



  it('should check if a value is an integer', () => {
    expect(validator.isInteger(5)).to.be.equal(true);
    expect(validator.isInteger(5.5)).to.be.equal(false);
    expect(() => validator.isInteger(true)).to.throw();
  });

});

