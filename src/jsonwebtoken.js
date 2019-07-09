//how to use JSONWEBTOKEN
const jwt = require('jsonwebtoken')


const userIdentity = {
    id: 'thisIsMyId'
}

const PASS_KEY = 'ESee322df!'
const temperedPASS_KEY = 'ES322df'


const token = jwt.sign( userIdentity, PASS_KEY)
console.log(token)

const decodedUserIdentity = jwt.decode(token)
console.log(decodedUserIdentity)

try {
    const deocodedUserIdentityAfterVerify = jwt.verify(token, temperedPASS_KEY)
} catch (error) {
    console.log('pass key is not correct')
}