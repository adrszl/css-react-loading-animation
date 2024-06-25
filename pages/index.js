import { useState, useEffect } from "react";

export default function Home() {
  const [loadingState, updateLoadingState] = useState(true);
  const [contentState, updateContentState] = useState({
    header: 'Loading',
    subHeader: 'Loading',
    intro: 'Loading',
    list: [
      'Loading',
      'Loading',
      'Loading'
    ]
  })

  const content = {
    header: `React loading animation for placeholder`,
    subHeader: `So, how 'bout them Knicks?`,
    intro: `What are their names? I'm Santa Claus! This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Good news, everyone! I've taught the toaster to feel love!`,
    list: [
      `Yes! In your face, Gandhi!`,
      `So I really am important? How I feel when I'm drunk is correct?`,
      `Who are those horrible orange men?`,
    ]
  };

  useEffect(() => {
    setTimeout(() => {
      updateContentState(content);
      updateLoadingState(false);
    }, 2000);
  }, []);

  return (
    <div className="container">
      <main className={loadingState ? 'loading' : ''}>
        <h1>{contentState.header}</h1>
        <h2>{contentState.subHeader}</h2>
        <p>{contentState.intro}</p>
        <ul>
          {Array.isArray(contentState.list) &&
            contentState.list.map((item, i) => {
              return <li>{item}</li>;
            })}
        </ul>
      </main>
      <footer className={loadingState ? 'loading' : ''}>
        {loadingState ? "Loading..." : <span>Want to see other projects? Check them <a href="https://adrian-szlegel-personal-projects.netlify.app/" target="_blank" style={{color: "blue", texDecoration: "underline"}}>here</a></span>}
      </footer>
    </div>
  );
}
