import fs from 'fs';
import { EventEmitter } from 'events';

// 创建可读流类，继承 EventEmitter
class ReadStream extends EventEmitter {
  constructor(path, options = {}) { //options默认空对象
      super();
      this.path = path;
      this.highWaterMark = options.highWaterMark || 64 * 1024;
      this.autoClose = options.autoClose || true;
      this.start = options.start || 0;
      this.pos = this.start; //pos会随着读取的位置改变
      this.end = options.end || null;
      this.encoding = options.encoding || null;
      this.flags = options.flags || 'r';
      this.flowing = null; //非流动模式
      //声明一个buffer表示都出来的数据
      this.buffer = Buffer.alloc(this.highWaterMark);
      this.open(); //打开文件 fd
  }
