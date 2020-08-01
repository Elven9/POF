console.log("Hello World Trusted Site.")
console.log(`Origin of this request issued from: ${window.origin}`)

fetch("http://172.19.45.112:8001", {
  method: "POST",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    origin: window.origin
  })
}).then(data => {
  console.log(data)
})