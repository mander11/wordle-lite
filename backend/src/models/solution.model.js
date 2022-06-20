import mongoose from 'mongoose'

const solutionSchema = new mongoose.Schema(
  {
    solutionValue: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

export const Solution = mongoose.model('solution', solutionSchema)
