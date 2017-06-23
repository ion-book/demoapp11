import { Demoapp10Page } from './app.po';

describe('demoapp10 App', () => {
  let page: Demoapp10Page;

  beforeEach(() => {
    page = new Demoapp10Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
