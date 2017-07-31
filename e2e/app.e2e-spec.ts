import { PuntaAltaPage } from './app.po';

describe('punta-alta App', () => {
  let page: PuntaAltaPage;

  beforeEach(() => {
    page = new PuntaAltaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
