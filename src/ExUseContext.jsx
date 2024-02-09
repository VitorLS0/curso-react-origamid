import React from 'react'
import ProdutoGlobalContext from './globalContext/produtoGlobalContext.jsx'
import { GlobalStorage } from './GlobalContext.jsx'

const ExUseContext = () => {
  return (
    <GlobalStorage>
        <ProdutoGlobalContext/>
    </GlobalStorage>
  )
}

export default ExUseContext