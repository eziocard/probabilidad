
fetch('http://127.0.0.1:8000/')
  .then(res => res.json()
  .then(response => {
  console.log(response)
  }))
