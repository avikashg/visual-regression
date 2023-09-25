// const Pageres = require('pageres');
import Pageres from "pageres";

export const takeScreenshots = async param => {
  const paramObject = {
    delay: 2,
    launchOptions: { waitUntil: 'networkidle2', headless : 'new' },
    filename: `${param['page_name']}-<%= size %>`,
    //crop: true
  };
  if (param['page_name'].startsWith('admin')) {
    paramObject['beforeScreenshot'] = beforeScreenshotHandler;
    console.log(`processing - ${param['url']}`);
    paramObject['url'] = param['url'];
  }

  await new Pageres(paramObject)
    .source(param['url'], param['view_ports'])
    .destination(`${param['screenshots_dir']}/${param['time_stamp']}/${param['env']}`)
    .run();
  console.log(' --- run for - ' + JSON.stringify(param));
};

async function beforeScreenshotHandler(page, browser) {
  // if you want to perform any action on webpage before taking the screenshot
  // example, login into application or closing any popup etc
  // use puppeteer code here to handle the pre screenshot workflow
  console.log(`called before screenshot ${this.url}`);

  
}
