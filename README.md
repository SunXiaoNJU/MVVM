# README

## 1. Author

Name：孙骁

QQ：2375367814

## 2. 代码结构

### 2.1 MVVM

MVVM 框架主文件，主要为模板的赋值和数据劫持以及模板的编译

### 2.2 observer

数据劫持，包含数据劫持的构建体和响应式定义，发布订阅的类定义

### 2.3 watcher

观察者模式

### 2.4 index

框架展示 html 文件，包含模块的引入和模板定义

### 2.5 test

主要存放 mocha 单元测试文件

## 3. 主要功能

### 3.1 文本模板双向绑定

<center>文本模板body</center>

![](https://seec-homework.oss-cn-shanghai.aliyuncs.com/201250060文本模板双向绑定script.png)

<center>前端展示部分</center>

![](https://seec-homework.oss-cn-shanghai.aliyuncs.com/201250060文本模板双向绑定展示.png)

### 3.2 输入框属性双向绑定

实现了输入框 v-model 属性的双向绑定，将 v-model 内的属性名用定义好的数据替换

同时支持框架内属性名自修改和属性增加

### 3.3 数据劫持

数据劫持，为每个对象和属性重新构建 get 和 set 方法，并支持自定义 get 和 set 方法内容

![](https://seec-homework.oss-cn-shanghai.aliyuncs.com/201250060数据劫持.png)

### 3.4 发布订阅和观察者模式

若模板数据发生改变（数据库数据或用户输入），相应的双向绑定数据将通知所有模板并动态发生改变

<center>原数据</center>

![](https://seec-homework.oss-cn-shanghai.aliyuncs.com/201250060发布订阅原.png)

<center>修改后</center>

![](https://seec-homework.oss-cn-shanghai.aliyuncs.com/201250060发布订阅后.png)

## 4. 单元测试

单元测试代码位于 text/internal/\*\*.test.js 中

单元测试的方法为分别测试各个模块中的成员函数（而不是对整个模块进行测试）

单元测试覆盖 compile，observer，watcher 模块

<center>compile.js模块</center>

![](https://seec-homework.oss-cn-shanghai.aliyuncs.com/201250060单元测试compile.png)

<center>observer.js模块</center>

![](https://seec-homework.oss-cn-shanghai.aliyuncs.com/201250060单元测试observer.png)

<center>watcher.js模块</center>

![](https://seec-homework.oss-cn-shanghai.aliyuncs.com/201250060单元测试watcher.png)
