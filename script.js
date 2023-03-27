const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

/*const btn = document.getElementById("love-btn");
btn.addEventListener("click", function () {
    let likes = document.getElementById("likes");
    let likesNum = parseInt(likes.textContent);
  
    likesNum += 1;
    likes.textContent = likesNum;
  });*/

const contentEl = document.getElementById("wrapper");
let html = "";
for (let i = 0; i < posts.length; i++) {
 
  
  
  html += `
    <main>
    <section class="user-post-profile">
      <div class="container">
        <img class="profile-pic" src="${posts[i].avatar}" />
        <div class="artist-info">
          <p class="username bold-text">${posts[i].name}</p>
          <p class="location">${posts[i].location}</p>
        </div>
      </div>
    </section>

    <section>
      <img class="img" src="${posts[i].post}" />
    </section>
  </main>
  <footer>
    
      <div class="icons-div">
        <img id = "love-btn" class="icons" src="images/icon-heart.png" />
        <img class="icons" src="images/icon-comment.png" />
        <img class="icons" src="images/icon-dm.png" />
      </div>

      <p  class="bold-text"><span id="likes">${posts[i].likes}</span> likes</p>
      <p class="user-comment">
        <span class="bold-text">${posts[i].username}</span> ${posts[i].comment}
        
      </p>
    
  </footer> 
  `;
}

contentEl.innerHTML = html;
