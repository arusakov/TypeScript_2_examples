//
// part 1
//

const ACTION_TYPE1 = 'type1'
const ACTION_TYPE2 = 'type2'

type Action = 
    { type: typeof ACTION_TYPE1, data: number } |
    { type: typeof ACTION_TYPE2, data: string }

//
// part 1
//

declare const action: Action
switch (action.type) {
case ACTION_TYPE1:
    action.data // number
    break
case ACTION_TYPE2:
    action.data // string
    break
}