document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.querySelector ('#name');
    const usernameElement = document.querySelector ('#username');
    const avatarElement = document.querySelector ('#avatar');
    const bioElement = document.querySelector ('#bio');
    const reposElement = document.querySelector ('#repos');
    const followersElement = document.querySelector ('#followers');
    const followingElement = document.querySelector ('#following');
    const linkElement = document.querySelector ('#link');

    fetch ('https://api.github.com/users/FernandoSilvaDev')
        .then (function (res) {
            return res.json();
        })
        .then(function(json) {
            nameElement.innerText = json.name;
            usernameElement.innerText = json.login;
            avatarElement.src = json.avatar_url;
            bioElement.innerText = json.bio;
            followingElement.innerText = json.following;
            followersElement.innerText = json.followers;
            reposElement.innerText = json.public_repos;
            linkElement.href = json.html_url;
        })
})