import React, { useState } from 'react'
export const SearchbarHome = ({ handleSearch }) => {
  const [search, setSearch] = useState('')
  return (
    <div className='search-bar'>
      <input
        type='text'
        className='search-input'
        placeholder='¿Qué deseas buscar?'
        name='search'
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <button
        className='search-button'
        onClick={() => { handleSearch(search) }}
      >
        Buscar
      </button>
    </div>
  )
}
