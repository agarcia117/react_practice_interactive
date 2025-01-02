import ReactMarkdown from 'react-markdown'

function ClaudeRecipe(props) {
  return(
    <>
      <section className='suggested-recipe-container' aria-live='polite'>
        <h2>Chef Claude Recommends:</h2>
        <ReactMarkdown>{props.data}</ReactMarkdown>
      </section>
    </>
  )
}

export default ClaudeRecipe


