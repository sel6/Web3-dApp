import Login from './components/login';
import Trainer from './components/trainer';
import Trainee from './components/trainee';
import React, {useCallback, useState} from 'react';

function App() {
  const [page, selectPage] = useState("login")
  
  const callback = useCallback((p_name) => {
    selectPage(p_name);
  }, []);
  if(page === "login"){
    return (
      <div>
      <Login parentCallback={callback}/>
     </div>
    );
  }else if (page === "trainer"){
    return (
      <div>
      <Trainer/>
     </div>
    );
  }else{
    return (
      <div>
      <Trainee/>
     </div>
    );
  }
  
}

export default App;
