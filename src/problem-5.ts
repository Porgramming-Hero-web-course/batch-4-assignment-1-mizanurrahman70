{
    function getProperty<T, K extends keyof T>(obj: T, property: K): T[K] {
        return obj[property]
    }
    const person = { name: "Alice", age: 30 };
    
}