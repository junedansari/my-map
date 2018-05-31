import { MyMapPage } from './app.po';

describe('my-map App', () => {
  let page: MyMapPage;

  beforeEach(() => {
    page = new MyMapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
