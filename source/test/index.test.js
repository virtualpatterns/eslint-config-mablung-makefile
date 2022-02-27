import { ESLint } from 'eslint'
import Test from 'ava'

const Lint = new ESLint({
  'baseConfig': {
    'extends': '@virtualpatterns/eslint-config-mablung-makefile'
  }
})

Test('arrow-parens', async (test) => {

  let code = 'export const OK = (argument => argument ? true : true)()'
  let result = await Lint.lintText(code)

  // test.log(result[0].messages)
  test.is(result[0].messages.length, 1)

  let message = result[0].messages[0]
  test.is(message.ruleId, 'arrow-parens')

})

Test('comma-dangle', async (test) => {

  let code = 'export const OK = [ true, ]'
  let result = await Lint.lintText(code)

  // test.log(result[0].messages)
  test.is(result[0].messages.length, 1)

  let message = result[0].messages[0]
  test.is(message.ruleId, 'comma-dangle')

})

Test('indent', async (test) => {

  let code = 'export const OK = [\ntrue\n]'
  let result = await Lint.lintText(code)

  // test.log(result[0].messages)
  test.is(result[0].messages.length, 1)

  let message = result[0].messages[0]
  test.is(message.ruleId, 'indent')

})

Test('no-console', async (test) => {

  let code = 'console.log(true)'
  let result = await Lint.lintText(code)

  // test.log(result[0].messages)
  test.is(result[0].messages.length, 1)

  let message = result[0].messages[0]
  test.is(message.ruleId, 'no-console')

})

Test('no-unused-vars', async (test) => {

  let code = 'let value = true'
  let result = await Lint.lintText(code)

  // test.log(result[0].messages)
  test.is(result[0].messages.length, 1)

  let message = result[0].messages[0]
  test.is(message.ruleId, 'no-unused-vars')

})

Test('quotes', async (test) => {

  let code = 'export const OK = "true"'
  let result = await Lint.lintText(code)

  // test.log(result[0].messages)
  test.is(result[0].messages.length, 1)

  let message = result[0].messages[0]
  test.is(message.ruleId, 'quotes')

})

Test('semi', async (test) => {

  let code = 'export const OK = true;'
  let result = await Lint.lintText(code)

  // test.log(result[0].messages)
  test.is(result[0].messages.length, 1)

  let message = result[0].messages[0]
  test.is(message.ruleId, 'semi')

})
