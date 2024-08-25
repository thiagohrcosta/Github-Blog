import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Link, useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { HeaderProfile } from "../../components/HeaderProfile";
import { PublicationContentContainer } from "./styles";

export function PublicationContent() {
  const { id } = useParams()

  const [comments, setComments] = useState(null);
  
  async function fetchComents() {
    const response = await api.get(`https://api.github.com/repos/thiagohrcosta/Github-Blog/issues/${id}/comments`)
    setComments(response.data)
    console.log("AQUI", response.data)
  }

  useEffect(() => {
    fetchComents()
  }, [])
  return (
    <>
      <Header />
      <PublicationContentContainer>
        <div className="publication-header-container">
          <h1>Issue Comments</h1>
          <Link to={"/"}>Go Back</Link>
        </div>
        {comments?.map((comment) => {
          return (
            <div className="comment-container">
              <div className="user-info">
                <img src={comment.user.avatar_url} />
                <h3>{comment.user.login}</h3>
              </div>
              <hr />
              <p>{comment.body}</p>
            </div>
          )
        })}
      </PublicationContentContainer>
    </>
  )
}