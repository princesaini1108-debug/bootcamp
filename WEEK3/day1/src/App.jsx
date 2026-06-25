import React from 'react'
import Card from './component/Card'
import Counter from './component/Counter'
import User from './component/User'

const App = () => {
  return (
    <>
    {/* <div>App</div> */}
    {/* <Card 
    image="https://media.istockphoto.com/id/157371156/photo/black-stallion-in-motion-isolated-on-white.jpg?s=612x612&w=0&k=20&c=F19pXlw_1nSgDeiCWRTR3eEGQsZZOnVyVm6T2rcbxH0="
    name="Prince saini"
    id={40}
    hobby={["singing","dancing"]}
    text="know more"/> */}

    {/* <Card 
    image="https://media.istockphoto.com/id/117147973/photo/gray-stallion-galloping.jpg?s=612x612&w=0&k=20&c=YybK9IE51bcMdH0KJr26XWu21VgjcDLwuIeq730s5Zs="
    name="MUKUL BAHGEL"
    id={40}
    hobby={["singing","dancing"]}
    text="know more"/> */}

    <Counter/>
    <User/>
    </>

  )
}

export default App