import { BurajiruPontoAdminPage } from './app.po';

describe('burajiru-ponto-template App', () => {
  let page: BurajiruPontoAdminPage;

  beforeEach(() => {
    page = new BurajiruPontoAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
