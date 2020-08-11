window.addEventListener("load", Change, false);

function Change(){
  console.log("Images Change to Cats");

  var images = document.getElementsByTagName('img');
  console.log(images);

  for (image of images){

    const cats = [...Array(20).keys()].map(i => "/img/cat" + ++i + ".jpg");
    const cat = cats[Math.floor(Math.random() * cats.length)];
    const url = chrome.extension.getURL(cat);
    console.log(url);

    image.src = url;
    image.srcset = url;
  };

};

var observer = new MutationObserver(Change);
//監視の開始
observer.observe(document.getElementsByTagName("body")[0], {
    attributes: true
});
