import {CheckEven} from './Even';

describe('Check the even odd', () =>{
  it('Should return 1 if no is even', () => {
    const ret = CheckEven(6);
    expect(ret).toBe(1);
  })

  it('Should return 0 if no is odd', () => {
    const ret = CheckEven(7);
    expect(ret).toBe(0);
  })
})
