export type SeoToolPageKey =
  | 'audit'
  | 'title-tag-checker'
  | 'meta-description-checker'
  | 'open-graph-checker'
  | 'twitter-card-checker'

export type SeoToolPageConfig = {
  key: SeoToolPageKey
  path: string
  navLabel: string
  eyebrow: string
  kicker: string
  headline: [string, string, string]
  description: string
  formLabel: string
  placeholder: string
  focusCheckIds: string[]
  emptyCards: Array<[string, string]>
  guide: Array<{
    title: string
    body: string
  }>
  metadata: {
    title: string
    description: string
  }
}

export const seoToolPages: Record<SeoToolPageKey, SeoToolPageConfig> = {
  audit: {
    key: 'audit',
    path: '/seo-tools',
    navLabel: 'Full SEO Audit',
    eyebrow: 'Free SEO Tool',
    kicker: 'Metadata Audit',
    headline: ['Check your', 'search and', 'social tags.'],
    description:
      'Fetch any public page and audit title, description, Open Graph, Twitter/X cards, canonical, viewport and H1 signals against practical SEO ranges.',
    formLabel: 'Page URL',
    placeholder: 'https://creativewired.com',
    focusCheckIds: [
      'title',
      'description',
      'og:title',
      'og:description',
      'og:image',
      'twitter:card',
      'twitter:title',
      'twitter:description',
      'twitter:image',
    ],
    emptyCards: [
      ['Title and snippets', 'Check search-result copy length, presence and clarity.'],
      ['Social previews', 'Review Open Graph and Twitter/X card coverage.'],
      ['Technical signals', 'Spot missing canonical, viewport and H1 basics.'],
    ],
    guide: [
      {
        title: 'What this audit checks',
        body: 'The full audit reviews the metadata most likely to shape search snippets, social previews, mobile rendering and duplicate-control signals.',
      },
      {
        title: 'How to use the result',
        body: 'Fix missing and bad items first, then refine needs-improvement items where the copy is present but weak, too short or too long.',
      },
      {
        title: 'When to re-check',
        body: 'Run the page again after publishing changes, after a CMS template edit, or before launching paid traffic to a new landing page.',
      },
    ],
    metadata: {
      title: 'Free SEO Meta Tag Checker | Creative Wired',
      description:
        'Analyze title tags, meta descriptions, Open Graph tags, Twitter/X cards, canonical URLs and H1 signals with the free Creative Wired SEO tool.',
    },
  },
  'title-tag-checker': {
    key: 'title-tag-checker',
    path: '/seo-tools/title-tag-checker',
    navLabel: 'Title Tag Checker',
    eyebrow: 'SEO Title Tool',
    kicker: 'Title Length Audit',
    headline: ['Check your', 'title tag', 'before Google.'],
    description:
      'Analyze the page title, character count, length quality and search-preview appearance for any public URL.',
    formLabel: 'URL to check',
    placeholder: 'https://example.com/page',
    focusCheckIds: ['title', 'h1'],
    emptyCards: [
      ['Title length', 'See whether the title sits in the practical 30-60 character range.'],
      ['Search preview', 'Preview how the page title may appear in a search result.'],
      ['Page alignment', 'Compare the title with the main H1 signal.'],
    ],
    guide: [
      {
        title: 'What makes a strong title',
        body: 'A strong title is unique, specific to the page, readable by humans and close enough to the page topic that it will not feel misleading.',
      },
      {
        title: 'Recommended range',
        body: 'Aim for 30-60 characters. Shorter titles often lack context, while very long titles can be rewritten or truncated in search results.',
      },
      {
        title: 'Common fixes',
        body: 'Move the core topic near the front, remove filler words, add brand context only when useful and avoid repeating the same keyword awkwardly.',
      },
    ],
    metadata: {
      title: 'Free Title Tag Checker | SEO Tool by Creative Wired',
      description:
        'Check title tag length, search preview quality and H1 alignment for any public URL with this free SEO title checker.',
    },
  },
  'meta-description-checker': {
    key: 'meta-description-checker',
    path: '/seo-tools/meta-description-checker',
    navLabel: 'Meta Description Checker',
    eyebrow: 'Snippet Tool',
    kicker: 'Description Audit',
    headline: ['Check your', 'meta description', 'like a snippet.'],
    description:
      'Review the meta description, character count and search-result copy quality for any public page.',
    formLabel: 'URL to check',
    placeholder: 'https://example.com/service',
    focusCheckIds: ['description', 'title'],
    emptyCards: [
      ['Snippet copy', 'Check if the description is useful, specific and complete.'],
      ['Character range', 'Compare the description against a practical 70-160 character target.'],
      ['Search context', 'See the description beside the page title and URL.'],
    ],
    guide: [
      {
        title: 'What makes a strong description',
        body: 'A strong description summarizes the page clearly, matches search intent and gives the user a reason to click without sounding like keyword stuffing.',
      },
      {
        title: 'Recommended range',
        body: 'Aim for 70-160 characters. Search engines can choose a different snippet, but a clear meta description gives them a better option.',
      },
      {
        title: 'Common fixes',
        body: 'Mention the offer or topic, add a useful detail such as location or outcome and remove vague phrases that could apply to any page.',
      },
    ],
    metadata: {
      title: 'Free Meta Description Checker | Creative Wired',
      description:
        'Check meta description length, snippet quality and search-preview appearance for any public URL.',
    },
  },
  'open-graph-checker': {
    key: 'open-graph-checker',
    path: '/seo-tools/open-graph-checker',
    navLabel: 'Open Graph Checker',
    eyebrow: 'Social Preview Tool',
    kicker: 'Open Graph Audit',
    headline: ['Check your', 'Open Graph', 'preview tags.'],
    description:
      'Audit og:title, og:description, og:image and og:url tags so shared links look polished on social platforms and messaging apps.',
    formLabel: 'URL to check',
    placeholder: 'https://example.com/blog/post',
    focusCheckIds: ['og:title', 'og:description', 'og:image', 'og:url', 'title', 'description'],
    emptyCards: [
      ['OG title', 'Confirm the social title is present and useful.'],
      ['OG description', 'Check the description used in shared link previews.'],
      ['OG image', 'Spot missing social images before sharing a page.'],
    ],
    guide: [
      {
        title: 'What Open Graph controls',
        body: 'Open Graph tags provide title, description, image and URL data used by many social platforms, chat apps and link-preview systems.',
      },
      {
        title: 'Image guidance',
        body: 'Use a crawlable image with a strong visual crop. A common target is 1200 x 630 pixels for large link previews.',
      },
      {
        title: 'Common fixes',
        body: 'Add og:title, og:description, og:image and og:url to the page template, then verify the final live URL rather than only previewing locally.',
      },
    ],
    metadata: {
      title: 'Free Open Graph Checker | Creative Wired',
      description:
        'Check Open Graph title, description, image and URL tags for any public page with this free social preview tool.',
    },
  },
  'twitter-card-checker': {
    key: 'twitter-card-checker',
    path: '/seo-tools/twitter-card-checker',
    navLabel: 'Twitter/X Card Checker',
    eyebrow: 'Card Preview Tool',
    kicker: 'Twitter/X Audit',
    headline: ['Check your', 'Twitter/X card', 'metadata.'],
    description:
      'Review twitter:card, twitter:title, twitter:description and twitter:image tags, including Open Graph fallback coverage.',
    formLabel: 'URL to check',
    placeholder: 'https://example.com/landing-page',
    focusCheckIds: ['twitter:card', 'twitter:title', 'twitter:description', 'twitter:image', 'og:title', 'og:description', 'og:image'],
    emptyCards: [
      ['Card type', 'Check whether the page declares a Twitter/X card type.'],
      ['Card copy', 'Review title and description coverage.'],
      ['Image fallback', 'See when Open Graph image data is being used as fallback.'],
    ],
    guide: [
      {
        title: 'What Twitter/X cards need',
        body: 'A complete card usually includes twitter:card plus title, description and image tags, or reliable Open Graph fallbacks.',
      },
      {
        title: 'Card type guidance',
        body: 'summary and summary_large_image are common choices. Use the large image format when the visual is important to the click.',
      },
      {
        title: 'Common fixes',
        body: 'Add explicit twitter tags for important pages and make sure the image URL is absolute, crawlable and relevant to the shared page.',
      },
    ],
    metadata: {
      title: 'Free Twitter/X Card Checker | Creative Wired',
      description:
        'Check Twitter/X card type, title, description and image metadata for any public URL, including Open Graph fallback coverage.',
    },
  },
}

export const seoToolPageList = Object.values(seoToolPages)
