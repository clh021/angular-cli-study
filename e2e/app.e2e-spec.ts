import { LeeNg2Page } from './app.po';

describe('lee-ng2 App', function() {
  let page: LeeNg2Page;

  beforeEach(() => {
    page = new LeeNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
