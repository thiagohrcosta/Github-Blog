import { useEffect, useState } from "react";
import { Publication } from "../Publication";
import { PublicationsComponentStyle } from "./style";
import { api } from "../../services/api";


export function Publications() {
  const [searchParams, setSearchParams] = useState(null);
  const [publicationsCounter, setPublicationsCounter] = useState(null)
  const [publications, setPublications] = useState(null)

  async function handleFectchIssues() {
    const response = await api.get(`https://api.github.com/search/issues?q=repo:thiagohrcosta/Github-Blog`)
    setPublicationsCounter(response.data.total_count)
    setPublications(response.data.items)
    // setPublicationsCounter()
    console.log("aqui", response.data.items)
  }

  useEffect(() => {
    handleFectchIssues()
  }, [searchParams, publicationsCounter])

  return (
    <PublicationsComponentStyle>
      <div className="publication-header">
        <h2>Publications</h2>
        <p>{publicationsCounter && publicationsCounter} publications</p>
      </div>
      <div className="search-publication-container">
        <input type="text" placeholder="Search content" onChange={(e) => setSearchParams(e.target.value)} />
      </div>
      <div className="publications-content-container">
        {publications && publications.map((publication) => {
          return (
            <Publication
              title={publication.title}
              content={publication.body || "No description provided by Issue"}
              date={publication.created_at}
            />
          )}
        )}
      </div>
    </PublicationsComponentStyle>
  )
}