import React, {useCallback, useState} from 'react';

const App: React.FC = () => {
const [action, setAction] = useState(1)
const setMode = useCallback((item: { id: React.SetStateAction<number>; })=>{
  setAction(item.id)
},[])
 return <div>
    面试内容
 </div>
};

export default App;