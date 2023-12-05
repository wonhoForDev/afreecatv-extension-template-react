import './App.css'
import {BjScreen} from "./bj_screen/BjScreen";
import {UserScreen} from "./user_screen/UserScreen";

function App({page}) {
  let content;

  switch (page) {
    case 'bj_screen':
      content = <BjScreen></BjScreen>;
      break;
    case 'user_screen':
      content = <UserScreen></UserScreen>;
      break;
  }

  return (
    <>
      {content}
    </>
  )
}

export default App
