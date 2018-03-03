const MENU_ID = "ff-image-search";

browser.menus.create({
    id: MENU_ID,
    title: "Search image on Google",
    contexts: ["image"]
});

browser.menus.onClicked.addListener(function(info, tab){

    if(info.menuItemId === MENU_ID){
        const url = "https://www.google.com/searchbyimage?image_url="+encodeURIComponent(info.srcUrl);

        var creating = browser.tabs.create({
            url: url
        });
    }

 
});
