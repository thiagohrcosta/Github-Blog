import { Publication } from "../Publication";
import { PublicationsComponentStyle } from "./style";

interface PublicationsProps {
  publications_number: number
}

export function Publications({ publications_number }: PublicationsProps) {
  return (
    <PublicationsComponentStyle>
      <div className="publication-header">
        <h2>Publications</h2>
        <p>{publications_number} publications</p>
      </div>
      <div className="search-publication-container">
        <input type="text" placeholder="Search content" />
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