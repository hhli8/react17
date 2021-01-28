import React from 'react'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'
// import 'highlight.js/styles/monokai-sublime.css'
import 'highlight.js/styles/a11y-dark.css'
// https://highlightjs.org/static/demo/ 样式demo
// https://www.jianshu.com/p/038d0a6c503f
import styles from './style/code.scss'
export default (props) => {
  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: true,
    smartLists: true,
    smartypants: true,
    highlight: function (code) {
      return hljs.highlightAuto(code).value
    }
  })
  return (
    <div className={styles['code-container']} dangerouslySetInnerHTML={{__html: marked(props.code)}}></div>
  )
}
