//
// part 1
//

type One = { a: string, b: number, c: number }

// { a: string, b: number }
type Two = { [P in 'a' | 'b']: One[P] }

type PickProps<T, K extends keyof T> = {
	[P in K]: T[P]
}

// { a: string, b: number }
type Three = PickProps<One, 'a' | 'b'>

//
// part 2
//

declare namespace test {
	type Partial<T> = { [P in keyof T]?: T[P] }
	type Readonly<T> = { readonly [P in keyof T]: T[P] }
	type Pick<T, K extends keyof T> = { [P in K]: T[P] }
	type Record<K extends string, T> = { [P in K]: T }
}
