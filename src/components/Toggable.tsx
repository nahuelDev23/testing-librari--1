import React from 'react'

export const Toggable = () => {
    const [visible, setVisible] = React.useState(false)
    const  hidden = { display: visible ? '' : 'none' }
  return (
    <div>
        Toggable
        <button onClick={()=>setVisible(visible => !visible)}>toggle</button>
        <div style={hidden}>hola</div>
    </div>
  )
}
