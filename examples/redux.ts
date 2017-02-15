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
                action.data
            case ACTION_TYPE_2:
                (action as Action2).data
        }
    }
}

//
// part 2
//

namespace ReduxAfter {

    const ACTION_TYPE_1 = 'type1'
    const ACTION_TYPE_2 = 'type2'

    type Action =
        { type: typeof ACTION_TYPE_1, data: number } |
        { type: typeof ACTION_TYPE_2, data: number }

    function reduce(state, action: Action) {
        switch (action.type) {
            case ACTION_TYPE_1:
                action.data // number
            case ACTION_TYPE_2:
                action.data // string
        }
    }
}