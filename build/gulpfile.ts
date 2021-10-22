// 打包方式：串行(series)  并行(parallel)
import { series, parallel } from "gulp";
import { withTaskName,run } from "./utils"

export default series(
  withTaskName("clean", async () => run('rm -rf ./dist'))
);
