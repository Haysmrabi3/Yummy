import React from 'react'














export default function MinHeader({title}) {



  return <>
      <section className='Min-Header bg-danger ' >
                <div className="container">
                <h2>{title}</h2>
                <p><span>Home</span> / {title}</p>
                </div>
      </section>
  
  
  </>
}
