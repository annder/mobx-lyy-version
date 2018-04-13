type derive = { bound: (target: Object, propertyKey: string | symbol) => void }
type ActioDecorator<T> = TypedPropertyDescriptor<T> | void;
type FunctionReturn<T> = (target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) => void;
export function action<T>
    (target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<T>):
    ActioDecorator<T> | derive | FunctionReturn<T> {
    if (propertyKey) {
        return (target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) => {
a
        }
    }
    return {
        bound: (target: Object, propertyKey: string | symbol): void => {
        }
    }
}

