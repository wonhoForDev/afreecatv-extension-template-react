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
## ~~host가 왜 127.0.0.1로 되어있는가?~~
프릭샷 inspector가 localhost를 127.0.0.1로 치환 해준다.  
따라서 설정에서 host를 127.0.0.1로 직접 바꿔줄 필요가 없게 되었음

### 폴더 구조
기본적인 vite-react 프로젝트에서  
index가 최상단에 위치하게 되지만

multi page 생성 시에는 src/~ 서브 디렉토리 구조로 하게 되어 있는데[vite-guide](https://vitejs.dev/guide/build.html#multi-page-app)  
가이드에 따라 나누게 될 경우  
~/bj_screen/bj_screen.html 식의 접근 경로가 만들어지는데  

developers 에서 세팅 시 /sub/ 디렉토리를 허용하지 않으므로  
html만 최상단으로 뺐음  

구조가 예쁘지 않은데 라우팅이나 페이징을 넣지 않으려고 하다보니..  


