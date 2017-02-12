declare const fetch: any

//
// part 1
//

namespace API {
    declare function
    call(url: string, data?: any): Promise<any>

    call('/add', { name: 'name' }).then(res => {
        res // any
    })

    call('/abb') // Gotcha!
    call('/add', { title: 'name '}) // Gotcha again!
}



//
// part 2
//

type User = { id: number, name: string }

function call(url: '/list', data?: undefined): Promise<User[]>
function call(url: '/add', data: { name: string}): Promise<number>
function call(url: string, data?: any) {
    return fetch(/* ... */)
}

//
// part 3
//

call('/abb', { name: 'x' }) // ERROR
call('/add', { name: 'x' }).then(res => {
    res     // number
})

call('/list', {}) // ERROR
call('/list').then(res => {
    res     // User[]
})
