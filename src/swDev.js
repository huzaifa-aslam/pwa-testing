import React from 'react'

export const swDev = () => {
  let url=`${process.env.PUBLIC_URL}/sw.js`
navigator.serviceWorker.register(url).then((result)=>{
  console.log("result",result)
})
  return (
    <div>

    </div>
  )
}
