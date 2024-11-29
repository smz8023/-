import { useState } from 'react'
import UpdateElectron from '@/components/update'
import Layout from '@/components/layout';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className='App'>
      <Layout />
      {/* <UpdateElectron /> */}
    </div>
  )
}

export default App