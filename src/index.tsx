import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<App/>);

reportWebVitals();



// third friday
// 1
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
// import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
//
// // Reducer
// const initState = {
//   animals: [
//     {likes: 0, name: 'cat'},
//     {likes: 0, name: 'dog'},
//     {likes: 0, name: 'fish'},
//     {likes: 0, name: 'spider'},
//     {likes: 0, name: 'bird'},
//   ] as { likes: number, name: string }[]
// }
// type InitStateType = typeof initState
//
// const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//   switch (action.type) {
//     case 'LIKE':
//       // debugger
//       return {
//         ...state,
//         animals: state.animals.map(animal => {
//           return animal.name === action.name ? {...animal, likes: action.likes} : animal // my reply
//         })
//       }
//   }
//   return state
// }
//
// // Store
// const rootReducer = combineReducers({app: appReducer})
//
// const store = createStore(rootReducer, applyMiddleware(thunk))
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>
// const useAppDispatch = () => useDispatch<AppDispatch>()
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
//
// const like = (likes: number, name: string) => ({type: 'LIKE', likes, name} as const) // any any
// type ActionsType = ReturnType<typeof like>
//
// // Components
// export const Animals = () => {
//   const animals = useAppSelector(state => state.app.animals)
//   const dispatch = useAppDispatch()
//
//   const mapped = animals
//     .map((a: any, i: number) => (
//       <div key={i}>
//         {a.name}
//         -{a.likes}-
//         <button
//           onClick={() => {
//             dispatch(like(a.likes + 1, a.name))
//             console.log(a.likes)
//           }}
//         >
//           Like!
//         </button>
//       </div>
//     ))
//
//
//   return (
//     <div>
//       {mapped}
//     </div>
//   )
// }
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(
//   <Provider store={store}>
//     <Animals/>
//   </Provider>
// );

// 📜 Описание:
// На экране отображен список животных.
// Кликните на like и вы увидите, что ничего не происходит.
// Ваша задача починить лайки.
// В качестве ответа укажите исправленную версию строки
//
// 🖥 Пример ответа: -{a.likes + 1}-




// 2
// import ReactDOM from 'react-dom/client';
// import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
// import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
// import React, { useState } from 'react'
//
// // Styles
// const modal: React.CSSProperties = {
//   position: 'fixed',
//   zIndex: 1,
//   left: 0,
//   top: 0,
//   width: '100%',
//   height: '100%',
//   overflow: 'auto',
//   backgroundColor: 'rgba(23,26,38,0.26)'
// }
//
// const modalContent: React.CSSProperties = {
//   backgroundColor: '#fefefe',
//   margin: '15% auto',
//   padding: '20px',
//   border: '1px solid #888',
//   width: '80%'
// }
//
//
// // Reducer
// const initState = {goodThings: [] as any[]}
// type InitStateType = typeof initState
//
// const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//   switch (action.type) {
//     case 'LIKE':
//       return {
//         ...state,
//         goodThings: [action.thing, ...state.goodThings]
//       }
//   }
//   return state
// }
//
// // Store
// const rootReducer = combineReducers({app: appReducer})
//
// const store = createStore(rootReducer, applyMiddleware(thunk))
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>
// const useAppDispatch = () => useDispatch<AppDispatch>()
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
//
// const addThing = (thing: any) => ({type: 'LIKE', thing} as const)
// type ActionsType = ReturnType<typeof addThing>
//
// const Modal = (props: any) => {
//   return (
//     <div style={modalContent}>
//       modal:
//       <input
//         value={props.value}
//         onChange={e => props.setValue(e.target.value)}
//       />
//       <button onClick={props.add}>add</button>
//     </div>
//   )
// }
//
// // Components
// export const Animals = () => {
//   const goodThings = useAppSelector(state => state.app.goodThings)
//   const dispatch = useAppDispatch()
//
//   const [value, setValue] = useState('')
//   const [show, setShow] = useState(false)
//
//   const mapped = goodThings.map((t: any, i: number) => <div key={i}>{t}</div>)
//
//   return (
//     <div style={modal}>
//       <button onClick={() => setShow(true)}>show modal</button>
//
//       {show && (
//         <Modal
//           value={value}
//           setValue={setValue}
//           add={() => {
//             dispatch(addThing(value))
//             setShow(false) // my reply
//             setValue('')
//           }}
//         />
//       )}
//
//       {mapped}
//     </div>
//   )
// }
//
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(
//   <Provider store={store}>
//     <Animals/>
//   </Provider>
// );

// 📜 Описание:
// Откройте модалку, введите любой текст и нажмите add.
// Введенный текст отобразится снизу, но модалка останется по прежнему видимой.

// 🪛 Задача:
// Необходимо сделать так, чтобы модалка пряталась сразу после добавления элемента
// В качестве ответа укажите строку коду, которую необходимо добавить для реализации данной задачи

// 🖥 Пример ответа: closeModal(true)





// 3
// import React, { useState } from 'react'
// import ReactDOM from 'react-dom/client';
// import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
// import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
//
//
// // Styles
// const modal: React.CSSProperties = {
//   position: 'fixed',
//   zIndex: 1,
//   left: 0,
//   top: 0,
//   width: '100%',
//   height: '100%',
//   overflow: 'auto',
//   backgroundColor: 'rgba(23,26,38,0.26)'
// }
//
// const modalContent: React.CSSProperties = {
//   backgroundColor: '#fefefe',
//   margin: '15% auto',
//   padding: '20px',
//   border: '1px solid #888',
//   width: '80%'
// }
//
// // Reducer
// const initState = {tasks: [] as any[]}
// type InitStateType = typeof initState
//
// const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//   switch (action.type) {
//     case 'ADD_TASK':
//       return {
//         ...state,
//         tasks: [action.task, ...state.tasks]
//       }
//     case 'CHANGE_TASK':
//       return {
//         ...state,
//         tasks: [action.task, ...state.tasks.filter((t: any) => t.id !== action.task.id)]
//       }
//     default:
//       return state
//   }
// }
//
// // Store
// const rootReducer = combineReducers({app: appReducer})
//
// const store = createStore(rootReducer, applyMiddleware(thunk))
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>
// const useAppDispatch = () => useDispatch<AppDispatch>()
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
//
// const addTask = (task: any) => ({type: 'ADD_TASK', task} as const)
// const changeTask = (task: any) => ({type: 'CHANGE_TASK', task} as const)
// type ActionsType = ReturnType<typeof addTask> | ReturnType<typeof changeTask>
//
// // Components
// const Modal = (props: any) => {
//   const [value, setValue] = useState(props.task?.name || '')
//
//   return (
//     <div style={modalContent}>
//       modal:
//       <input
//         value={value}
//         onChange={e => setValue(props.task?.name || e.target.value)}
//       />
//       <button onClick={() => props.callback(value)}>{props.title}</button>
//     </div>
//   )
// }
//
// const Task = (props: any) => {
//   const [show, setShow] = useState(false)
//
//   return (
//     <div>
//       {props.task.name}
//       <button onClick={() => setShow(true)}>change</button>
//       {show && (
//         <Modal
//           callback={(value: string) => {
//             props.change(value)
//             setShow(false)
//           }}
//           title={'change'}
//         />
//       )}
//     </div>
//   )
// }
//
// export const Todolist = () => {
//   const tasks = useAppSelector(state => state.app.tasks)
//   const dispatch = useAppDispatch()
//   const [show, setShow] = useState(false)
//
//   const getId = () => tasks.reduce((acc: number, t: any) => acc > t.id ? acc : t.id, 0) + 1
//
//   const mapped = tasks.map((t: any) => (
//     <Task
//       key={t.id}
//       task={t}
//       change={(value: string) => dispatch(changeTask({id: t.id, name: value}))}
//     />
//   ))
//
//   return (
//     <div style={modal}>
//       <button onClick={() => setShow(true)}>open modal</button>
//       {show && (
//         <Modal
//           callback={(value: string) => {
//             dispatch(addTask({id: getId(), name: value}))
//             setShow(false)
//           }}
//           title={'add'}
//         />
//       )}
//       {mapped}
//     </div>
//   )
// }
//
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(
//   <Provider store={store}>
//     <Todolist/>
//   </Provider>
// );

// 📜Описание:
// Откройте модалку и добавьте какой-нибудь текст.
// Теперь попробуйте изменить этот текст.
// При изменении существующей таски в инпуте не отображается старые данные.
// Ваша задача починить это поведение.
//
// В качестве ответа укажите строку кода, которую нужно изменить или добавить,
// чтобы реализовать данную задачу
//
// 🖥 Пример ответа: defaultValue={value}





// 4
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
// import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
//
// // Reducer
// const initState = {
//   work: 0,
//   donate: 0,
//   balance: 0,
// }
// type InitStateType = typeof initState
//
// const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//   switch (action.type) {
//     case 'CHANGE_VALUE':
//       return {
//         ...state,
//         ...action.payload,
//       }
//     default:
//       return state
//   }
// }
//
// // Store
// const rootReducer = combineReducers({app: appReducer})
//
// const store = createStore(rootReducer, applyMiddleware(thunk))
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>
// const useAppDispatch = () => useDispatch<AppDispatch>()
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
//
// const changeValue = (payload: any) => ({type: 'CHANGE_VALUE', payload} as const)
// type ActionsType = ReturnType<typeof changeValue>
//
// // Components
// export const Income = () => {
//   const work = useAppSelector(state => state.app.work)
//   const donate = useAppSelector(state => state.app.donate)
//   const balance = useAppSelector(state => state.app.balance)
//
//   const dispatch = useAppDispatch()
//
//   return (
//     <div>
//       <div>
//         work: <input value={work}
//                      type={'number'}
//                      onChange={e => dispatch(changeValue({work: +e.target.value}))}/>
//       </div>
//       <div>
//         donate: <input value={donate}
//                        type={'number'}
//                        onChange={e => dispatch(changeValue({donate: +e.target.value}))}/>
//       </div>
//
//       <h1>💵 balance: {balance}</h1>
//       <button
//         onClick={() => {
//           // ❗❗❗ XXX ❗❗❗
//           dispatch(changeValue({balance: work + donate})) // my reply
//         }}
//       >
//         calculate balance
//       </button>
//     </div>
//   )
// }
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(
//   <Provider store={store}>
//     <Income/>
//   </Provider>
// );

// 📜 Описание:
// Что нужно написать вместо XXX, чтобы вывелась сумма дохода в строке баланса
//
// 🖥 Пример ответа: console.log(work + donate)




// 5
// import ReactDOM from 'react-dom/client';
// import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
// import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
// import React, { useEffect } from 'react'
// import axios from 'axios'
//
// // Styles
// const table: React.CSSProperties = {
//   borderCollapse: 'collapse',
//   width: '100%',
//   tableLayout: 'fixed',
// }
//
// const th: React.CSSProperties = {
//   padding: '10px',
//   border: '1px solid black',
//   background: 'lightgray',
//   cursor: 'pointer'
// }
//
// const td: React.CSSProperties = {
//   padding: '10px',
//   border: '1px solid black'
// }
//
// // Types
// type UserType = {
//   id: string;
//   name: string;
//   age: number;
// }
//
// type UsersResponseType = {
//   items: UserType[]
//   totalCount: number
// }
//
//
// // API
// const instance = axios.create({baseURL: 'https://exams-frontend.kimitsu.it-incubator.ru/api/'})
//
// const api = {
//   getUsers() {
//     return instance.get<UsersResponseType>('users')
//   },
// }
//
// // Reducer
// const initState = {
//   users: [] as UserType[],
// }
// type InitStateType = typeof initState
//
// const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//   switch (action.type) {
//     case 'SET_USERS':
//       return {...state, users: action.users}
//     default:
//       return state
//   }
// }
//
// // Store
// const rootReducer = combineReducers({app: appReducer})
//
// const store = createStore(rootReducer, applyMiddleware(thunk))
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>
// const useAppDispatch = () => useDispatch<AppDispatch>()
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
//
// const setUsersAC = (users: UserType[]) => ({type: 'SET-USERS', users})
// type ActionsType = ReturnType<typeof setUsersAC>
//
// // Thunk
// const getUsersTC = (): AppThunk => (dispatch, getState) => {
//   api.getUsers()
//     .then(res => {
//       dispatch(setUsersAC(res.data.items))
//       console.log(res.data)
//       console.log(store.getState)
//     })
// }
//
// // Components
// export const Users = () => {
//   const users = useAppSelector(state => state.app.users)
//
//   const dispatch = useAppDispatch()
//
//   useEffect(() => {
//     // debugger
//     dispatch(getUsersTC())
//   }, [])
//
//   return (
//     <div>
//       <h1>👪 Список пользователей</h1>
//       <table style={table}>
//         <thead>
//         <tr>
//           <th style={th}> Name</th>
//           <th style={th}> Age</th>
//         </tr>
//         </thead>
//         <tbody>
//         {
//           users.map(u => (
//
//             <tr key={u.id}>
//               <td style={td}>{u.name}</td>
//               <td style={td}>{u.age}</td>
//             </tr>
//           ))
//         }
//         </tbody>
//       </table>
//     </div>
//   )
// }
//
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(
//   <Provider store={store}>
//     <Users/>
//   </Provider>
// );

// 📜 Описание:
// Перед вами пустая таблица. Пользователи не подгрузились, т.к. в коде допущена ошибка
// Ваша задача найти багу, чтобы таблица с пользователями подгрузилась.
// В качестве укажите исправленную строку кода
// ❗ Есть несколько вариантов решения данной задачи, в ответах учтены различные варианты

// 🖥 Пример ответа: {users.map(u) => таблица отрисуйся ВЖУХ ВЖУХ}




// 6
// import ReactDOM from 'react-dom/client';
// import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
// import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
// import React, { useEffect } from 'react'
// import axios from 'axios'
//
// // Styles
// const table: React.CSSProperties = {
//   borderCollapse: 'collapse',
//   width: '100%',
//   tableLayout: 'fixed',
// }
//
// const th: React.CSSProperties = {
//   padding: '10px',
//   border: '1px solid black',
//   background: 'lightgray',
//   cursor: 'pointer'
// }
//
// const td: React.CSSProperties = {
//   padding: '10px',
//   border: '1px solid black'
// }
//
// // Types
// type UserType = {
//   id: string;
//   name: string;
//   age: number;
// }
//
// type UsersResponseType = {
//   items: UserType[]
//   totalCount: number
// }
//
// type ParamsType = {
//   sortBy: string | null
//   sortDirection: 'asc' | 'desc' | null
// }
//
// // API
// const instance = axios.create({baseURL: 'https://exams-frontend.kimitsu.it-incubator.ru/api/'})
//
// const api = {
//   getUsers(params?: ParamsType) {
//     return instance.get<UsersResponseType>('users', {params})
//   },
// }
//
// // Reducer
// const initState = {
//   users: [] as UserType[],
//   params: {
//     sortBy: null,
//     sortDirection: 'asc'
//   } as ParamsType
// }
// type InitStateType = typeof initState
//
// const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//   switch (action.type) {
//     case 'SET_USERS':
//       return {...state, users: action.users}
//     case 'SET_PARAMS':
//       return {...state, params: {...state.params, ...action.payload}}
//     default:
//       return state
//   }
// }
//
// // Store
// const rootReducer = combineReducers({app: appReducer})
//
// const store = createStore(rootReducer, applyMiddleware(thunk))
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>
// const useAppDispatch = () => useDispatch<AppDispatch>()
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
//
// const setUsersAC = (users: UserType[]) => ({type: 'SET_USERS', users} as const)
// const setParamsAC = (payload: ParamsType) => ({type: 'SET_PARAMS', payload} as const)
// type ActionsType =
//   | ReturnType<typeof setUsersAC>
//   | ReturnType<typeof setParamsAC>
//
// // Thunk
// const getUsersTC = (): AppThunk => (dispatch, getState) => {
//   const params = getState().app.params
//   api.getUsers(params.sortBy ? params : undefined)
//     .then(res => dispatch(setUsersAC(res.data.items)))
// }
//
// export const Users = () => {
//   const users = useAppSelector(state => state.app.users)
//   const sortBy = useAppSelector(state => state.app.params.sortBy)
//   const sortDirection = useAppSelector(state => state.app.params.sortDirection)
//   console.log(users, sortBy, sortDirection)
//
//   const dispatch = useAppDispatch()
//
//   // ❗❗❗ XXX ❗❗❗
//   useEffect(() => dispatch(getUsersTC()), [sortBy, sortDirection]) // my reply
//
//   const sortHandler = (name: string) => {
//     const direction = sortDirection === 'asc' ? 'desc' : 'asc'
//     dispatch(setParamsAC({sortBy: name, sortDirection: direction}))
//   };
//
//   return (
//     <div>
//       <h1>👪 Список пользователей</h1>
//       <table style={table}>
//         <thead>
//         <tr>
//           <th style={th} onClick={() => sortHandler('name')}>
//             Name
//           </th>
//           <th style={th} onClick={() => sortHandler('age')}>
//             Age
//           </th>
//         </tr>
//         </thead>
//         <tbody>
//         {
//           users.map(u => {
//             return (
//               <tr key={u.id}>
//                 <td style={td}>{u.name}</td>
//                 <td style={td}>{u.age}</td>
//               </tr>
//             )
//           })
//         }
//         </tbody>
//       </table>
//     </div>
//   )
// }
//
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(
//   <Provider store={store}>
//     <Users/>
//   </Provider>
// );

// 📜 Описание:
// Перед вами таблица с пользователями. Но данные не подгружаются
// Что нужно написать вместо XXX, чтобы:
// 1) Пользователи подгрузились
// 2) Чтобы работала сортировка по имени и возрасту
// 3) Направление сортировки тоже должно работать (проверить можно нажав на одно и тоже поле 2 раза)

// 🖥 Пример ответа: console.log(users, sortBy, sortDirection)




// 7
// import React from 'react'
// import ReactDOM from 'react-dom/client';
//
// export const App = () => {
//   return (
//     <div>
//       <h2>Чем отличается master от origin master ?</h2>
//       <ul>
//         <li>1 - Это просто 2 ветки с разными названиями. Их ничего не связывает</li>
//         <li>2 - master принадлежит локальному репозиторию, origin master - удаленному</li>
//         <li>3 - Это 2 названия одной и той же ветки. Приставка origin не несет никакого смысла.</li>
//         <li>4 - Ветки origin master не существует</li>
//         <li>5 - Нет правильного ответа</li>
//       </ul>
//     </div>
//   )
// }
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<App/>);

// 3 my reply not correct, // then 4

// 📜 Описание:
// Чем отличается master от origin master ?
// Может быть несколько вариантов ответа (ответ дайте через пробел).
// ❗ Ответ будет засчитан как верный, только при полном правильном совпадении.
// Если указали правильно один вариант (1),
// а нужно было указать два варианта (1 и 2), то ответ в данном случае будет засчитан как неправильный

// 🖥 Пример ответа: 1





// 8
// import React from 'react'
// import ReactDOM from 'react-dom/client';
//
// export const App = () => {
//   return (
//     <div>
//       <h2>Какая команда позволяет на время «сдать в архив» (или отложить) изменения, сделанные в рабочей
//         копии, чтобы вы могли применить их позже? Откладывание изменений полезно, если вам необходимо переключить
//         контекст и вы пока не готовы к созданию коммита.</h2>
//     </div>
//   )
// }
//
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<App/>);

// git stash

// 📜 Описание:
// Какая команда позволяет на время «сдать в архив» (или отложить) изменения, сделанные в рабочей
// копии, чтобы вы могли применить их позже? Откладывание изменений полезно, если вам необходимо переключить
// контекст и вы пока не готовы к созданию коммита.

// 🖥 Пример ответа: git init














// second friday
// 1
// import ReactDOM from 'react-dom/client';
// import React, { useEffect } from 'react';
// import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
// import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
//
//
// // Reducer
// const initState = {find: '', words: [] as string[]}
// type InitStateType = typeof initState
//
// const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//   switch (action.type) {
//     case 'SET_FIND':
//       return {...state, find: action.find}
//     case 'SET_WORDS':
//       return {...state, words: action.words}
//     default:
//       return state
//   }
// }
//
// // Store
// const rootReducer = combineReducers({app: appReducer})
//
// const store = createStore(rootReducer, applyMiddleware(thunk))
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>
// const useAppDispatch = () => useDispatch<AppDispatch>()
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
//
// const setFind = (find: string) => ({type: 'SET_FIND', find} as const)
// const setWords = (words: string[]) => ({type: 'SET_WORDS', words} as const)
// type ActionsType = ReturnType<typeof setFind> | ReturnType<typeof setWords>
//
//
// // Components
// const defWords = ['a', 'ab', 'abc', 'b', 'bc', 'c', 'd', 'ac', 'bcd', 'cd', 'abcd', 'bd']
//
// export const App = () => {
//   const find = useAppSelector(state => state.app.find)
//   const words = useAppSelector(state => state.app.words)
//
//   const dispatch = useAppDispatch()
//
//   useEffect(() => {
//     dispatch(setWords(defWords))
//   }, [])
//
//   const mapped = words
//     .filter((w: string) => new RegExp(find, 'gi').test(w))
//     .map((w: string, i: number) => <div key={i}>{w}</div>)
//
//   const onChangeHandler = (value: string) => {
//     dispatch(setFind(value)) // my reply
//   }
//
//   return (
//     <div>
//       <input
//         value={find}
//         onChange={e => onChangeHandler(e.target.value)}
//       />
//       {mapped}
//     </div>
//   )
// }
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(
//   <Provider store={store}>
//     <App/>
//   </Provider>
// );

// 📜 Описание:
// На экране отображен массив слов.
// Ваша задача починить фильтрацию:
// вводите символы в input и сразу видите как фильтруются данные.
// В качестве ответа укажите исправленную версию строки.
//
// 🖥 Пример ответа: dispatch(setFind(defWords))




// 2
// import React, { useEffect } from 'react'
// import ReactDOM from 'react-dom/client';
// import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
// import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
// import axios from 'axios'
//
//
// type UserType = {
//   id: string;
//   name: string;
//   age: number;
// }
//
// // API
// const instance = axios.create({baseURL: 'https://exams-frontend.kimitsu.it-incubator.ru/api/'})
//
// const api = {
//   getUsers(pageNumber: number) {
//     return instance.get(`users?pageSize=${3}&pageNumber=${pageNumber}`)
//   },
// }
//
//
// // Reducer
// const initState = {page: 1, users: [] as UserType[]}
// type InitStateType = typeof initState
//
// const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//   switch (action.type) {
//     case 'SET_PAGE':
//       return {...state, page: action.page}
//     case 'SET_USERS':
//       return {...state, users: action.users}
//     default:
//       return state
//   }
// }
//
// // Store
// const rootReducer = combineReducers({app: appReducer})
//
// const store = createStore(rootReducer, applyMiddleware(thunk))
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>
// const useAppDispatch = () => useDispatch<AppDispatch>()
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
//
// const setPageAC = (page: number) => ({type: 'SET_PAGE', page} as const)
// const setUsersAC = (users: UserType[]) => ({type: 'SET_USERS', users} as const)
// type ActionsType = ReturnType<typeof setPageAC> | ReturnType<typeof setUsersAC>
//
// const getUsers = (): AppThunk => (dispatch, getState) => {
//   const page = 1 // tried here
//   api.getUsers(page)
//     .then(res => dispatch(setUsersAC(res.data.items)))
// }
//
// // Components
// export const App = () => {
//   const page = useAppSelector(state => state.app.page)
//   const users = useAppSelector(state => state.app.users)
//
//   const dispatch = useAppDispatch()
//
//   useEffect(() => {
//     dispatch(getUsers())
//   }, [page])
//
//
//   const pages = new Array(4)
//     .fill(1)
//     .map((p, i) => (
//       <button
//         key={i}
//         onClick={() => dispatch(setPageAC(i + 1))}
//         disabled={page === i + 1}
//       >
//         {i + 1}
//       </button>
//     ))
//
//   return (
//     <div>
//       {
//         users.map(u => {
//           return <div style={{marginBottom: '25px'}} key={u.id}>
//             <p><b>name</b>: {u.name}</p>
//             <p><b>age</b>: {u.age}</p>
//           </div>
//         })
//       }
//       {pages}
//     </div>
//   )
// }
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(
//   <Provider store={store}>
//     <App/>
//   </Provider>
// );


// 📜 Описание:
// При переходе по страницам должны подгружаться новые пользователи.
// Однако в коде допущена ошибка и всегда подгружаются одни и теже пользователи.
// Задача: найти эту ошибку, и исправленную версию строки написать в качестве ответа.

// 🖥 Пример ответа: {pages.next()}




// 3
// import ReactDOM from 'react-dom/client';
// import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
// import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
//
// type UserType = {
//   id: string;
//   name: string;
//   age: number;
// }
//
// type UsersResponseType = {
//   items: UserType[]
//   totalCount: number
// }
//
// // API
// const instance = axios.create({baseURL: 'https://exams-frontend.kimitsu.it-incubator.ru/api/'})
//
// const api = {
//   getUsers(search: string) {
//     return instance.get<UsersResponseType>(`users?name=${search}&pageSize=100`)
//   },
// }
//
//
// const initState = {users: [] as UserType[]}
// type InitStateType = typeof initState
//
// const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//   switch (action.type) {
//     case 'SET_USERS':
//       return {...state, users: action.users}
//     default:
//       return state
//   }
// }
//
// // Store
// const rootReducer = combineReducers({app: appReducer})
//
// const store = createStore(rootReducer, applyMiddleware(thunk))
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>
// const useAppDispatch = () => useDispatch<AppDispatch>()
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
//
// const setUsersAC = (users: UserType[]) => ({type: 'SET_USERS', users} as const)
// type ActionsType = ReturnType<typeof setUsersAC>
//
// // Thunk
// const getFriends = (name: string): AppThunk => (dispatch) => {
//   api.getUsers(name)
//     .then(res => dispatch(setUsersAC(res.data.items)))
// }
//
// export const Users = () => {
//   const users = useAppSelector(state => state.app.users)
//   const dispatch = useAppDispatch()
//   const [name, setName] = useState('')
//   const [timerId, setTimerId] = useState(0)
//
//   useEffect(() => {
//     clearTimeout(timerId) // my reply
//     setTimerId(+setTimeout(() => {
//       dispatch(getFriends(name))
//     }, 1500))
//   }, [name])
//
//   return (
//     <div>
//       <input
//         value={name}
//         onChange={e => setName(e.target.value)}
//       />
//       {
//         users.map(u => {
//           return <div key={u.id}>
//             <p><b>name</b>: {u.name}</p>
//           </div>
//         })
//       }
//     </div>
//   )
// }
//
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(
//   <Provider store={store}>
//     <Users/>
//   </Provider>
// );

// 📜 Описание:
// На экране input, куда можно вводить символы.
// Откройте Network/ fetch/XHR и поробуйте вводить символы
// Обратите внимание, что все символы которые вы вводите уходят на сервер -
// это плохо.
//
// 🪛 Задача: Починить debounce
// В качестве ответа напишите строку кода которую необходимо исправить или добавить
// для реализации данной задачи
//
// 🖥 Пример ответа: value={name(1500)}




// 4
// import ReactDOM from 'react-dom/client';
// import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
// import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
// import React from 'react';
//
// // Reducer
// const initState = {
//   goodMorning: [
//     {id: 1, name: 'errors'},
//     {id: 2, name: 'bugs'},
//     {id: 3, name: 'fackups'},
//     {id: 4, name: 'laziness'},
//     {id: 5, name: 'work'},
//   ] as { id: number, name: string }[]
// }
//
// type InitStateType = typeof initState
//
// const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//   switch (action.type) {
//     case 'DELETE':
//       return {
//         ...state,
//         goodMorning: state.goodMorning
//           .filter(g => g.id !== action.id)
//       }
//     default:
//       return state
//   }
// }
//
// // Store
// const rootReducer = combineReducers({app: appReducer})
//
// const store = createStore(rootReducer, applyMiddleware(thunk))
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>
// const useAppDispatch = () => useDispatch<AppDispatch>()
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
//
// const deleteSome = (id: number) => ({type: 'DELETE', id} as const) // any was
// type ActionsType = ReturnType<typeof deleteSome>
//
// // Components
// export const Monday = () => {
//   const goodMorning = useAppSelector(state => state.app.goodMorning)
//   const dispatch = useAppDispatch()
//
//   const mapped = goodMorning
//     .map((p: any, i: number) => (
//       <div key={i}>
//         {p.name}
//         <button
//           onClick={() => dispatch(deleteSome(p.id))} // my reply
//         >
//           X
//         </button>
//       </div>
//     ))
//
//   return (
//     <div>
//       {mapped}
//     </div>
//   )
// }
//
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(
//   <Provider store={store}>
//     <Monday/>
//   </Provider>
// );

// 📜 Описание:
// На экране отображен список дел.
// Попробуйте удалить какой-нибудь элемент - у вас не получится.
// Найдите ошибку.
// В качестве ответа укажите исправленную версию строки
//
// 🖥 Пример ответа: delete goodMorning





// 5
// import ReactDOM from 'react-dom/client';
// import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
// import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
//
// // Styles
// const table: React.CSSProperties = {
//   borderCollapse: 'collapse',
//   width: '100%',
//   tableLayout: 'fixed',
// }
//
// const th: React.CSSProperties = {
//   padding: '10px',
//   border: '1px solid black',
//   background: 'lightgray',
//   cursor: 'pointer'
// }
//
// const td: React.CSSProperties = {
//   padding: '10px',
//   border: '1px solid black'
// }
//
// // Types
// type UserType = {
//   id: string;
//   name: string;
//   age: number;
// }
//
// type UsersResponseType = {
//   items: UserType[]
//   totalCount: number
// }
//
// type ParamsType = {
//   sortBy: string | null
//   sortDirection: 'asc' | 'desc' | null
// }
//
// // API
// const instance = axios.create({baseURL: 'https://exams-frontend.kimitsu.it-incubator.ru/api/'})
//
// const api = {
//   getUsers(params?: ParamsType) {
//     return instance.get<UsersResponseType>('users', {params})
//   },
// }
//
// // Reducer
// const initState = {users: [] as UserType[]}
// type InitStateType = typeof initState
//
// const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//   switch (action.type) {
//     case 'SET_USERS':
//       return {...state, users: action.users}
//     default:
//       return state
//   }
// }
//
// // Store
// const rootReducer = combineReducers({app: appReducer})
//
// const store = createStore(rootReducer, applyMiddleware(thunk))
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>
// const useAppDispatch = () => useDispatch<AppDispatch>()
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
//
// const setUsersAC = (users: UserType[]) => ({type: 'SET_USERS', users} as const)
// type ActionsType = ReturnType<typeof setUsersAC>
//
// // Thunk
// const getUsersTC = (searchParams?: ParamsType): AppThunk => (dispatch) => {
//   api.getUsers(searchParams)
//     .then(res => dispatch(setUsersAC(res.data.items)))
// }
//
// export const Users = () => {
//
//   const [activeColumn, setActiveColumn] = useState<ParamsType>({
//     sortBy: null,
//     sortDirection: 'asc'
//   })
//
//   const users = useAppSelector(state => state.app.users)
//
//   const dispatch = useAppDispatch()
//
//   useEffect(() => {
//     dispatch(activeColumn.sortBy ? getUsersTC(activeColumn) : getUsersTC())
//   }, [activeColumn])
//
//   const sortHandler = (sortBy: string) => {
//     // ❗❗❗ XXX ❗❗❗
//     setActiveColumn({sortBy, sortDirection}) // my reply
//   };
//
//   return (
//     <div>
//       <h1>👪 Список пользователей</h1>
//       <table style={table}>
//         <thead>
//         <tr>
//           <th style={th} onClick={() => sortHandler('name')}>
//             Name
//             {activeColumn?.sortBy === 'name' && (activeColumn.sortDirection === 'asc' ? <span> &#8593;</span> :
//               <span> &#8595;</span>)}
//           </th>
//           <th style={th} onClick={() => sortHandler('age')}>
//             Age
//             {activeColumn?.sortBy === 'age' && (activeColumn.sortDirection === 'asc' ? <span> &#8593;</span> :
//               <span> &#8595;</span>)}
//           </th>
//         </tr>
//         </thead>
//         <tbody>
//         {
//           users.map(u => {
//             return (
//               <tr key={u.id}>
//                 <td style={td}>{u.name}</td>
//                 <td style={td}>{u.age}</td>
//               </tr>
//             )
//           })
//         }
//         </tbody>
//       </table>
//     </div>
//   )
// }
//
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(
//   <Provider store={store}>
//     <Users/>
//   </Provider>
// );

// 📜 Описание:
// Перед вами таблица с пользователями.
// Ваша задача вместо XXX написать код для сортировки пользователей по имени и возрасту.
// Т.е. при нажатии на name либо age пользователи должны сортироваться в таблице.
// При повторном нажатии на этот же столбец сортировка должна происходить в обратном порядке
// ❗ сортировка пользователей происходит на сервере, т.е. sort использовать не нужно

// 🖥 Пример ответа: sort(a, b)




// 6
// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import ReactDOM from 'react-dom/client'
//
// type UserType = {
//   id: string;
//   name: string;
//   age: number;
// }
//
// // API
// const instance = axios.create({baseURL: 'https://exams-frontend.kimitsu.it-incubator.ru/api/'})
//
// const api = {
//   getUsers() {
//     return instance.get(`users/${pageSize}${pageNumber}`) // my reply
//   },
// }
//
// // App
// export const App = () => {
//
//   const [users, setUsers] = useState<UserType[]>([])
//
//   useEffect(() => {
//     api.getUsers()
//       .then((res) => {
//         setUsers(res.data.items)
//       })
//   }, [])
//
//
//   return (
//     <>
//       <h1>👪 Список пользователей</h1>
//       {
//         users.map(u => {
//           return <div style={{display: 'flex', gap: '10px'}} key={u.id}>
//             <p><b>name</b>: {u.name}</p>
//             <p><b>age</b>: {u.age}</p>
//           </div>
//         })
//       }
//     </>
//   )
// }
//
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<App/>)

// 📜 Описание:
// На странице отображен список юзеров из 3-человек.
// Подгрузились именно эти пользователи не случайно, а из-за query параметров указанных в запросе.
// Ваша задача переписать строку с запросом таким образом, чтобы получить аналогичный результат (все тех же юзеров),
// при этом запрещено в ответе использовать символы вопроса и амперсанда.
// В качестве ответа укажите полностью исправленную строку коду (переносы разрешены)


// 🖥 Пример ответа: return instance.get('users=pageSize=3=pageNumber=2')





// 7
// import React from 'react'
// import ReactDOM from 'react-dom/client';
//
// export const App = () => {
//   return (
//     <div>
//       <h2>Сколько всего веток может быть в репозитории ?</h2>
//       <ul>
//         <li>1 - 2 ветки. master(main) и develop</li>
//         <li>2 - Число веток согласовывается в команде разработчиков и устанавливается в git config</li>
//         <li>3 - Всегда есть ветка master (main), develop может быть по соглашения команды разработчиков. Под каждую фичу
//           создается новая ветка. При этом от ветки с фичей запрещено создавать новые ветки</li>
//         <li>4 - Нет правильного ответа</li>
//       </ul>
//     </div>
//   )
// }
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<App/>);

// 3 my reply

// 📜 Описание:
// Сколько всего веток может быть в репозитории ?
// Может быть несколько вариантов ответа (ответ дайте через пробел).
// ❗ Ответ будет засчитан как верный, только при полном правильном совпадении.
// Если указали правильно один вариант (1),
// а нужно было указать два варианта (1 и 2), то ответ в данном случае будет засчитан как неправильный

// 🖥 Пример ответа: 1




// 8
// import React from 'react'
// import ReactDOM from 'react-dom/client';
//
// export const App = () => {
//   return (
//     <div>
//       <h2>Какое из приведенных ниже определений верно?</h2>
//       <ol>
//         <li>1 - Команда git push используется для выгрузки содержимого локального репозитория в удаленный репозиторий.
//           Она позволяет передать коммиты из локального репозитория в удаленный.
//         </li>
//         <li>2 - Команда git pull используется для извлечения и загрузки содержимого из удаленного репозитория и
//           немедленного обновления локального репозитория этим содержимым.
//         </li>
//         <li>3 - Команда git fetch загружает коммиты, файлы и ссылки из удаленного репозитория в ваш локальный
//           репозиторий. Извлеките данные с помощью команды fetch, если хотите увидеть, над чем работают остальные.
//         </li>
//         <li>4 - Ни одно из вышеперечисленных определений не верно</li>
//       </ol>
//     </div>
//   )
// }
//
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<App/>);

// 📜 Описание:
// Какое из приведенных ниже определений верно?
// Может быть несколько вариантов ответа (ответ дайте через пробел).
// ❗ Ответ будет засчитан как верный, только при полном правильном совпадении.
// Если указали правильно один вариант (1),
// а нужно было указать два варианта (1 и 2), то ответ в данном случае будет засчитан как неправильный

// 🖥 Пример ответа: 1









// first friday
// 3
// import React, { useEffect } from 'react'
// import ReactDOM from 'react-dom/client';
// import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
// import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
// import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom'
// import axios from 'axios'
//
// // API
// const instance = axios.create({baseURL: 'https://exams-frontend.kimitsu.it-incubator.ru/api/'})
//
// const api = {
//   me() {
//     return instance.get('auth/me?delay=3')
//   },
// }
//
//
// // Reducer
// const initState = {
//   isInitialized: false,
//   isLoading: false,
//   isLoggedIn: false
// }
// type InitStateType = typeof initState
//
// const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//   switch (action.type) {
//     case 'SET_IS_INITIALIZED':
//       return {...state, isInitialized: action.isInitialized}
//     case 'SET_LOADING':
//       return {...state, isLoading: action.isLoading}
//     case 'SET_IS_LOGGED_IN':
//       return {...state, isLoggedIn: action.isLoggedIn}
//     default:
//       return state
//   }
// }
//
// // Store
// const rootReducer = combineReducers({app: appReducer})
//
// const store = createStore(rootReducer, applyMiddleware(thunk))
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>
// const useAppDispatch = () => useDispatch<AppDispatch>()
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
//
// const setIsInitialized = (isInitialized: boolean) => ({type: 'SET_IS_INITIALIZED', isInitialized} as const)
// const setLoading = (isLoading: boolean) => ({type: 'SET_LOADING', isLoading} as const)
// const setIsLoggedIn = (isLoggedIn: boolean) => ({type: 'SET_IS_LOGGED_IN', isLoggedIn} as const)
// type ActionsType =
//   | ReturnType<typeof setLoading>
//   | ReturnType<typeof setIsInitialized>
//   | ReturnType<typeof setIsLoggedIn>
//
// // Thunk
// const me = (): AppThunk => async (dispatch) => {
//   dispatch(setLoading(true))
//   api.me()
//     .then((res) => {
//       dispatch(setIsLoggedIn(true))
//     })
//     .finally(() => {
//       dispatch(setLoading(false))
//       dispatch(setIsInitialized(true))
//     })
// }
//
// // Components
// const Loader = () => <h2>🔘 Крутилка...</h2>
//
// const Login = () => {
//   const isInitialized = useAppSelector(state => state.app.isInitialized)
//   const isLoading = useAppSelector(state => state.app.isLoading)
//   const isLoggedIn = useAppSelector(state => state.app.isLoggedIn)
//
//   if (isLoggedIn) {
//     return <Navigate to={'/'}/>
//   }
//
//   return <h2>🐣 Login</h2>
// }
// const Profile = () => {
//   const isInitialized = useAppSelector(state => state.app.isInitialized)
//   const isLoading = useAppSelector(state => state.app.isLoading)
//   const isLoggedIn = useAppSelector(state => state.app.isLoggedIn)
//
//   if (!isLoggedIn) return <Loader /> // reply not correct
//
//   return <h2>😎 Profile </h2>
// }
//
// export const App = () => {
//   const isInitialized = useAppSelector(state => state.app.isInitialized)
//   const isLoading = useAppSelector(state => state.app.isLoading)
//   const isLoggedIn = useAppSelector(state => state.app.isLoggedIn)
//
//   const dispatch = useAppDispatch()
//
//   useEffect(() => {
//     dispatch(me())
//   }, [])
//
//   return (
//     <Routes>
//       <Route path={'/'} element={<Profile/>}/>
//       <Route path={'login'} element={<Login/>}/>
//     </Routes>
//   )
// }
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(
//   <BrowserRouter>
//     <Provider store={store}>
//       <App/>
//     </Provider>
//   </BrowserRouter>
// );

// 📜 Описание:
// После старта / обновления приложения мы видим Login, а потом через 3 секунды Profile
// Но это плохое поведение.
// Ваша задача написать код при котором пользователя не будет редиректить на Login,
// а во время ожидания ответа с сервера он будет видеть Loader

// 🖥 Пример ответа: <Loader/>
