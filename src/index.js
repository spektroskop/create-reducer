import { propEq, cond, map, T, always, identity } from 'ramda'

const branch = (branch) => [ propEq('type', branch[0]), branch[1] ]

const selectAction = (branches) => cond([
	...map(branch, branches), [ T, always(identity) ],
])

export const createReducer = (initial, branches) =>  (
	(state = initial, action) => (
		selectAction(branches)(action)(state)
	)
)
