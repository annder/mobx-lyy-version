type ProperDecorator = (target: Object, properKey: string | symbol) => void;
export function observerable(
    target: Object ,
    properKey: string | symbol): void | { ref: ProperDecorator, deep: ProperDecorator } {
    let currentTarget: any = target;
    let storeDescriptor: Array<any> = [];
    try {
        storeDescriptor.push(target);
    }
    finally {
        currentTarget = target;
    }

    return {
        ref(target: Object, properKey: string | symbol): void {

        },
        deep(target: Object, properKey: string | symbol): void {
            if (instanceof new target.constructor[properKey]().properKey  === Array) {
                ///...
            }
        }
    }
}
