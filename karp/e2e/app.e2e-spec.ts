import { KarpPage } from './app.po';

describe('karp App', function() {
  let page: KarpPage;

  beforeEach(() => {
    page = new KarpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
