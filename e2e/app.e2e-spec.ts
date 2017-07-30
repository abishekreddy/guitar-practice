import { GuitarPracticePage } from './app.po';

describe('guitar-practice App', () => {
  let page: GuitarPracticePage;

  beforeEach(() => {
    page = new GuitarPracticePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
