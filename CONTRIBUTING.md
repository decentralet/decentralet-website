# Contribution Guide

## Visual Studio Code Setup

Install both the _Prettier_ and _ESLint_ to ensure you code is formatted correctly. After that, go to the settings of VS Code and configure Prettier to be your default formatter.

## Change Types

| Type     | Usage                                                     |
| -------- | --------------------------------------------------------- |
| feat     | new feature                                               |
| fix      | bug fix, typo fix                                         |
| update   | update developed feature, update config, update constants |
| refactor | refactor code                                             |
| docs     | update documentation                                      |
| test     | everything related to testing                             |

---

## Branch Naming Format

&lt;change_type>/&lt;ticket_number>/&lt;simple description>

e.g. **feat/DA-787/import-eao-using-private-key**

---

## Commit Message Format

&lt;change_type>(&lt;ticket_number): &lt;simple description>

e.g.

**fix(DA-12): fix left sidebar width**

**feat(DA-93): prompt user for password input if not login**

---

## Pull Request Title Format

&lt;change_type>(&lt;ticket_number): &lt;summarized description of all commits>

e.g.

**fix(DA-12): fix left sidebar UI**

**feat(DA-93): user authentication**

---

## Pull Request Description Format

Leave empty if not applicable, otherwise any format is accepted.
