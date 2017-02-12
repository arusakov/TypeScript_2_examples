declare const fetch: any

//
// part 1
//

namespace API {
    function call(url: string, data?: any): Promise<any> {
        return fetch(/* ... */)
    };

    call('/add', { name: 'name' }).then((res) => {
        res // any
    })

    call('/abb') // Gotcha!
    call('/add', { title: 'name '}) // Gotcha again!
}



//
// part 2
//


function call(url: '/list', data?: undefined): Promise<[{ id: number, name: string }]>
function call(url: '/add', data: { name: string}): Promise<{ id: number }>
function call(url: string, data?: any) {
    return fetch(/* ... */)
}

call('/abb', { name: 'x' }) // ERROR
call('/add', { name: 'x' }).then((res) => {
    res.name    // ERROR
    res.id      // OK
})

call('/list', {}) // ERROR
call('/list').then((res) => {
    res // [{ id: number, name: string }]
})