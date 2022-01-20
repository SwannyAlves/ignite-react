import React, { useState } from "react"
import '../styles/repositories.scss'
import { RepositoryItem } from "./RepositoryItem"

export const  RepositoryList = () => {
  const [repositories, setRepositories] = useState([])

   React.useEffect(() => {
    fetch('https://api.github.com/users/swannyalves/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
  } , [])

  return(
    <section className="repository-list">
      <h2>Repository List</h2>
      <ul>
        {
          repositories.map(repository => (
            <RepositoryItem key={repository.id} repository={repository} />
          ))
        }
      </ul>
    </section>
  )
}