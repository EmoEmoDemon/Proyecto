import { useState } from 'react'
import { SearchbarHome } from '../components/SearchbarHome'
import { CatchMov } from '../components/CatchMov'

export const Home = () => {
  const [data, setData] = useState([])

  const sendSearch = (search) => {
    fetch(`https://api.tvmaze.com/search/shows?q=${search}`)
      .then((response) => {
        return response.json()
      }).then((movieInf) => {
        console.log(movieInf)
        setData(movieInf)
      }).catch((error) => {
        console.error(error)
      })
  }
  return (
    <div>
      <div className='logo-container'>
        <img src="https://static.tvmaze.com/images/tvm-header-logo.png" />
      </div>
      <div className='search-container'>
        <SearchbarHome handleSearch={sendSearch} />
      </div>
      <div className='table-movies'>
        {
        data.map((item) => (
          <CatchMov key={item.id} {...item} />
        ))
      }
      </div>
    </div>
  )
}
