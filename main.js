let loadingGif = document.getElementById('imgId');

function inputAndPrint() {
  h2Id.innerHTML += inputId.value;
}

let clients = [
  {
    userName: 'yudaBayana',
    email: 'yudaBayana@gmail.com',
    fullName: 'Yuda Bayana',
    userImg:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    userName: 'daniMangi',
    email: 'dani@gmail.com',
    fullName: 'Dain Mangi Bayana',
    userImg:
      'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fHBlb3BsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    userName: 'yosi',
    email: 'yosi@gmail.com',
    fullName: 'yosi cohen',
    userImg:
      'https://images.unsplash.com/photo-1463453091185-61582044d556?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBlb3BsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
];

function myPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      for (let i = 0; i < clients.length; i++) {
        if (clients[i].userName == inputId.value) {
          let allProperties = `
          <div class="card" style="width: 18rem">
          <div class="card-body">     
            <img class="card-img-top" src="${clients[i].userImg}"/>
            <h5 class="card-title"> שם משתמש:  ${clients[i].userName}</h5>
            <p class="card-text">שם מלא:  ${clients[i].fullName}</p>
            <a href="#" class="btn btn-primary">אימייל:  ${clients[i].email}</a>
          </div>
          </div>`;
          resolve(allProperties);
        }
      }
      reject(`the username ${inputId.value} is not included`);
    }, 2000);
  });
}

async function inputAndPrint() {
  try {
    loadingGif.src =
      'https://media2.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif';
    mainDiv.innerHTML = await myPromise();
  } catch (rej) {
    mainDiv.innerHTML = `<h1>${rej}</h1>`;
  } finally {
    loadingGif.src = '';
  }
}
