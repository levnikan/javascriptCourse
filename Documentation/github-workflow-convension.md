# Github workflow naming convention and tips

- [Branch naming/workflow](#branch-namingworkflow)
- [Pull request naming/workflow](#pull-request-namingworkflow)

## Branch naming/workflow

Branch name: `<type>/<issue-number>-<name-separated-by-dashes>`

Where type is one of below:

- `chore` = general improvements / refactors / add missing tests
- `feat` = new feature
- `fix` = for bugs

### Create a new branch and checkout into it

Example: `git checkout -b chore/2077-unknown-url-redirect-route`

### Stage files for commit

Add changes: `git add <changed files>`
Example: `git add .`

### Commit files

Commit message: `<url from the issue> <your message>`
Example: `git commit -m “https://github.com/levnikan/javascriptCourse/issues/5 add more documentation”`

### Push files to remote repository

Push to created branch: `git push origin <your branch name>`
Example: `git push chore/2077-unknown-url-redirect-route`

## Pull request naming/workflow

Pull request title: `<type>/<issue-number> <Description like in ticket>`

Description: `Closes <url from Zenhub issue>` and description on the new line, if necessary.

Example:

```
Closes https://github.com/levnikan/javascriptCourse/issues/5
This PR:
- adds documentation for git workflow
```

Don’t forget to:

- Test locally
- Assign yourself to the issue
- Put labels e.g. Front End, Bug, etc.
- Set estimate (if possible)
- Assign yourself to pull request
- Ask someone to review
- Connect pull request to the existing issue
- Remove your branch once the pull request has been merged
