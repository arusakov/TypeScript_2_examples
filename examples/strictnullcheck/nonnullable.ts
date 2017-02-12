//
// part 1
//

declare const obj: { prop: string | undefined }

obj.prop.length // ERROR

if (obj.prop) {
    obj.prop.length // OK
}

obj.prop!.length // OK: ! post-fix expression

//
// part 2
// 

declare function foo1(arg?: string);
declare function foo2(arg: string | undefined);

foo1()      // OK
foo1('')    // OK

foo2()               // ERROR do not match signature
foo2(undefined)      // OK




