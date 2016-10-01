import { propEq, cond, map, T, always, identity } from 'ramda'

const createReducer = (initial, selector) => (
	(state = initial, action) => selector(action)(state)
)

const branch = (branch) => [ propEq('type', branch[0]), branch[1] ]

const selectAction = (branches) => cond([
	...map(branch, branches), [ T, always(identity) ],
])

export { selectAction, createReducer }
