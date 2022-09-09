function maybeParseShuttle (shuttle) {
  if (typeof shuttle === 'string') return JSON.parse(shuttle)
  return shuttle
}

function validateShuttle (shuttle) {
  if (shuttle.remainingCapacity < 0) {
    throw new Error(
      `shuttle is overbooked :(, ${shuttle.remainingCapacity} spaces left`
    )
  }
}

const validateShuttles = ({ shuttleMap, crewCount }) => {
  console.log(shuttleMap)
  const crewCountInShuttles = Object.values(shuttleMap)
    .map(_shuttle => {
      const shuttle = maybeParseShuttle(_shuttle)
      validateShuttle(shuttle)
      return shuttle.crew.length
    })
    .reduce((total, current) => total + current, 0)
  if (crewCountInShuttles !== crewCount) {
    throw new Error(
      `expected ${crewCount}, found ${crewCountInShuttles} crew in shuttles`
    )
  }
}

module.exports = {
  maybeParseShuttle,
  validateShuttles
}
