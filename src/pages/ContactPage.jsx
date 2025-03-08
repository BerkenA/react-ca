import { useEffect, useState } from "react"


function ContactPage() {
  useEffect(() => {
    document.title = "Contact Page"
  })
  
  const [name, setName] = useState()
  const [subject, setSubject] = useState()
  const [email, setEmail] = useState()
  const [body, setBody] = useState()
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({name, subject, email, body})
  }


    return (
      <>
        <h1>HELLO I AM THE CONTACT PAGE</h1>
      </>
    )
  }
  
  export default ContactPage