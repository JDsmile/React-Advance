const { init: initShuttleDb } = require('./dbs/shuttle')
const createSpaceTravelEmitter = require('./private/space-travel-emitter')
const log = require('./logger')
const shuttleUtil = require('./util/shuttle')
const cadet = require('./cadet')

const listen = async () => {
  // issue#1: add await keyword because the function is async
  const shuttleDb = await initShuttleDb()

  const spaceTravelEmitter = createSpaceTravelEmitter()
  let totalCrewCount = 0
  spaceTravelEmitter.on('space-request', evt => {
    log('space-request', evt)
    ++totalCrewCount
    onSpaceTravelRequested({ shuttleDb, ...evt })
  })
  spaceTravelEmitter.on('end', async evt => {
    shuttleUtil.validateShuttles({
      shuttleMap: await shuttleDb.read(),
      crewCount: totalCrewCount
    })
    log(
      [
        'no more space requests, exiting.',
        `db can be viewed: ${shuttleDb.getDbFilename()}`
      ].join(' ')
    )
  })
}

const onSpaceTravelRequested = async ({ shuttleDb, cosmonautId }) => {
  const shuttles = await shuttleDb.read()
  console.log(shuttles)
  let data = []
  for (let key in shuttles) {
    let type = typeof shuttles[key]
    type === 'string'
      ? data.push(JSON.parse(shuttles[key]))
      : data.push(shuttles[key])
  }

  // issue#2: shuttles is an object does not contain the function "finds"
  // convert shuttle into an array of objects,so can use the find method
  const availableShuttle = data.find(
    // typo: change capacity to remainingCapacity
    ({ date, remainingCapacity }) => date >= 0 && remainingCapacity > 0
  )
  // console.log("find", availableShuttle);
  if (!availableShuttle) {
    throw new Error(
      `unable to schedule cosmonautId ${cosmonautId}, no shuttles available`
    )
  }
  log(
    `found shuttle for cosmonautId ${cosmonautId}, shuttle ${
      availableShuttle.name
    }`
  )
  --availableShuttle.remainingCapacity
  availableShuttle.crew.push(cosmonautId)
  await shuttleDb.write(availableShuttle.name, availableShuttle)
  // remove await since logWelcomeLetter is not a async function
  cadet.logWelcomeLetter({ cosmonautId, shuttle: availableShuttle })
}

module.exports = {
  listen
}
