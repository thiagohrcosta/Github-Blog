import { TruncateString } from "../../utils/truncateString";
import { PublicationComponentStyle } from "./style";

interface PublicationProps {
  title: string;
  content: string;
  date: string;
}

export function Publication({ title, content, date }: PublicationProps) {
  return (
    <PublicationComponentStyle>
      <div className="publication-header">
        <h2>{title}</h2>
        <p>{date}</p>
      </div>
      <div className="publication-content">
        <p><TruncateString content={content} /></p>
      </div>

    </PublicationComponentStyle>
  )
}