 // Partners section
 function updateContent(imgNum) {
    // Update the content in col-md-8
    var heading = document.querySelector(".col-md-8 h3");
    var paragraph = document.querySelector(".col-md-8 p");
    var button1 = document.querySelector(".col-md-8 .btn-primary");
    var button2 = document.querySelector(".col-md-8 .btn-secondary");
    var img = document.querySelector("#img-main");

    if (imgNum === 1) {
      heading.textContent = "Logo 1 Clicked";
      paragraph.textContent = "This is some new content for Logo 1.";
      button1.textContent = "Button 1 for Logo 1";
      button2.textContent = "Button 2 for Logo 1";
      img.src = "https://picsum.photos/id/1051/300/300";
    } else if (imgNum === 2) {
      heading.textContent = "Logo 2 Clicked";
      paragraph.textContent = "This is some new content for Logo 2.";
      button1.textContent = "Button 1 for Logo 2";
      button2.textContent = "Button 2 for Logo 2";
      img.src = "https://picsum.photos/id/1052/300/300";
    } else if (imgNum === 3) {
      heading.textContent = "Logo 3 Clicked";
      paragraph.textContent = "This is some new content for Logo 3.";
      button1.textContent = "Button 1 for Logo 3";
      button2.textContent = "Button 2 for Logo 3";
      img.src = "https://picsum.photos/id/1053/300/300";
    } else if (imgNum === 4) {
      heading.textContent = "Logo 4 Clicked";
      paragraph.textContent = "This is some new content for Logo 4.";
      button1.textContent = "Button 1 for Logo 4";
      button2.textContent = "Button 2 for Logo 4";
      img.src = "https://picsum.photos/id/1054/300/300";
    }
  }

  var img1 = document.querySelector("#img1");
  var img2 = document.querySelector("#img2");
  var img3 = document.querySelector("#img3");
  var img4 = document.querySelector("#img4");

  img1.addEventListener("click", function () {
    updateContent(1);
  });

  img2.addEventListener("click", function () {
    updateContent(2);
  });

  img3.addEventListener("click", function () {
    updateContent(3);
  });

  img4.addEventListener("click", function () {
    updateContent(4);
  });

