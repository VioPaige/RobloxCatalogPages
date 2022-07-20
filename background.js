chrome.runtime.onMessage.addListener(async (req, sender, sendres) => {

    if (req.params) {

        if (req.params == "test") {

            console.log(`received test request`)
            sendres({ r: `Test response` })

            chrome.runtime.sendMessage({ params: "backtest" }, (res) => console.log(res))

        } else {




            let promise = new Promise(async (resolve) => {
                /* gets active tab info */

                if (req.params.toLowerCase().includes(`category=15`)) req.params = req.params.toLowerCase().replace(`category=15`, ``)

                // sendres({ somekey: "somevalue" })
                let res = await fetch(`https://catalog.roblox.com/v1/search/items/details?${req.params}&limit=30`).catch((e) => {
    
                    console.log(e)
                    sendres({ r: `An error occured while retrieving catalog data.` })
    
                })
    
                console.log(res)
                res = await res.json()
                console.log(res)
    
                let resp = { r: "response", data: res.data, cursorprev: res.previousPageCursor, cursornext: res.nextPageCursor }
    
                console.log(resp)
                // sendres(resp)

                resolve({ somekey: "somevalue" })
            })

            promise.then((r) => {
                sendResponse(r)
            })

            return true

        }

    } else {

        sendres({ r: `Provide a search query` })

    }

})