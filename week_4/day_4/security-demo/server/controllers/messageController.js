const bcrypt = require('bcryptjs')
const chats = []

module.exports = {
    createMessage:(req,res)=> {
      const {pin, message} = req.body
      for (i=0;i < chats.length; i++){
        const exists = bcrypt.compareSync(pin, chats[i].pin)

        if(exists){
          chats[i].messages.push(message)
          let chatReturn = {...chats[i]}
          delete chatReturn.pin
          res.status(200).send(chatReturn)
          return
        }

      }

      const salt = bcrypt.genSaltSync(5)
      const hashedPin = bcrypt.hashSync(pin, salt)
      let msgObj = {
        pin: hashedPin,
        messages: [message]
      }
      chats.push(msgObj)
      let chatReturn = {...chats[i]}
      delete chatReturn.pin
      res.status(200).send(chatReturn)
    }
}