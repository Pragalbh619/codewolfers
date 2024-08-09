import React from 'react'
import ModalWeb from "./components/ModalsWeb"
import ModalApp from "./components/ModalsApp"
import ModalCustom from "./components/ModalsCustom"

const Modals = () => {
  return (
    <div>
      <ModalWeb/>
      <ModalApp/>
      <ModalCustom/>
    </div>
  )
}

export default Modals
