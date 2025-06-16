import React, { useState } from 'react'

function Form() {

    const [name, setname] = useState("")
    const [email,setemail] = useState("")
    const [password,setpassword] = useState("")

    const data=(e)=>{
        setname(e.target.value)
    }

  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col-6">
                <form className='d-flex justify-content-center'>
                         <div class="form-group">
                              <label for="exampleInputEmail1">Email address</label>
                              <input type="name" value={name} onChange={data} class="form-control" id="exampleInputname" aria-describedby="nameHelp" placeholder="Enter name"/>

                          </div>
                          <div class="form-group">
                              <label for="exampleInputEmail1">Email address</label>
                              <input type="email" value={email} onChange={data} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>

                          </div>
                          <div class="form-group">
                              <label for="exampleInputPassword1">Password</label>
                              <input type="password" value={password} onChange={data} class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                          </div>
                          
                          <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Form
