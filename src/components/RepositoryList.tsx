import React, { useState } from 'react'
import '../styles/repositories.scss'
import { RepositoryItem } from './RepositoryItem'

interface Repository {
  id: number
  name: string
  description: string
  html_url: string
}

export const RepositoryList = () => {
  const [repositories, setRepositories] = useState<Repository[]>([])

  React.useEffect(() => {
    fetch('https://api.github.com/users/swannyalves/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, [])

  return (
    <section className="repository-list">
      <h2>Repository List</h2>
      <ul>
        {repositories.map(repository => (
          <RepositoryItem key={repository.id} repository={repository} />
        ))}
      </ul>
    </section>
  )
}
