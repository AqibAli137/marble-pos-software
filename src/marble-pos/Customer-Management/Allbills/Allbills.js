import React from 'react'
import Invoicer from '../../InvoiceView/Invoicer'

function Allbills() {
  return (
    <div>
    {
        ['','',''].map(e=>(
            <Invoicer/>
        ))
    }
    </div>
  )
}

export default Allbills