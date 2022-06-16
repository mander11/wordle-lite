import { Solution } from '../models/solution.model'

export const createOne = async newSolution => {
  return Solution.create(newSolution)
}

export const updateOne = async _newSolution => {
  const FIND_ONE_QUERY_FILTER = {}

  Solution.findOneAndUpdate(FIND_ONE_QUERY_FILTER, _newSolution, {
    new: true
  })
    .lean()
    .exec()
}

export const getCurrentSolution = async () => {
  return Solution.findOne()
    .lean()
    .exec()
}
