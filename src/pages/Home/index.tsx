import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { HeaderProfile } from "../../components/HeaderProfile";
import { Publications } from "../../components/Publications";
import { api } from "../../services/api";

export function Home() {
  const [user, setUser] = useState(null);

  async function fetchUserData() {
    const response = await api.get("/users/thiagohrcosta")
    setUser(response.data)
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <>
      <Header />
      {user && (
        <>
          <HeaderProfile
            name={user.name}
            bio={user.bio}
            followers={user.followers}
            avatar_url={user.avatar_url}
          />
          <Publications
            publications_number={user.public_repos}
          />
        </>
      )}
    </>
  )
}