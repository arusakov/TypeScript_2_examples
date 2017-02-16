//
// part 1
//

import { Action } from 'redux'

namespace ReduxBefore {

    const ACTION_TYPE_1 = 'type1'
    const ACTION_TYPE_2 = 'type2'

    interface Action1 extends Action {
        data: number
    }
    interface Action2 extends Action {
        data: string
    }

    function reduce(state, action: Action) {
        switch (action.type) {
            case ACTION_TYPE_1:
                action.data // ERROR: Property 'data' does not exist on type 'Action'
                break
            case ACTION_TYPE_2:
                (action as Action2).data
                break
        }
    }
}

//
// part 2
//

namespace ReduxAfter {

    const ACTION_TYPE_1 = 'type1'
    const ACTION_TYPE_2 = 'type2'

    type ActionLight =
        { type: 'type1', id: number } |
        { type: 'type2', name: string }

    type Action =
        { type: typeof ACTION_TYPE_1, id: number } |
        { type: typeof ACTION_TYPE_2, name: string }

    function reduce(state, action: Action) {
        switch (action.type) {
            case ACTION_TYPE_1:
                action.id // number
                break
            case ACTION_TYPE_2:
                action.name // string
                break
        }
    }
}