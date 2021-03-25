const { chromium } = require('playwright');
let browser;
let page;
import {Ecommerce} from '../pages/Ecommerce';

beforeAll(async () => {
  browser = await chromium.launch({ headless: false, slowMo: 1000 });
});
afterAll(async () => {
  // await browser.close();
});
beforeEach(async () => {
  page = await browser.newPage();
});
afterEach(async () => {
  // await page.close();
});
it('should work', async () => {
  const ecommerce = new Ecommerce(page);
  await ecommerce.open();
  // // await ecommerce.createAccount("test")
  // // await ecommerce.signIn("test","test")
  // await ecommerce.search("test")
  await ecommerce.createAccount({
    email: "ucrafttest@mailinator.com",
    username: "test"
  });

  // setTimeout(() => )
  
  // jest.setTimeout(20000)
  
});