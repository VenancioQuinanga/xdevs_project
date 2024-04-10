export default function useFlashMessage() {
  
  function setFlashMessage(msg, type) {
    localStorage.setItem('message',msg)
    localStorage.setItem('message_type',type)

  }

  function cleanFlashMessage() {
    localStorage.setItem('message','')
    localStorage.setItem('message_type','')

  }

  function getFlashMessage() {
    const msg = localStorage.getItem('message')
    const type = localStorage.getItem('message_type')

    return {
      msg,
      type
    }
    
  }

  return { setFlashMessage,cleanFlashMessage,getFlashMessage }
}
