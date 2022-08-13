import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import { useGithub } from '../../hooks/useGithub'
import { Details } from './components/Details'

interface Post {
  id: number
  title: string
  created_at: string
  body: string
  comments: number
  updated_at: string
  number: number
  user: {
    login: string
  }
}

export function Article() {
  const { number } = useParams()

  const { getPost } = useGithub()

  const [post, setPost] = useState<Post>({} as Post)

  useEffect(() => {
    async function getNewPost() {
      const newPost = await getPost(Number(number))
      setPost(newPost)
    }

    getNewPost()
  }, [getPost, number])

  if (!post) return <></>

  return (
    <>
      <Details
        comments={post.comments}
        title={post.title}
        updatedAt={post.updated_at}
        username={post.user?.login}
      />
      <section className="mt-10 post">
        <ReactMarkdown>{post.body}</ReactMarkdown>
      </section>
    </>
  )
}
