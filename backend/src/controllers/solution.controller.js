import { createOne, updateOne } from '../services/solution.service'

export const create = async (req, res) => {
  let newSolution = { solutionValue: req.body.solutionValue }
  await createOne(newSolution)
  return res.send({ newSolution })
}

export const update = async (req, res) => {
  let newSolution = { solutionValue: req.body.solutionValue }
  await updateOne(newSolution)
  return res.send({ newSolution })
}
