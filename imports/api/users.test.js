import expect from 'expect'
import { Meteor } from 'meteor/meteor'
import { validateNewUser } from './users'

if (Meteor.isServer) {
  describe('Users', function () {
    it('should allow valid email addresses', function () {
      let testUser = {
        emails: [
          { address: 'valid@email.com' }
        ]
      }

      let result = validateNewUser(testUser)
      expect(result).toBe(true)
    })

    it('should reject invalid email addresses', function () {
      let testUser = {
        emails: [
          { address: 'invalid-email' }
        ]
      }

      expect(() => {
        validateNewUser(testUser)
      }).toThrow()
    })
  })
}