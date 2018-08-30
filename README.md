AngularJS1 Directive `scope: { myAttr: '@outAttr' }` Demo
=========================================================

```
scope: { myAttr: '@outAttr' }
```

- `scope: {}`: 表示directive独立了，不再使用外层controller中的`$scope`了
- `outAttr`: 表示外面需要使用`out-attr="Hi {{ something }}"`的方式向我传参数
    - 可以自由的使用表达式
    - 最终得到的是一个字符串，不会是其它类型
- `myAttr`: 表示directive里面使用`myAttr`这个名字，并且可以通过`$scope.myAttr`引用值
- `@`: 关键点，表示“单向”改变，只能从外部到内部
    - 如果外层改变了`something`的内容，则`myAttr`跟着变
    - 但是directive内部改变了`myAttr`的值，`something`不会变

```
npm install
open index.html
```

![demo](./images/demo.jpg)

Resources
---------

- AngularJS1: <https://angularjs.org/>
- directive scope api: <https://docs.angularjs.org/api/ng/service/$compile#-scope->
- $element api: <https://docs.angularjs.org/api/ng/function/angular.element#angularjs-s-jqlite>