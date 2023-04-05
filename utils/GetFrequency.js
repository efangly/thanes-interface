const Frequency = require('../models/Frequency')

exports.FrequencyList = async () => {
  let result = await Frequency.findAll()
  return result
}
