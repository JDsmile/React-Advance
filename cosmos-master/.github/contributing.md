# contributing

## setup

### install

* [nvm](https://github.com/creationix/nvm#installation) for node & node version management

### bootstrapping

- **always** run `nvm use` in the project root before running any nodejs or npm script/cmd.
it's imperative that we stay aligned with node versions for consistent runtime behavior and predictable dependency lockfiles.
- `npm install` to install

## code of conduct

the code of conduct (coc) explains the *bare minimum* behavior
expectations this project requires of its contributors.  we adhere to the nodejs coc.
[please read it before participating](https://github.com/nodejs/node/blob/master/code_of_conduct.md).

## issue contributions

when opening new issues or commenting on existing issues on this repository
please make sure discussions are related to concrete technical issues with our package.

## code contributions

this document will guide you through the contribution process.

### step 1: fork

fork the project and check out your
copy locally.

```text
$ git clone git@github.com:username/<PROJECT_NAME>.git
$ cd <PROJECT_NAME>
$ git remote add upstream git://github.com/<ORG>/<PROJECT_NAME>.git
```

#### which branch?

for developing new features and bug fixes, the `master` branch should be pulled
and built upon.

### step 2: branch

create a branch and start hacking:

```text
$ git checkout -b my-branch -t origin/master
```

### step 3: commit

we follow the default settings for [semantic-release](https://github.com/semantic-release/semantic-release).  please see [the default commit message format](https://github.com/semantic-release/semantic-release#default-commit-message-format) for participation instructions.

commits should be small, targeted, and focused.  unfocused changes need to be split into multiple prs and are subject to friendly but stubborn rejection.

### step 4: test

`npm run test`

### step 5: push

```text
$ git push origin my-branch
```

from github, click the 'pull request' button and fill out the form.

pull requests are usually reviewed within a few days.

### step 6: discuss and update

you will probably get feedback or requests for changes to your pull request.
this is a big part of the submission process, so don't be disheartened!

to make changes to an existing pull request, make the changes to your branch.
when you push that branch to your fork, github will automatically update the
pull request.

you can push more commits to your branch:

```text
$ git add my/changed/files
$ git commit
$ git push origin my-branch
```

or you can rebase against master:

```text
$ git fetch --all
$ git rebase origin/master
$ git push --force-with-lease origin my-branch
```

or you can amend the last commit (for example if you want to change the commit
log).

```text
$ git add any/changed/files
$ git commit --amend
$ git push --force-with-lease origin my-branch
```

**important:** the `git push --force-with-lease` command is one of the few ways
to delete history in git. before you use it, make sure you understand the risks.
if in doubt, you can always ask for guidance in the pull request or on
[irc in the #node-dev channel](https://webchat.freenode.net?channels=node-dev&uio=d4).

feel free to post a comment in the pull request to ping reviewers if you are
awaiting an answer on something. if you encounter words or acronyms that
seem unfamiliar, check out this
[glossary](https://sites.google.com/a/chromium.org/dev/glossary).

note that multiple commits often get squashed when they are landed (see the
notes about [commit squashing](#commit-squashing)).

### step 7: landing

in order to get landed, a pull request needs to be reviewed and
[approved](#getting-approvals-for-your-pull-request) by
at least one collaborator and pass a
[ci (continuous integration) test run](#ci-testing).
after that, as long as there are no objections
from a collaborator, the pull request can be merged.

### pull request approvals

a pull request is approved either by saying "+1" or a thumbs up emoji. if the author
has merge access, he/she may merge after getting collaborator approval. otherwise,
the collaborator should recognize the case where the change author does not have
merge access, and should merge on behalf of the author.

github's pull request review feature can be used during the process.
for more information, check out
[the video tutorial](https://www.youtube.com/watch?v=hw0rpajqm4g)
or [the official documentation](https://help.github.com/articles/reviewing-changes-in-pull-requests/).

after you push new changes to your branch, you need to get
approval for these new changes again, even if github shows "approved"
because the reviewers have hit the buttons before.
