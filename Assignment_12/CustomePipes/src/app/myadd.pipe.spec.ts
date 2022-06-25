import { MyaddPipe } from './myadd.pipe';

describe('MyaddPipe', () => {
  it('create an instance', () => {
    const pipe = new MyaddPipe();
    expect(pipe).toBeTruthy();
  });
});
