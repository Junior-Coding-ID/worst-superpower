[![make.fun · u-suroto-worst-superpower-461dcdbe](https://make.fun/badge/u-suroto-worst-superpower-461dcdbe.svg)](https://make.fun/bounty/u-suroto-worst-superpower-461dcdbe?utm_source=github&utm_medium=readme&utm_campaign=u-suroto-worst-superpower-461dcdbe)
[![make.fun · u-suroto-worst-superpower-461dcdbe · rank](https://make.fun/badge/u-suroto-worst-superpower-461dcdbe/Junior-Coding-ID/worst-superpower/rank.svg)](https://make.fun/bounty/u-suroto-worst-superpower-461dcdbe)
[![make.fun · u-suroto-worst-superpower-461dcdbe · reward](https://make.fun/badge/u-suroto-worst-superpower-461dcdbe/Junior-Coding-ID/worst-superpower/reward.svg)](https://make.fun/bounty/u-suroto-worst-superpower-461dcdbe)

# Worst Superpower

Invent the most useless superpower in one line of 140 characters.

## The entry

> I can summon a single sock. Not a pair. Just one sock, already slightly damp, from a dryer three towns away.

108 characters, one line, ASCII.

## How it works

`main.ts` (Node-only, no dependencies) writes the line above byte-exact to
`$MAKEFUN_OUTPUT/entry.txt` (default `/output`), with no trailing newline.
Before writing it gates the text: exactly 108 characters, 1–140, single line,
ASCII only, no leading/trailing whitespace. After writing it reads the file
back and throws if it differs byte-for-byte.

Run it:

```sh
node main.ts
```
