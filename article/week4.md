- **props drilling** 이란?🪛

  - props drilling 이란 깊이 nested된 컴포넌트로 data를 전달해주기 위해 해당 data를 실질적으로 활용하거나 필요로하지 않는 컴포넌트들을 거쳐 data를 전달하는 것을 나타낸다.

- **context API** 활용🌐
  - context API 란?
    react app이 전달하기 쉬운 전역 변수(global variables)를 생성하는 효과적인 방법이다
  - contextProvider 로 감싸 안의 컴포넌트들이 state와 variables 에 전역적으로 접근할 수 있게 한다
  - 상태 또는 변수를 사용할 컴포넌트 안에서 useContext라는 hook을 통해 해당 state 또는 변수를 가져다 쓸 수 있다
  - 공식문서에는 react 컴포넌트들의 tree에 전역으로 적용된다고 고려할만한 theme, 선호 언어, 현재 인증된 유저 정보 등을 다루기 위해 디자인된 것이라고 나와있다
  - 밑의 component composition 과 비교하는 코드 예시를 통해 볼 수 있다
- **component composition** 활용🤝
  - component composition 이란?
    - context api 공식문서에도 context api를 사용하기 전에 component composition를 고려해보라고 명시되어 있는 방법으로 컴포넌트안에 컴포넌트를 props로 넘겨주는 방법이다.
    - 코드로 예시를 보자
      먼저 context API를 활용하는 코드를 보자👇🏼
          ```jsx
          let UserContext = React.createContext();

          function App() {
            const [user, setUser] = setState();
            return (
              <>
                <UserContext.Provider value={{ user }}>
                  {user ? <Dashboard /> : <Login onLogin={(user) => setUser(user)} />}
                </UserContext.Provider>
              </>
            )
          }

          function Dashboard() {
              return (
              <DashboardNav />
              <DashboardContent />
            )
          }

          function DashboardContent() {
            return (
                <WelcomeMessage />
            )
          }

          function WelcomeMessage() {
            let { user } = useContext(UserContext);
              return (
              <>
                <div>Hello</div>
                  <div>{user.name}</div>
              </>
            )
          }

          //실제 user 데이터를 활용하는 WelcomeMessage는 Dashboard 컴포넌트 안의 DashboardContent 안에 nested 되어있다
          ```

          이번엔 component composition을 활용해보자👇🏼

          ```jsx
          function App() {
            const [user, setUser] = setState();
            return (
              <>
                  {user
                 ?
                 <Dashboard>
                   <DashboardNav />
                   <DashboardContent>
                     <WelcomeMessage user={user} />
                   </DashboardContent>
                 </Dashboard>
                 :
                 <Login onLogin={(user) => setUser(user)} />
                }
              </>
            )
          }

          function Dashboard({children}) {
              return (
                  <>{children}</>
            )
          }

          function DashboardContent() {
            return (
                  <>{children}</>
            )
          }

          function WelcomeMessage({user}) {
              return (
              <>
                <div>Hello</div>
                  <div>{user.name}</div>
              </>
            )
          }

          //실제로 user 데이터를 써야하는 WelcomeMessage에 바로 데이터를 전달해줘 app과 WelcomeMessage 사이의 user 데이터가 필요없는 컴포넌트들에게 props drilling 되는 것을 방지한다
          ```
- **전역상태관리 라이브러리 사용📚**
  - 전역상태관리 라이브러리: Redux, Recoil, Zustand 등
  - 전역상태관리 라이브러리란?
    react app 에서 사용되는 상태(state)들을 전역으로 관리할 수 있도록 도와주는 라이브러리이다
