export const RepositoryItem = ({repository}) => {
  return(
    <li>
      <p>{repository?.name ?? 'default'}</p>
      <p>{repository?.description ?? 'default'}</p>
      <a href={repository?.html_url}>
        acessar
      </a>
    </li>
  )
}