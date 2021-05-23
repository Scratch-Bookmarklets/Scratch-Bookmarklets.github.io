window.copy_paste=function(e){let t=e.substring(1),s=document.querySelector(`#p${t}`).querySelector(".username").innerText;fetch(`/discuss/post/${t}/source`).then(e=>e.text()).then(e=>{paste(`[quote=${s}]\n[url=https://scratch.mit.edu/discuss/post/${t}][color=grey][[]View Post][/color][/url]\n${e}[/quote]`)})};
// The below, unminified code is in comments as theres a strange bug that breaks this bookmarklet.
/*
window.copy_paste = function(qs) {
  let id = qs.substring(1)
  let post = document.querySelector(`#p${id}`)
  let username = post.querySelector(".username").innerText
  // fetch
  fetch(`/discuss/post/${id}/source`).then(res => res.text()).then(source => {
    paste(`[quote=${username}]\n[url=https://scratch.mit.edu/discuss/post/${id}][color=grey][[]View Post][/color][/url]\n${source}[/quote]`)
  })
}
*/
