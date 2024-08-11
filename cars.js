#!/usr/bin/env node
import * as commands from './commands.js'
//import { deleteTodoCommand } from './commands.js'
//import { id } from './db.js'

const userInputs = process.argv
const cmd = userInputs[2]
let id = userInputs[3]
let string = userInputs[4]

switch (cmd) {
  case 'list':
    await commands.list()
    break

  case 'done':
    await commands.deleteTodoCommand(id)
    break

  case 'add':
    await commands.addTodoCommand(string)
    break
  case 'update':
    await commands.editTodoCommand(id, string)
    break
  default:
    console.log(`I don't understand that command: ${cmd}`)
}
