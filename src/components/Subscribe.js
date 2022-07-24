import React from 'react'

export default function Subscribe() {
  return (
    <>
    <div className="row bg-secondary fixed-bottom p-5 text-white">
        <div className="col-md-6 my-1">
            <h1>iNVENTORY App</h1>
            <h4>Created by Pratik Yabaji</h4>
        </div>
        <div className="col-md-6">
          <form action="#" method='post'>
            <div className="container-fluid d-flex flex-column">
                <input className='rounded py-2 my-2'style={{'width':'400px','border':'none'}} type="email" placeholder='Email' />
                <button className="btn btn-danger btn-md text-white my-2" type='submit' style={{'width':'100px'}} >Subscribe</button>
                <p>Subscribe to the newsletter !! </p>
            </div>
          </form>
        </div>
    </div>
    </>
  )
}
