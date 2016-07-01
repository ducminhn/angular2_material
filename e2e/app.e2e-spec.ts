import { Angular2MeterialPage } from './app.po';

describe('angular2-meterial App', function() {
  let page: Angular2MeterialPage;

  beforeEach(() => {
    page = new Angular2MeterialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
