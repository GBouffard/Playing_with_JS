describe('OUTER DESCRIBE', function() {
  console.log('OUTER DESCRIBE');

  beforeAll(() => {
    console.log('FIRST BEFORE ALL');
  });

  afterAll(() => {
    console.log('FIRST AFTER ALL');
  });

  beforeEach(() => {
    console.log('FIRST BEFORE EACH');
  });

  it('FIRST it', () => {
    console.log('FIRST IT STATEMENT');
    expect(true).to.be.true;
  });

  describe('INNER DESCRIBE - ', () => {
    beforeAll(() => {
      console.log('INNER BEFORE ALL');
    });

    beforeEach(() => {
      console.log('INNER BEFORE EACH');
    });
    console.log('INNER DESCRIBE');

    it('2nd it', () => {
      console.log('2nd IT statement');
      expect(true).to.be.true;
    });

    it('3rd it', () => {
      console.log('3rd IT statement');
      expect(true).to.be.true;
    });

    describe('DEEPER INNER DESCRIBE - ', () => {
      console.log('DEEPER INNER DESCRIBE');
      it('4th it', () => {
        console.log('4th IT statement');
        expect(true).to.be.true;
      });
    });
  });

  it('LAST it', () => {
    console.log('LAST IT STATEMENT');
    expect(true).to.be.true;
  });
});
