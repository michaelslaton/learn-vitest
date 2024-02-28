import { add, mul, divide, } from '../src/math';

describe("Tests math functions", ()=>{

  it("Addition works fine", ()=>{
    const result = add(2,5,7,8,10)
    expect(result).toBe(2+5+7+8+10)
  })
  it("Addition returns null if non-integer is passed", ()=>{
    const result = add(2,NaN,7,8,10)
    expect(result).toBe(null)

    const result2 = add(2,'',7,8,10)
    expect(result2).toBe(null)

    const result3 = add(3,{},7,8,10)
    expect(result3).toBe(null)
  })

  it("Addition should throw on empty call", ()=>{
    let fn = () => {
      add()
    }

    expect(fn).toThrow('No numbers specified')
  })

  it("Multiplication works fine", ()=>{
    expect(mul(2,5)).toBe(10);
    expect(mul(2,5)).to.not.be.a('string');
    expect(mul(2,5)).to.not.be.true;
  })

})

describe("Misc Testing", ()=>{

  it("Object deep equality", ()=>{
    const obj = { a:1 }
    const obj2 = JSON.parse(JSON.stringify({ a:1 }))
    expect(obj).to.deep.equal({ a:1 })
    expect(obj2).to.deep.equal(obj)

    // expect.fail('This test should never pass')
  })

})