function html() {

    return `
<svg width="380px" height="500px" viewBox="0 0 837 1045" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
    <path d="M353,9 L626.664028,170 L626.664028,487 L353,642 L79.3359724,487 L79.3359724,170 L353,9 Z" id="Polygon-1" stroke="#007FB2" stroke-width="6" sketch:type="MSShapeGroup"></path>
    <path d="M78.5,529 L147,569.186414 L147,648.311216 L78.5,687 L10,648.311216 L10,569.186414 L78.5,529 Z" id="Polygon-2" stroke="#EF4A5B" stroke-width="6" sketch:type="MSShapeGroup"></path>
    <path d="M773,186 L827,217.538705 L827,279.636651 L773,310 L719,279.636651 L719,217.538705 L773,186 Z" id="Polygon-3" stroke="#795D9C" stroke-width="6" sketch:type="MSShapeGroup"></path>
    <path d="M639,529 L773,607.846761 L773,763.091627 L639,839 L505,763.091627 L505,607.846761 L639,529 Z" id="Polygon-4" stroke="#F2773F" stroke-width="6" sketch:type="MSShapeGroup"></path>
    <path d="M281,801 L383,861.025276 L383,979.21169 L281,1037 L179,979.21169 L179,861.025276 L281,801 Z" id="Polygon-5" stroke="#36B455" stroke-width="6" sketch:type="MSShapeGroup"></path>
</g>
</svg>
<div class="message-box">
<h1>Error 666</h1>
<p class="para">Youer stoodent desbord got blokced</p>
</div>
`

}


function css() {

    return `
    <style>
        body {
            background-color: #2F3242;
        }
        svg {
            position: absolute;
            top: 50%;
            left: 50%;
            margin-top: -250px;
            margin-left: -400px;
        }
        .message-box {
            height: 200px;
            width: 380px;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-top: -100px;
            margin-left: 50px;
            color: #FFF;
            font-family: Roboto;
            font-weight: 300;
        }
        .message-box h1 {
            font-size: 60px;
            line-height: 46px;
            margin-bottom: 40px;
        }
        .buttons-con .action-link-wrap {
            margin-top: 40px;
        }
        .buttons-con .action-link-wrap a {
            background: #68c950;
            padding: 8px 25px;
            border-radius: 4px;
            color: #FFF;
            font-weight: bold;
            font-size: 14px;
            transition: all 0.3s linear;
            cursor: pointer;
            text-decoration: none;
            margin-right: 10px
        }
        .buttons-con .action-link-wrap a:hover {
            background: #5A5C6C;
            color: #fff;
        }
        
        #Polygon-1 , #Polygon-2 , #Polygon-3 , #Polygon-4 , #Polygon-4, #Polygon-5 {
            animation: float 1s infinite ease-in-out alternate;
        }
        #Polygon-2 {
            animation-delay: .2s; 
        }
        #Polygon-3 {
            animation-delay: .4s; 
        }
        #Polygon-4 {
            animation-delay: .6s; 
        }
        #Polygon-5 {
            animation-delay: .8s; 
        }
        
        @keyframes float {
            100% {
            transform: translateY(20px);
            }
        }
        @media (max-width: 450px) {
            svg {
            position: absolute;
            top: 50%;
            left: 50%;
            margin-top: -250px;
            margin-left: -190px;
            }
            .message-box {
            top: 50%;
            left: 50%;
            margin-top: -100px;
            margin-left: -190px;
            text-align: center;
            }
        }
        .para {
            font-size: 50px;
        }
    </style>
    `

}






let target = "roblox.com/catalog"


if (window.location.href.includes(target)) {

    let ul = document.getElementsByClassName(`hlist item-cards-stackable ng-scope`)[0]
    ul.style = "display: none"

    let newul = document.createElement('ul')
    newul.classList = "hlist item-cards-stackable ng-scope"

    let div = document.getElementById('results')
    // div.appendChild(newul)

    chrome.runtime.sendMessage({ params: window.location.href.split('catalog?')[1] }, async (res) => {

        console.log(res)

        let arr = [
            {
                "id": 7389760234,
                "itemType": "Asset",
                "assetType": 46,
                "name": "Bauble Potion",
                "description": "Green Scientist's favorite, home-concocted, destructive potion. The chemicals inside are volatile when mixed.\n\nMeant to be worn on Blocky bodies.\nSlim: https://www.roblox.com/catalog/7852978987/Bauble-Potion-Slim",
                "productId": 1200606572,
                "genres": [
                    "All"
                ],
                "itemStatus": [],
                "itemRestrictions": [],
                "creatorType": "User",
                "creatorTargetId": 1882767190,
                "creatorName": "popstarpiranhas",
                "hasVerifiedBadge": false,
                "price": 100,
                "favoriteCount": 1269,
                "offSaleDeadline": null
            },
            {
                "id": 6204738186,
                "itemType": "Asset",
                "assetType": 46,
                "name": "Port-a-Noia Tea Dispenser 1.0",
                "description": "Style your avatar with this lovely backpack that works as a tea dispenser! in collaboration with Metanoia Tea Shop\nhttps://www.roblox.com/groups/5486081/metanoia#!/about",
                "productId": 1138628716,
                "genres": [
                    "All"
                ],
                "itemStatus": [],
                "itemRestrictions": [],
                "creatorType": "User",
                "creatorTargetId": 210231230,
                "creatorName": "MatthewDeIRey",
                "hasVerifiedBadge": false,
                "price": 100,
                "favoriteCount": 2789,
                "offSaleDeadline": null
            },
            {
                "id": 6154231095,
                "itemType": "Asset",
                "assetType": 46,
                "name": "Tech Ghost's Pulse Rifle",
                "description": "Never fade away...\n\nThe Tech Ghost:\nhttps://www.roblox.com/catalog?Keyword=Tech&Category=13&Subcategory=40&CreatorName=JohnDrinkin\n\nClothing here provided by GreenBIak:\nhttps://www.roblox.com/catalog/6160645977/Tech-Ghosts-Armor\nhttps://www.roblox.com/catalog/6160644133/Tech-Ghosts-Armor",
                "productId": 1134701942,
                "genres": [
                    "All"
                ],
                "itemStatus": [],
                "itemRestrictions": [],
                "creatorType": "User",
                "creatorTargetId": 605939,
                "creatorName": "JohnDrinkin",
                "hasVerifiedBadge": false,
                "price": 100,
                "favoriteCount": 1092,
                "offSaleDeadline": null
            }
        ]

        for (let i of arr) {

            let newli = document.createElement('li')
            newli.classList = "list-item item-card ng-scope"
            newli["item-card"] = ""
            newli["ng-controller"] = "itemCardController"

            let thumb = await fetch(`https://thumbnails.roblox.com/v1/assets?assetIds=${i.id}&size=150x150&format=Png&isCircular=false`).catch((e) => console.log(e))
            thumb = await thumb.json()
            console.log(thumb)

                // let newa = document.createElement('a')
                // newa.href = `https://www.roblox.com/catalog/${i.id}`
                // newa.target = "_blank"
                // newa.classList = "item-card-container"
                // newa["ng-click"] = 
            let inner = `<a href="https://www.roblox.com/catalog/${i.id}" target="_blank" class="item-card-container"
                    ng-click="clickItemCard($event)" title="${i.name}">
                    <!-- ngIf: item.itemStatusIconsAndLabels.length > 0 -->
                    <div class="item-card-link">
                        <div class="item-card-thumb-container">
                            <thumbnail-2d class="item-card-thumb ng-isolate-scope" thumbnail-type="item.thumbnailType"
                                thumbnail-target-id="${i.id}" alt-name="${i.name}">
                                <span ng-class="$ctrl.getCssClasses()" class="thumbnail-2d-container" thumbnail-type="Asset"
                                    thumbnail-target-id="${i.id}">
                                    <!-- ngIf: $ctrl.thumbnailUrl && !$ctrl.isLazyLoadingEnabled() -->
                                    <img ng-if="$ctrl.thumbnailUrl &amp;&amp; !$ctrl.isLazyLoadingEnabled()"
                                        ng-src="${thumb.imageUrl}"
                                        thumbnail-error="$ctrl.setThumbnailLoadFailed"
                                        ng-class="{'loading': $ctrl.thumbnailUrl &amp;&amp; !isLoaded }" image-load=""
                                        alt="${i.name}" title="${i.name}" class="ng-scope ng-isolate-scope"
                                        src="${thumb.data[0].imageUrl}">
                                    <!-- end ngIf: $ctrl.thumbnailUrl && !$ctrl.isLazyLoadingEnabled() -->
                                    <!-- ngIf: $ctrl.thumbnailUrl && $ctrl.isLazyLoadingEnabled() -->
                                </span>
                            </thumbnail-2d>
                            <span ng-show="item.itemRestrictionIcon" ng-class="item.itemRestrictionIcon" class="ng-hide">
            
                            </span>
                        </div>
                    </div>
                    <!-- ngIf: layout.isItemDetailsLoaded || (item.detailsLoaded && isInfiniteScrollWebEnabled()) -->
                    <div class="item-card-caption ng-scope"
                        ng-if="layout.isItemDetailsLoaded || (item.detailsLoaded &amp;&amp; isInfiniteScrollWebEnabled())">
                        <div class="item-card-name-link">
                            <div class="item-card-name ng-binding" title="${i.name}">
                                ${i.name}
                            </div>
                        </div>
                        <div class="text-overflow item-card-price font-header-2 text-subheader ng-scope"
                            ng-class="{'margin-top-none' : hasSecondaryInfo()}" ng-if="!item.priceStatus">
                            <span class="icon icon-robux-16x16 ng-scope" ng-if="getDisplayPrice() || item.lowestPrice">
            
                            </span>
                            <span class="text-robux-tile ng-binding ng-scope" ng-if="getDisplayPrice() &amp;&amp; !item.lowestPrice"
                                ng-bind="getDisplayPrice() | number">
                                ${i.price}
                            </span>
                        </div>
                    </div>
                </a>`

            newli.innerHTML = inner
            newul.appendChild(newli)

        }

        div.appendChild(newul)

    })

}

// for (let i of blocked) {

//     if (window.location.hostname.includes(i)) {

//         document.head.innerHTML = css()
//         document.body.innerHTML = html()

//     }

// }