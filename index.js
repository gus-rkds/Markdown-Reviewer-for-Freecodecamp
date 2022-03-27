
  const Defaulttext = `
  # Welcome to My Markdown Previewer

  ## this is an h2

  \`<div>inlinecode</div>\`

  \`\`\`
  const multipleLinesCode = {
    if(result) {
      return result
    }
  }
  \`\`\`

  [GitHub Pages](https://pages.github.com/)

  - George Washington
  - John Adams
  - Thomas Jefferson

  **random bolt**

  >block quot

  1.Primero
  2.Segundo

  ![This is an image](https://myoctocat.com/assets/images/base-octocat.svg)
  `;

marked.setOptions({
  breaks: true,
  highLight: function (code) {
    return Prism.highLight(code, Prism.languages.javascript, 'javascript')
  }
});

const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
};

const Editor = ({content, changeContent}) =><textarea value={content} onChange={changeContent} id="editor" />

const Previewer = ({ content }) => <div id="preview" dangerouslySetInnerHTML={{
  __html: marked(content, { renderer: renderer })
}} />

const App = () => {
  const [content, setContent] = React.useState(Defaulttext)

  const changeContent = (e) => {
    setContent(e.target.value)
  }

  return (
  <div className="main">
  <Editor content={content} changeContent={changeContent}/>
    <Previewer content={content}/>
  </div>
  )
}


ReactDOM.render(<App />, document.getElementById("root"))