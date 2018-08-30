AngularJS1 Directive `scope: { myAttr: '<outAttr' }` Demo
=========================================================

```
scope: { myAttr: '<outAttr' }
```

- `scope: {}`: 表示directive独立了，不再使用外层controller中的`$scope`了
- `outAttr`: 表示外面需要使用`out-attr="something"`的方式向我传参数
    - `something`必须是一个变量名
    - 因为可以传递任何类型，所以不能有表达式`{{ }}`（不像`@outAttr`）
- `myAttr`: 表示directive里面使用`myAttr`这个名字对应`outAttr`传过来的对象，可以通过`$scope.myAttr`引用它

最重要的：

`<`表示“单项绑定”。在AngularJs中，单项绑定表示：

- 最开始的时候，`outAttr`和`myAttr`指向同一个对象（所以不论哪边修改了属性，另一边都能跟着变）
- 如果`outAttr`引用指向了新的对象，`myAttr`会跟着变，两边还是指向同一个对象；
- 但是，如果`myAttr`引用指向了新的对象，`outAttr`不会变，还是指向原来那个

与双向绑定`scope: { myAttr: '=outAttr' }`不同的是：在双向绑定中，不管哪边的引用变了，另一边都会跟着变，它们始终指向同一个对象。

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