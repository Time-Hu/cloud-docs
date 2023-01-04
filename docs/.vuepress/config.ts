import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
  title: 'HStream Platform',
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]],
  theme: defaultTheme({
    logo: '/logo.svg',
    sidebar: [
      {
        text: 'Introduction',
        children: [
          { text: 'What is HStream Platform', link: '/introduction/what-is-hstream-platform' },
          { text: 'Architecture', link: '/introduction/architecture' },
        ],
      },
      {
        text: 'Getting Started',
        children: [
          { text: 'Apply for a Trial', link: '/getting-started/apply-for-a-trial' },
          { text: 'Try out HStream Platform', link: '/getting-started/try-out-hstream-platform' },
        ],
      },
      {
        text: 'Manage Streams',
        children: [
          { text: 'Create a Stream', link: '/manage-streams/create-a-stream' },
          { text: 'Write Records to a Stream', link: '/manage-streams/write-records-to-a-stream' },
          { text: 'Stream Details', link: '/manage-streams/stream-details' },
          { text: 'Delete a Stream', link: '/manage-streams/delete-a-stream' },
        ],
      },
      {
        text: 'Manage Subscriptions',
        children: [
          { text: 'Create a Subscription', link: '/manage-subscriptions/create-a-subscription' },
          // {
          //   text: 'Consume Records from a Subscription',
          //   link: '/manage-subscriptions/consume-records-from-a-subscription',
          // },
          { text: 'Subscription Details', link: '/manage-subscriptions/subscription-details' },
          { text: 'Delete a Subscription', link: '/manage-subscriptions/delete-a-subscription' },
        ],
      },
      {
        text: 'Data Query',
        children: [{ text: 'Query Records', link: '/data-query/query-records' }],
      },
      {
        text: 'Connect with Clients',
        children: [
          { text: 'Java', link: '/clients/java' },
          { text: 'Python', link: '/clients/python' },
          { text: 'Go', link: '/clients/go' },
          { text: 'Rust', link: '/clients/rust' },
          { text: 'Erlang', link: '/clients/erlang' },
        ],
      },
      {
        text: 'API',
        children: [
          { text: 'API Overview', link: '/api/overview' },
          { text: 'API Reference', link: '/api/reference' },
        ],
      },
    ],
    themePlugins: {
      backToTop: false,
    },
  }),
})
