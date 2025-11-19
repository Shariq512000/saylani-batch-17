let test = userName => console.log(`Hello ${userName}`)

setInterval(() => {
    test("John")
}, 2000)