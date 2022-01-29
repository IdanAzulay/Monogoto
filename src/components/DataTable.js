import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'


// Static columns for display Data
const columns = [
  { field: 'symbol', headerName: 'SYMBOL' },
  { field: 'priceChange', headerName: 'PriceChange' },
  { field: 'priceChangePercent', headerName: 'PriceChangePercent'},
  { field: 'weightedAvgPrice', headerName: 'weightedAvgPrice'},
  { field: 'prevClosePrice', headerName: 'prevClosePrice'},
  { field: 'lastPrice', headerName: 'lastPrice'},
  { field: 'lastQty', headerName: 'lastQty'},
  { field: 'bidPrice', headerName: 'bidPrice'},
  { field: 'bidQty', headerName: 'bidQty'},
  { field: 'askPrice', headerName: 'askPrice'},
  { field: 'askQty', headerName: 'askQty'},
  { field: 'askPrice', headerName: 'askPrice'},
  { field: 'openPrice', headerName: 'openPrice'},
  { field: 'highPrice', headerName: 'highPrice'},
  { field: 'lowPrice', headerName: 'lowPrice'},
  { field: 'volume', headerName: 'volume'},
  { field: 'quoteVolume', headerName: 'quoteVolume'},
  { field: 'openTime', headerName: 'openTime'},
  { field: 'closeTime', headerName: 'closeTime'},
  { field: 'firstId', headerName: 'firstId'},
  { field: 'lastId', headerName: 'lastId'},
  { field: 'count', headerName: 'count'},

]

// Initial / Set Data
const DataTable = () => {

  const [tableData, setTableData] = useState([]);
  const [isAuth , setIsAuth] = useState(true);


  useEffect(() => {
    fetch("http://localhost:1880/getData")
      .then((data) => data.json())
      .then((data) => setTableData(data))

  }, [])

  console.log(tableData)

  return (

    <div style={{ height: 700, width: '90%', color:"white!important" , marginLeft:"5%" }}>
        <h1>Available Symbols</h1>
      <DataGrid
        rows={tableData}
        columns={columns}
        rowsPerPageOptions={[50]}
    />
    </div>
  )
}

export default DataTable