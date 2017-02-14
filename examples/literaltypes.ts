//
// part 0
//

namespace WhyLiteralTypes {
    declare const process: {
        env: {
            NODE_ENV: string;
        }
    }

    if (process.env.NODE_ENV !== 'production') {
        // bla bla bla
    }

    type fontWeight = number | string
}

//
// part 1
//

namespace LiteralTypes {
    type fontWeight =
        'initial' | 'inherit' | 'unset' |
        'normal' | 'bold' | 'bolder' | 'lighter' |
        100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
}

const t: true = true        // t: true
const f: false = false       // f: false

const x: 1 = 1           // x: 1
const y: 1e3 = 1e3    // y: 1000

const l: '' = ''          // l: ''
const m: 'm' = 'm'         // m: 'm'

//
// part 2
//

const widening = 1
const nonWidening: 2 = 2

const obj1 = { type: widening }    // { type: number }
const obj2 = { type: nonWidening } // { type: 2 }
