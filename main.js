let loadingGif = document.getElementById('imgId');
// צרו תוכנית שמקבלת מהמשתמש, שם סדרה ומציגה את המידע על המסך.
// צרו תצוגה של קלט וכפתור, לחיצה על הכפתור מביאה מידע ה API
//  לאחר לחיצה מוצג על המסך המידע אודות אותן סדרות שקיבלנו מה API
// לכל סדרה יוצגו שם סדרה, תמונה בינונית, ז'אנרים ולינק לאתר הסדרה.
// במידה ולא נמצא אובייקט מתאים יש להחזיר הודעה מתאימה.
// אתגר – בצעו את החיפוש בזמן הקלדה והציגו על המסך את כל התוצאות המתאימות.

const moviesApi = 'https://api.tvmaze.com/search/shows?q=';

function myPromise(searchValue) {
  return fetch(`${moviesApi}${searchValue}`, {}).then((res) => {
    return res.json();
  });
}
let allProperties;
let results;
async function searchUsers() {
  try {
    loadingGif.src =
      'https://media2.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif';
    results = await myPromise(searchInput.value);
    console.log(results);
    allProperties = '';
    results.forEach((objItem) => {
      allProperties += `
      <div class="card" style="width: 18rem">
      <div class="card-body">
        ${
          objItem.show.image
            ? `<img class="card-img-top" src="${objItem.show.image.medium}"/>`
            : '<h1>אין תמונה</h1>'
        }
        <h5 class="card-title"> שם הסדרה: ${objItem.show.name} </h5>
        <p class="card-text">ז'אנר: ${
          objItem.show.genres[0] ? objItem.show.genres[0] : `לא צוין`
        }</p>
        <a href="${objItem.show.url}" class="btn btn-primary">לחץ כאן לצפייה</a>
      </div>
      </div>`;
    });
    document.getElementById('mainDiv').innerHTML = allProperties;
    if (results.length == 0) {
      document.getElementById(
        'mainDiv'
      ).innerHTML = `<h1>הסדרה לא נמצאת במאגר</h1>`;
    }
  } catch {
  } finally {
    loadingGif.src = '';
  }
}
