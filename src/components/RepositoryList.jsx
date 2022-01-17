import React from "react"
import {RepositoryItem } from "./RepositoryItem"
import {Counter} from "./Counter"

const RepositoryListProps = {
  name : "nome",
  description : "descrição",
  link : "",
}

export const  RepositoryList = () => {
  return(
    <section>
      <h2>Repository List</h2>
      <ul>
        <RepositoryItem repository={RepositoryListProps}/>
        <RepositoryItem repository={RepositoryListProps}/>
        <RepositoryItem />
        <Counter/>
      </ul>
    </section>
  )
}