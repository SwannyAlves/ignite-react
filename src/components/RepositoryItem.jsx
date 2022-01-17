export const RepositoryItem = ({repository}) => {
  return(
    <li>
      <p>{repository?.name ?? 'default'}</p>
      <p>{repository?.description ?? 'default'}</p>
      <a href=''>
        acessar
      </a>
    </li>
  )
}