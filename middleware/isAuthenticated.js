export default function ({ store, redirect }) {
  if (store.state.user.id === -1) {
    return redirect('/')
  }
}
