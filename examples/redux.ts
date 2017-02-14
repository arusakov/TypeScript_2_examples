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

    type User = { id: number, name: string }

    function reduce(state: User, action: Action) {
        switch (action.type) {
            case ACTION_TYPE_1:
                return Object.assign(state, {
                    id: (action as Action1).data
                })
            case ACTION_TYPE_2:
                return Object.assign(state, {
                    name: (action as Action1).data // Gotcha!
                })
        }
    }
}

//
// part 2
//

namespace ReduxBefore {

    const ACTION_TYPE_1 = 'type1'
    const ACTION_TYPE_2 = 'type2'

    type Action =
        { type: typeof ACTION_TYPE_1, data: number } |
        { type: typeof ACTION_TYPE_2, data: number }

    type User = { id: number, name: string }

    function reduce(state: User, action: Action) {
        switch (action.type) {
            case ACTION_TYPE_1:
                return Object.assign(state, {
                    id: action.data // number
                })
            case ACTION_TYPE_2:
                return Object.assign(state, {
                    name: action.data // string
                })
        }
    }
}