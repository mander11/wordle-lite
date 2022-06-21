import { Solution } from '../models/solution.model'

const createOne = async newSolution => {
  return Solution.create(newSolution)
}

const updateOne = async _newSolution => {
  const FIND_ONE_QUERY_FILTER = {}

  Solution.findOneAndUpdate(FIND_ONE_QUERY_FILTER, _newSolution, {
    new: true
  })
    .lean()
    .exec()
}

const getCurrentSolution = async () => {
  return Solution.findOne()
    .lean()
    .exec()
}

module.exports = { createOne, updateOne, getCurrentSolution }
