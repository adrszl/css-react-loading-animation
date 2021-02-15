import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {

  const content = {
    header: `So, how 'bout them Knicks?`,
    intro: `What are their names? I'm Santa Claus! This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Good news, everyone! I've taught the toaster to feel love!`,
    list: [
      `Yes! In your face, Gandhi!`,
      `So I really am important? How I feel when I'm drunk is correct?`,
      `Who are those horrible orange men?`
    ]
  }

  return (
    <main>
      <h1>{ content.header }</h1>
      <p>{ content.intro }</p>
      <ul>
        { content.list.map((item, i) => {
          return (
            <li key={i}>{ item }</li>
          )
        })}
      </ul>
    </main>
  )
}
