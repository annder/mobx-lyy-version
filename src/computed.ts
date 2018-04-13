export function computed<T>(target: Object,
    propertyKey: string,
    descriptor: TypedPropertyDescriptor<T>) {
    return (target: Object,
        propertyKey: string,
        descriptor: TypedPropertyDescriptor<T>) => {
        return {
            ...descriptor,
            get(): void {

            },
            set(): void {

            }
        };
    }
}
