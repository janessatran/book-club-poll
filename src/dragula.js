// self executing function here
(function () {
  console.log("READY");
  // your page initialization code here
  // the DOM will be available here

  var ele = document.querySelector("body");
  var observer = new MutationObserver(fnCheckChanges);
  observer.observe(ele, {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true,
  });
})();

function fnCheckChanges() {
  const bookClubPoll = document.querySelector("book-club-poll");

  bookClubPoll.attachShadow({ mode: "open" });
  const books = bookClubPoll.shadowRoot?.querySelectorAll("drag-container");

  if (books) {
    console.log("BOOKS");
    dragula([books[0], books[1]]);
    observer.disconnect();
  }
}
