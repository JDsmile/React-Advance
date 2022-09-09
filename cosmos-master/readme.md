# cosmos :rocket:

cosmos is a _space_ app.  and it's really, _really_ busted.  please, debug and repair it into a working application!

<div width='100%'>
  <img src='./img/naut.gif' width='200px' style='margin: auto; display: inline-block;' />
</div>

## context

cosmos is supposed help register cosmonauts for their upcoming space travels.

cosmos:

- receives requests to go to space
- sees what shuttles are available
- selects a shuttle
- adds a cosmonaut to a shuttle for departure
- updates the shuttle data
- `console.log`s an invitation with shuttle depature information to the cosmonaut

lots of people want to go to space, but it is not working!

## getting started

### install

- install [nvm](https://github.com/creationix/nvm)
- `nvm use`
- `npm install`

### run

`node src/bin.js`

start a debug session using `node debug ...` or, use your editor's preferred debug scheme using `--inspect/--inspect-brk`

## administrator

for the keeper of secret knowledge, get the decrypt key from the responsible party, then run `npm run decrypt-guide` (or `yarn decrypt-guide`) to see the problems/solutions in plaintext.

you will need to have gpg installed on your computer (e.g. `brew install gnupg`).

to save any changes, run `npm run encrypt-guide` (or `yarn encrypt-guide`) and commit the encrypted file.
