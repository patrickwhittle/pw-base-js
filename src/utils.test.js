import { getClasses } from './utils'

const classes = {
  foo: true,
  bar: false,
}

const classesJson = JSON.stringify(classes)

test(`expects getClasses(${classesJson}) to equal 'foo'`, () => {
  expect(getClasses(classes)).toBe('foo')
})
