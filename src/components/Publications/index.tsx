import { useEffect, useState } from "react";
import { Publication } from "../Publication";
import { PublicationsComponentStyle } from "./style";
import { api } from "../../services/api";


export function Publications() {
  const [searchParams, setSearchParams] = useState(null);
  const [publicationsCounter, setPublicationsCounter] = useState(null)

  async function handleFectchIssues() {
    if (searchParams) {
      const response = await api.get(`https://api.github.com/search/issues?q=${searchParams}:thiagohrcosta/Github-Blog`)
      // setPublicationsCounter(response.data.total_count)
      console.log("aqui", response.data)
    }
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
        <Publication
          title="JavaScript data types and data structures"
          content="Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn."
          date="19/08/2024"
        />
        <Publication
          title="JavaScript data types and data structures"
          content="Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn."
          date="19/08/2024"
        />
        <Publication
          title="JavaScript data types and data structures"
          content="Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn."
          date="19/08/2024"
        />
        <Publication
          title="JavaScript data types and data structures"
          content="Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn."
          date="19/08/2024"
        />
      </div>
    </PublicationsComponentStyle>
  )
}