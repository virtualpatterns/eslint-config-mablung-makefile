import { createRequire as CreateRequire } from 'module'
import { ESLint as Lint } from 'eslint'
import Test from 'ava'

const Require = CreateRequire(import.meta.url)

// util.inspect.defaultOptions.depth = 5;  // Increase AVA's printing depth

Test('arrow-parens', async (test) => {

  let code = 'console.log((b => b + 1)(42)) // eslint-disable-line no-console'
  let option = {
    'extends': Require.resolve('../index.cjs')
  }

  let lint = new Lint({ 'baseConfig': option })
  let result = await lint.lintText(code)

  test.is(result.length, 1)
  test.is(result[0].messages.length, 1)

  let message = result[0].messages[0]
  test.is(message.ruleId, 'arrow-parens')

})

Test('no-console', async (test) => {

  let code = 'console.log(42)'
  let option = {
    'extends': Require.resolve('../index.cjs')
  }

  let lint = new Lint({ 'baseConfig': option })
  let result = await lint.lintText(code)

  test.is(result.length, 1)
  test.is(result[0].messages.length, 1)

  let message = result[0].messages[0]
  test.is(message.ruleId, 'no-console')

})
