import { TfDashboardPage } from './app.po';

describe('tf-dashboard App', () => {
  let page: TfDashboardPage;

  beforeEach(() => {
    page = new TfDashboardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
