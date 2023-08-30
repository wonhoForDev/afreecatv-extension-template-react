# afreecatv-extension-template-react
vite-react template for afreecaTv extension

단지 기본 vite-react에 afreecaTv extension sdk와  
테스트 세팅, 심사용 옵션만 넣은 것 임  
각자 원하는게 다를 테니 기본적인 상태로만 구성 했음  

## 개발 환경
- node 18.16.0

## 테스트
### 확장 프로그램 테스트 환경 세팅

<img src="https://github.com/wonhoForDev/afreecatv-extension-template-react/assets/141397728/529b34d0-9ac3-4fa1-9af7-9a3eab5f2ec0" width="90%">

위 처럼 세팅 후 테스트 모드 활성화  
프릭샷을 사용하면 디버깅이 쉽지 않아서  
OBS를 사용하여 외부장치 방송 페이지(https://dashboard.afreecatv.com/) 에서 개발 함  
물론 프릭샷에서도 동작함  

<img src="https://github.com/wonhoForDev/afreecatv-extension-template-react/assets/141397728/ba4bf88f-1e0c-4a85-beed-f0c45addf5d1" width="70%">

<img src="https://github.com/wonhoForDev/afreecatv-extension-template-react/assets/141397728/71ca776e-10e5-4363-9a8f-31fb515933f2" width="70%">

## 테스트 기록 사항
### host가 왜 127.0.0.1로 되어있는가?
기본 적인 개발 환경에선 http://localhost 를 사용하게 되어 있는데  
이 경우 프릭샷에서 테스트 시 http://localhost가 차단되어 테스트 진행이 불가 하다.  

해결 방법이 2가지 있는데  

기본 적으로 세팅되어 있는 방식은  
http://127.0.0.1을 활용하는 방식으로  
http://127.0.0.1은 프릭샷에서 차단되지 않는다.  

또 다른 방법은 https 환경을 만드는 것인데  
아래와 같이 진행하면 https 환경을 만들 수 있다.  
* install vite-plugin-mkcert
* server 값에 https: true 추가
* plugins: [react(), mkcert()],

물론 이 경우 developers 페이지에서 https로 호출하도록 값을 맞춰주는 것도 잊지 말자  

### 폴더 구조
기본적인 vite-react 프로젝트에서  
index가 최상단에 위치하게 되지만

multi page 생성 시에는 src/~ 서브 디렉토리 구조로 하게 되어 있는데[vite-guide](https://vitejs.dev/guide/build.html#multi-page-app)  
가이드에 따라 나누게 될 경우  
~/bj_screen/bj_screen.html 식의 접근 경로가 만들어지는데  

developers 에서 세팅 시 /sub/ 디렉토리를 허용하지 않으므로  
html만 최상단으로 뺐음  

구조가 예쁘지 않은데 라우팅이나 페이징을 넣지 않으려고 하다보니..  


