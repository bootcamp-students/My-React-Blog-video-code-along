import React from 'react'

import { useAuth } from '../utilities/AuthContext'

export default function Signup() {
    const { register, token } = useAuth()


    const APIpost = e => {
        e.preventDefault()
        const data = { name: "ian", email: "ianReactTest34@ainc.com", password: "changeme" };
        register(data)
    }


    return (
        <div className="App">
            <header className="App-header">

                <form onSubmit={APIpost}>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <p>
                    token:"{token}"
                </p>

                <button  className="btn btn-large btn-primary text-white" >signup!</button>
            </header>
        </div>
    )
}
