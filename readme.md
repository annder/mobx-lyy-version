## Decorator factory

```js
    function Observer(target,key,descriptor){
        return {
            ...descriptor,
            value:false
        }
    }    
```


## Class Decorator with Typescript

How to fix mixin class must have a constructor with a single rest parameter type any[]?

https://blog.mariusschulz.com/2017/05/26/typescript-2-2-mixin-classes#mixins-with-methods

```diff
    function observerable<T extends {new(...args:any[])}>(constructor:T) { 
        return class extends constructor {
-            constructor (){
-            super();
+ constructor (...args){
+   super(...args);
}
            }
        }
    }
```


## Created mixin methods with class 


```ts
    function observerable<T extends {new (...args):{}}>(constructor:T){
        return class extends constructor {
            public name = 12;
            public initName(){
                this.name = "ann"
            }
        }
    } 
```

Usge:


```ts
    class A {
        public nub:number = 12;
    }
    const CreateInitName = observerable(A);
    const Af = new CreateInitName();
    console.log(Af.initName())
```


## Created parmar type

```ts
    function MyClass(target:Object,propertyKey:string:symol) {

    }
```

You can immplement to typescript under it:

```ts
declare type ClassDecorator = <TFunction extends {new(...args:any[]):any}>(construcotr:TFunction) => TFunction | void;
declare type PropertyDecorator = (target: Object, propertyKey: string | symbol) => void;
declare type MethodDecorator = <T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T> | void;
declare type ParameterDecorator = (target: Function, propertyKey: string | symbol, parameterIndex: number) => void;
```

