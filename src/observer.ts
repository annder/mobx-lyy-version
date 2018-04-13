export function observer<T extends
    { new(...arg: any[]): any }>
    (constructor: T):
    T | void {
    return class extends constructor {
        
    }
}