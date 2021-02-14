export default async ({ store }) => {
  await store.dispatch('getLoggedInUser')
}
