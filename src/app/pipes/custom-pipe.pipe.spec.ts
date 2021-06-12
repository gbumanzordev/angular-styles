import { ReversePipe } from './custom-pipe.pipe';

describe('CustomPipePipe', () => {
  it('create an instance', () => {
    const pipe = new ReversePipe();
    expect(pipe).toBeTruthy();
  });
});
