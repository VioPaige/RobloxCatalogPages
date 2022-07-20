chrome.runtime.onMessage.addListener(async (req, sender, sendres) => {

    if (req.params) {

        if (req.params.toLowerCase().includes(`category=15`)) req.params = req.params.toLowerCase().replace(`category=15`, ``)

        // await fetch(`https://catalog.roblox.com/v1/search/items/details?${req.params}&limit=30`)
        sendres({ r: `yes` })

    } else {

        sendres({ r: `Provide a search query` })

    }

})