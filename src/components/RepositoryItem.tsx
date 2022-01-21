interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  };
}

export const RepositoryItem = (repository: RepositoryItemProps) => {
  return(
    <li>
      <p>{repository?.repository.html_url ?? 'default'}</p>
      <p>{repository?.repository.name ?? 'default'}</p>
      <a href={repository?.repository.html_url}>
        acessar
      </a>
    </li>
  )
}