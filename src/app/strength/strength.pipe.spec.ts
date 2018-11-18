import { StrengthPipe } from './strength.pipe';

describe('Strength Pipe' , () => {
  it('Should display weak if strength is 5', () => {
    const pipe = new StrengthPipe();

    const val = pipe.transform(5);

    expect(val).toEqual('5 (weak)');
  });

  it('Should display strong if strength is 10', () => {
    const pipe = new StrengthPipe();

    const val = pipe.transform(10);

    expect(val).toEqual('10 (strong)');
  });

  it('Should display strong if strength is less than 20', () => {
    const pipe = new StrengthPipe();
    const val = pipe.transform(15);
    expect(val).toEqual('15 (strong)');
  });

  it('Should display unbelievable if strength is more than 20', () => {
    const pipe = new StrengthPipe();
    const val = pipe.transform(22);
    expect(val).toEqual('22 (unbelievable)');
  });
});
