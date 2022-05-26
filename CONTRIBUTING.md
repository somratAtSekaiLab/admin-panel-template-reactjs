# Contribution guide

## Project tools

- Github or Jira for code and issues management

### Branch rules

1. Following branches should be used for primary code management

   1. `main` there can be only this branch. This hold all the latest already released code.

   - in case we are doing tag based release, `main` can be used as stable bleeding edge releasable code.

1. `{type}/{GithubIssueNo or JiraIssueNo}-issue-one-liner` should be the format for branch naming
   1. See [Type](#Type) section for branch `{type}`.
   1. Find `{GithubIssueNo or JiraIssueNo}` in Github.

#### Type

Must be one of the following:

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing
  semi-colons, etc)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **build**: Changes that affect the build system, CI configuration or external dependencies (example scopes: gulp, broccoli, npm)
- **ci**: Any changes to our CI configuration files and scripts (Travis, Circle CI, BrowserStack, SauceLabs, AWS CodeBuild)
- **chore**: Other changes that don't modify `src` or `test` files
