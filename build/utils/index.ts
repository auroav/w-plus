/**
 * 子进程
 * child_process.spawn(command[, args][, options])
 * command <string> 要运行的命令。
 * args <string[]> 字符串参数列表。
 * options <Object>
 *  - cwd <string> | <URL> 子进程的当前工作目录
 *  - stdio <Array> | <string> 子进程的标准输入输出配置。'inherit'：通过相应的标准输入输出流传入/传出父进程
 */
import { spawn } from "child_process";
import { projectRoot } from "./paths";

// 在每个task上增加一个displayName属性
export const withTaskName = <T>(name: string, fn: T) =>
  Object.assign(fn, { displayName: name });


// 在node中开启一个子进程来运行脚本
export const run = async (command: string) => {
  return new Promise((resolve) => {
    // 将命令分割 例如：rm -rf 分割为['rm', '-rf'],进行解构[cmd,...args]
    const [cmd, ...args] = command.split(" ");
    const app = spawn(cmd, args, {
        cwd:projectRoot,
        stdio:"inherit", // 默认情况下 linux才支持 rm -rf
    });
    // 在进程已结束并且子进程的标准输入输出流已关闭之后，则触发 'close' 事件
    app.on('close',resolve)  // 
  });
};
