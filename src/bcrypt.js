const bcrypt = require('bcryptjs')

const password = 'Password1!'

const hashedPassword1 = bcrypt.hashSync(password, 10)
console.log(hashedPassword1)

const hashedPassword2 = bcrypt.hash(password, 10)
console.log(hashedPassword2)

const matched1 = bcrypt.compare(password, hashedPassword1)
console.log(matched1)

const matched2 = bcrypt.compareSync(password, hashedPassword1)
console.log(matched2)

