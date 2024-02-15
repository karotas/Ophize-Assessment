
import { createContext, useState } from 'react';
import './App.css';
import routes from './hooks/useRouter';
import { RouterProvider } from 'react-router-dom';
export let Context=createContext()
function App() {
  let [snackOpen,setSnackOpen]=useState(false)
  let [isSnackErr,setIsSnackErr]=useState(false)
  let [snackMsg,setSnackMsg]=useState("")
  let value={
    snackMsg,
    setSnackMsg,
    setSnackOpen,
    snackOpen,
    isSnackErr,
    setIsSnackErr
  }
  return (
<>
<Context.Provider
value={value}
>
<RouterProvider
router={routes}
/>
</Context.Provider>

</>
  );
}

export default App;
