# MD Tools
![icon48](https://github.com/Xiamu-ssr/edge-plugin/assets/77220168/bbb5a0b9-0dbc-4839-9fc0-630f7540f363)
v1.0

简单的Edge浏览器插件，主要面向CSDN等基于MD撰写文章时的便捷工具。edge插件商店搜索"MD Tools"即可。

## 目前支持的功能

### 功能一. 识别行内代码
#### 示例1
**原文**
```text
这边采用常用的消费者-生产者模型，使用默认的Direct类型exchange。
不懂的可以先继续学习rabbitmq再来实践。
```
这边采用常用的消费者-生产者模型，使用默认的Direct类型exchange。
不懂的可以先继续学习rabbitmq再来实践。

**新文**
```text
这边采用常用的消费者-生产者模型，使用默认的`Direct`类型`exchange`。
不懂的可以先继续学习`rabbitmq`再来实践。
```
这边采用常用的消费者-生产者模型，使用默认的`Direct`类型`exchange`。
不懂的可以先继续学习`rabbitmq`再来实践。

#### 示例2
**原文**
```text
定义`GlobalExceptionHandler`类，拦截所有异常。
@RestControllerAdvice注解使得你可以在GlobalExceptionHandler 中处理异常，
`@ExceptionHandle`注解用于将指定异常绑定到处理的函数上。
如下使用`@ExceptionHandler(Exception.class)`即对所有异常进行捕获处理。
```
定义`GlobalExceptionHandler`类，拦截所有异常。
@RestControllerAdvice注解使得你可以在GlobalExceptionHandler 中处理异常，
`@ExceptionHandle`注解用于将指定异常绑定到处理的函数上。
如下使用`@ExceptionHandler(Exception.class)`即对所有异常进行捕获处理。

**新文**
```text
定义`GlobalExceptionHandler`类，拦截所有异常。
`@RestControllerAdvice`注解使得你可以在`GlobalExceptionHandler` 中处理异常，
`@ExceptionHandle`注解用于将指定异常绑定到处理的函数上。
如下使用`@ExceptionHandler(Exception.class)`即对所有异常进行捕获处理。
```
定义`GlobalExceptionHandler`类，拦截所有异常。
`@RestControllerAdvice`注解使得你可以在`GlobalExceptionHandler` 中处理异常，
`@ExceptionHandle`注解用于将指定异常绑定到处理的函数上。
如下使用`@ExceptionHandler(Exception.class)`即对所有异常进行捕获处理。