const EE = require('events')
const bluebird = require('bluebird')

async function schedule (emitter) {
  await bluebird.delay(20)
  for (const id of [1, 2, 3, 4]) {
    emitter.emit('space-request', { cosmonautId: id })
    if (id !== 1) await bluebird.delay(id * 100)
  }
  await bluebird.delay(100) // yep! otherwise, too many hints for the test taker
  emitter.emit('end', null)
}

module.exports = function create () {
  const emitter = new EE()
  schedule(emitter)
  return emitter
}
