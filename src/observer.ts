export function observer(
    target: Object,
    properKey: string | symbol): void {
    let currentTarget: any = target;
    let storeDescriptor: Array<any> = [];
    try {
        storeDescriptor.push(target);
    }
    finally {
        currentTarget = target;
    }
    console.log(currentTarget);
}