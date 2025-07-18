import {useNavigate} from 'react-router'

export const NotPage = () => (<h1 style={{textAlign: 'center'}}>잘못된 페이지 입니다.</h1>)
export const Title = ({title}) => (<h1 style={{textAlign: 'center'}}>{title}</h1>)

const Home = () => {
  const navigate = useNavigate()
  const arr = [
    {url: '/state', text: 'useState'},
    {url: '/effect', text: 'useEffect'},
    {url: '/ref', text: 'useRef'},
    {url: '/context', text: 'useContext'},
    {url: '/reducer', text: 'useReducer'}
  ]  
  return (
    <ol style={{paddingLeft: '20px'}}>
      {
        arr.map((row, index) => (
          <li key={index} style={{cursor: "pointer"}} onClick={()=>navigate(row.url)}>{row.text}</li>
        ))
      }
    </ol>
  )
}

export default Home