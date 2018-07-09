# 全局变量: Node环境

## 补充说明

示例使用补充

## console-1.js 变量注入

- 变量注入可以使用以下占位符，在变量注入位置前会自动添加一个空格
- 消息内容的格式化是通过 util.format 实现，支持以下格式

占位符 | 类型 | 例子
------|-----|-----
%s | String | '%s', 'value'
%d | Number | '%f', 3.14
%j | JSON   | '%j', { name: 'alex }

process 对象是一个 EventEmitter 对象。

标准流总共有3个，stdin、stdout 以及 stderr。在 UNIX 终端中，它们被数字代表。0代表输入流，1代表输出流，2代表错误。这也适用于 Windows。

## 基准测试 arguments-benchmark.js

```bash
babel-node arguments-benchmark.js -r
babel-node arguments-benchmark.js -h
```

这个测试基于 Date.now() 精确到毫秒。

要获取更佳准确的基准，可以使用如下第三方模块，可组合使用

- [benchmark](https://npmjs.org/package/benchmark)
- [microtime](https://npmjs.org/package/microtime)

## 参数解析

对于比较复杂的程序，可以使用参数解析模块。两个最受欢迎的模块是

- [optimist](https://npmjs.org/package/optimist)
  - 将参数转换成一个对象来更容易的操作它。他还支持默认值、自动生成用例，以及简单的验证来确保必须的参数正确性。
- [commander](https://npmjs.org/package/commander)
  - 通过链式 API 让你能够指定你的程序所能接收的参数。

## 退出程序 process.exit()

Node 程序默认返回0的退出状态。这意味着程序正常终止。任何非0状体码被认为是一个错误

- UNIX 中，可以通过 $? 在 shell 中获取状态码
- Windows 中，可以通过 %errorlevel% 获取

## 安全的操作异步接口

有时你想略微延迟一下操作。在传统的 JavaScript 中，或许通过 setTimeout 执行一个很小的延迟是可接受的。然而 Node 提供了一个更有效的方案，process.nextTick。

process.nextTick 方法允许你把一个回调放在下一次事件轮询队列的头上。这意味它可以用来延迟执行，其结果是他比 setTimeout 更有效率。

## 可视化事件轮询: setImmediate 和 process.maxTickDepth

setImmediate 以及 clearImmediate 全局方法接收一个回调参数和可选的参数，它会在下一次 I/O 事件后并在 setTimeout 以及 setInterval 之前执行。

通过这个方法添加的回调函数被推入队列中，并且在每次轮询时执行一个回调。这和 process.nextTick 不同，导致 process.maxTickDepth 回调在每次轮询时都会执行。

传入 process.nextTick 的回调通常在当前事件轮询结束后执行。可以被安全执行的回调数量被 process.maxTickDepth 控制，默认是1000，以允许 I/O 操作可以继续被处理。

NOTE: 上面这里有点疑问？
