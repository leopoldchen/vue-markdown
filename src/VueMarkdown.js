import markdownIt from 'markdown-it'
import emoji from 'markdown-it-emoji'
import subscript from 'markdown-it-sub'
import superscript from 'markdown-it-sup'
import footnote from 'markdown-it-footnote'
import deflist from 'markdown-it-deflist'
import abbreviation from 'markdown-it-abbr'
import insert from 'markdown-it-ins'
import mark from 'markdown-it-mark'
import toc from 'markdown-it-toc-and-anchor'
import katex from 'markdown-it-katex'
import highlightjs from 'markdown-it-highlight'
import tasklists from 'markdown-it-task-lists'
import virtualize from 'snabbdom-virtualize'

const snabbdom = require('snabbdom')
const snabbdomPatch = snabbdom.init([
  require('snabbdom/modules/attributes').default,
  require('snabbdom/modules/class').default,
  require('snabbdom/modules/dataset').default,
  require('snabbdom/modules/eventlisteners').default,
  require('snabbdom/modules/hero').default,
  require('snabbdom/modules/props').default,
  require('snabbdom/modules/style').default,
])

export default {
  template: '<div ref="markdown"><slot></slot></div>',

  data() {
    return {
      sourceData: this.source,
    }
  },

  props: {
    watches: {
      type: Array,
      default: () => ['source', 'show', 'toc'],
    },
    source: {
      type: String,
      default: ``,
    },
    show: {
      type: Boolean,
      default: true,
    },
    highlight: {
      type: Boolean,
      default: true
    },
    html: {
      type: Boolean,
      default: true,
    },
    xhtmlOut: {
      type: Boolean,
      default: true,
    },
    breaks: {
      type: Boolean,
      default: true,
    },
    linkify: {
      type: Boolean,
      default: true,
    },
    emoji: {
      type: Boolean,
      default: true,
    },
    typographer: {
      type: Boolean,
      default: true,
    },
    langPrefix: {
      type: String,
      default: 'language-',
    },
    quotes: {
      type: String,
      default: '“”‘’',
    },
    tableClass: {
      type: String,
      default: 'table',
    },
    taskLists: {
      type: Boolean,
      default: true
    },
    toc: {
      type: Boolean,
      default: false,
    },
    tocId: {
      type: String,
    },
    tocClass: {
      type: String,
      default: 'table-of-contents',
    },
    tocFirstLevel: {
      type: Number,
      default: 2,
    },
    tocLastLevel: {
      type: Number,
    },
    tocAnchorLink: {
      type: Boolean,
      default: true,
    },
    tocAnchorClass: {
      type: String,
      default: 'toc-anchor',
    },
    tocAnchorLinkSymbol: {
      type: String,
      default: '#',
    },
    tocAnchorLinkSpace: {
      type: Boolean,
      default: true,
    },
    tocAnchorLinkClass: {
      type: String,
      default: 'toc-anchor-link',
    },
    anchorAttributes: {
      type: Object,
      default: () => ({})
    },
    prerender: {
      type: Function,
      default: (sourceData) => {
        return sourceData
      }
    },
    postrender: {
      type: Function,
      default: (htmlData) => {
        return htmlData
      }
    }
  },

  computed: {
    tocLastLevelComputed() {
      return this.tocLastLevel > this.tocFirstLevel ? this.tocLastLevel : this.tocFirstLevel + 1
    }
  },

  beforeMount() {
    if(this.$slots.default){
      this.sourceData = ''
      for(let slot of this.$slots.default) {
        this.sourceData += slot.text
      }
    }
  },

  mounted() {
    this.regenerateMD()
    this.renderMarkdown()

    this.$watch('source', () => {
      this.sourceData = this.prerender(this.source)
      this.renderMarkdown()
    })

    this.watches.forEach((v) => {
      if(v !== 'source'){
        this.$watch(v, () => {
          this.regenerateMD()
          this.renderMarkdown()
        })
      }
    })

  },

  methods: {
    regenerateMD() {
      this.md = new markdownIt()
        .use(subscript)
        .use(superscript)
        .use(footnote)
        .use(deflist)
        .use(abbreviation)
        .use(insert)
        .use(mark)
        .use(katex, {
          "throwOnError": false,
          "errorColor": " #cc0000"
        })
        .use(tasklists, {
          enabled: this.taskLists
        })

      if (this.emoji) {
        this.md.use(emoji)
      }

      if (this.highlight) {
        this.md.use(highlightjs);
      }

      this.md.set({
        html: this.html,
        xhtmlOut: this.xhtmlOut,
        breaks: this.breaks,
        linkify: this.linkify,
        typographer: this.typographer,
        langPrefix: this.langPrefix,
        quotes: this.quotes,
      })
      this.md.renderer.rules.table_open = () => `<table class="${this.tableClass}">\n`
      let defaultLinkRenderer = this.md.renderer.rules.link_open ||
        function (tokens, idx, options, env, self) {
          return self.renderToken(tokens, idx, options)
        }
      this.md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
        Object.keys(this.anchorAttributes).map((attribute) => {
          let aIndex = tokens[idx].attrIndex(attribute)
          let value = this.anchorAttributes[attribute]
          if (aIndex < 0) {
            tokens[idx].attrPush([attribute, value]) // add new attribute
          } else {
            tokens[idx].attrs[aIndex][1] = value
          }
        })
        return defaultLinkRenderer(tokens, idx, options, env, self)
      }

      if (this.toc) {
        this.md.use(toc, {
          tocClassName: this.tocClass,
          tocFirstLevel: this.tocFirstLevel,
          tocLastLevel: this.tocLastLevelComputed,
          anchorLink: this.tocAnchorLink,
          anchorLinkSymbol: this.tocAnchorLinkSymbol,
          anchorLinkSpace: this.tocAnchorLinkSpace,
          anchorClassName: this.tocAnchorClass,
          anchorLinkSymbolClassName: this.tocAnchorLinkClass,
          tocCallback: (tocMarkdown, tocArray, tocHtml) => {
            if (tocHtml) {
              if (this.tocId && document.getElementById(this.tocId)) {
                document.getElementById(this.tocId).innerHTML = tocHtml
              }

              this.$emit('toc-rendered', tocHtml)
            }
          },
        })
      }
    },

    renderMarkdown() {
      if(!this.md) return
      let outHtml = this.md.render(this.show ? this.prerender(this.sourceData) : '')
      outHtml = '<div>' + this.postrender(outHtml) + '</div>'
      let newVNode = virtualize(outHtml)
      let oldVNode = virtualize(this.$refs.markdown)
      snabbdomPatch(oldVNode, newVNode)
    },
  }
}
