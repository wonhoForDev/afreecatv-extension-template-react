import {useEffect} from 'react'
import './App.css'
import {BjScreen} from "./bj_screen/BjScreen";
import {UserScreen} from "./user_screen/UserScreen";

function App({page}) {

  useEffect(() => {
      if (typeof window.extensionSDK === "undefined") {
          window.extensionSDK = window.AFREECA.ext();

          window.extensionSDK.handleInitialization((userInfo, broadInfo, playerInfo) => {
              console.log(userInfo);
              console.log(broadInfo);
              console.log(playerInfo);
          });

          window.extensionSDK.chat.listen((action, message) => {
              console.log(action);
              console.log(message);
          });
      }
  }, []);

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
