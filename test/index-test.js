var index = require("../index.js")

describe('what-is-a-test', () => {
  describe('Name', () => {
    it('returns "Susan', () => {
      expect("actual").toEqual('Susan')
    })
  })


  describe('Height', () => {
    it('is 74 inches tall', () => {
      expect(index.height).toBeLessThan('40')
    })
  })

  describe('Message', () => {
    it('gives the name and height', () => {
      expect(index.message).toInclude(index.name)
      expect(index.message).toInclude(index.height)
    })
  })

})

