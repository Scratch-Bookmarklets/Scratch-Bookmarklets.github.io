window.copy_paste = function(qs) {
  let id = qs.substring(1)
  let post = document.querySelector(`#p${id}`)
  let username = post.querySelector(".username").innerText
  // fetch
  fetch(`/discuss/post/${id}/source`).then(res => res.text()).then(source => {
    paste(`[quote=${username}]\n[url=https://scratch.mit.edu/discuss/post/${id}][color=grey][[]View Post][/color][/url]\n${source}[/quote]`)
  })
}
