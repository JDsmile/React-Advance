const { promisify } = require('util')
const toilet = require('toiletdb')
const os = require('os')
const path = require('path')

const shuttles = [
  {
    date: 10, // 10 days from now
    name: 'discovery',
    crew: [],
    remainingCapacity: 1
  },
  {
    date: 3, // 3 days from now
    name: 'sputnik-2',
    crew: [],
    remainingCapacity: 3
  },
  {
    date: -5, // 5 days ago
    name: 'tom-hanks',
    crew: [],
    remainingCapacity: 0
  }
]

module.exports = {
  init: async function () {
    const randomString = Math.random()
      .toString()
      .substr(-6, 6)
    const dbFilename = path.join(os.tmpdir(), `shuttle-${randomString}.json`)
    const db = toilet(dbFilename)
    const methodsByName = {
      getDbFilename: () => dbFilename,
      open: promisify(db.open.bind(db)),
      read: promisify(db.read.bind(db)),
      write: promisify(db.write.bind(db)),
      delete: promisify(db.delete.bind(db))
    }
    await methodsByName.open()
    for (const shuttle of shuttles) {
      await methodsByName.write(shuttle.name, JSON.stringify(shuttle))
    }
    return methodsByName
  }
}
