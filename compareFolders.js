import { getTimeStamp, chunk } from "./util/common.js";
import { takeScreenshots } from "./util/screenshot.js";
import { compareScreenshots } from "./util/compare.js";
import path from "path";
const screenshots_dir = path.join(__dirname, '/screenshots');

(async () => {
  const time_stamp = '1650617738';

  // Step 3. Compare the screenshots
  await compareScreenshots({ time_stamp, screenshots_dir });
  console.log('Finished comparing screenshots!');

  // Step 4. Generate report
})();
