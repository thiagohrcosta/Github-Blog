import { Link } from "react-router-dom";
import { TruncateString } from "../../utils/truncateString";
import { PublicationComponentStyle } from "./style";
import { api } from "../../services/api";
import { useEffect, useState } from "react";

interface PublicationProps {
  id: string;
  title: string;
  content: string;
  date: string;
}

export function Publication({ id, title, content, date }: PublicationProps) {
  return (
    <PublicationComponentStyle>
      <Link to={`/content/${id}`}>
        <div className="publication-header">
          <h2>{title}</h2>
          <p>{date}</p>
        </div>
        <div className="publication-content">
          <p><TruncateString content={content} /></p>
        </div>
      </Link>
    </PublicationComponentStyle>
  )
}