import path, { resolve } from "path"
import fs from "fs"
// @ts-ignore
import MarkdownIt from "markdown-it"
// @ts-ignore
import mdContainer from "markdown-it-container"
// @ts-ignore
import type Token from "markdown-it/lib/token"
import { highlight } from "../utils/highlight"
import { docRoot } from "./global"
const localMd = MarkdownIt()

interface ContainerOpts {
  marker?: string | undefined
  validate?(params: string): boolean
  render?(tokens: Token[], index: number): string
}
export const mdPlugin = (md: MarkdownIt) => {
  md.use(mdContainer, "demo", {
    validate(params) {
      return !!params.trim().match(/^demo\s*(.*)$/)
    },
    render(tokens, idx) {
      const m = tokens[idx].info.trim().match(/^demo\s+(.*)$/)
      if (tokens[idx].nesting === 1) {
        /* means the tag is opening */
        const description = m && m.length > 1 ? m[1] : ""
        const sourceFileToken = tokens[idx + 2]
        let source = ""
        // demo文件名称
        const sourceFile = sourceFileToken.children?.[0].content ?? ""
        if (sourceFileToken.type === "inline") {
          // 读取示列代码文件
          const _path = path.resolve(docRoot, "pages", `${sourceFile.replace('@', '')}.vue`)
          console.log(_path)
          source = fs.readFileSync(_path, "utf-8")
        }
        if (!source) throw new Error(`Incorrect source file: ${sourceFile}`)
        // opening tag
        return `<Demo source="${encodeURIComponent(highlight(source, "vue"))}"
                        path="${sourceFile}"
                        raw-source="${encodeURIComponent(source)}"
                        description="${encodeURIComponent(localMd.render(description))}">`
      } else {
        // closing tag
        return "</Demo>\n"
      }
    }
  } as ContainerOpts)
}
