//
// part 1
//

interface Thing {
    name: string
    size: number
}

type K1 = keyof Thing  // "name" | "size"
type P1 = Thing["name"]  // string
type P3 = Thing["name" | "size"]  // string | number

//
// part 2
//

declare function
getProperty<T, K extends keyof T>(obj: T, key: K): T[K];

declare const thing: Thing
getProperty(thing, "name")  // Ok, type string
getProperty(thing, "count")  // Error
