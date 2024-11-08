{
    function getProperty<T, K extends keyof T>(obj: T, property: K): T[K] {
        return obj[property]
    }   
}