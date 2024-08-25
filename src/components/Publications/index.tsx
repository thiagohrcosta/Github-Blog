import { format } from 'date-fns'

import { useEffect, useState } from "react";
import { Publication } from "../Publication";
import { PublicationsComponentStyle } from "./style";
import { api } from "../../services/api";


export function Publications() {
  const [searchParams, setSearchParams] = useState(null);
  const [publicationsCounter, setPublicationsCounter] = useState(null)
  const [publications, setPublications] = useState(null)
  const [publicationId, setPublicationId] = useState(null)

  const [filteredPublications, setFilteredPublications] = useState(null)

  async function handleFectchIssues() {
    const response = await api.get(`https://api.github.com/search/issues?q=repo:thiagohrcosta/Github-Blog`)
    setPublicationsCounter(response.data.total_count)
    setPublications(response.data.items)
    setPublicationId(response.data.number)
    // setPublicationsCounter()
    // console.log("aqui", response.data.items)
  }

  useEffect(() => {
    handleFectchIssues()
  }, [searchParams, publicationsCounter])

  useEffect(() => {
    if (searchParams) {
      const filtered = publications?.filter((publication) =>
        publication.title.toLowerCase().includes(searchParams.toLowerCase()) ||
        publication.body?.toLowerCase().includes(searchParams.toLowerCase())
      );
      setFilteredPublications(filtered);
      setPublicationsCounter(filtered.length);
    } else {
      setFilteredPublications(publications);
      setPublicationsCounter(publications?.length);
    }
  }, [searchParams, publications]);


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
        {filteredPublications?.map((publication) => {
          return (
            <div key={publication.title}>
              <Publication
                id={publication.number}
                title={publication.title}
                content={publication.body || "No description provided by Issue"}
                date={format(publication.created_at, 'MM/dd/yy')}
              />
            </div>
          )}
        )}
      </div>
    </PublicationsComponentStyle>
  )
}