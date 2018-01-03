# 测试服务性能

我们如何知道在 Web 服务器处理请求的时候同步执行回满？

一个好的方法是通过 ApacheBench（http://en.wikipedia.org/wiki/ApacheBench）来测试。我们前面的例子显示性能 2 倍下降，在每次同步请求10MB 的文件时，而不是在应用程序设置缓存。

下面是该测试中所使用的命令：

```bash
ab -n 1000 -c 100 "http://localhost:3000"
```
