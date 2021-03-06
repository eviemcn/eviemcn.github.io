var api_key = 'ede34f68bfab5ab14120091e2f7d41d0';
var user = 'eviemcnaughton';
var api_root = 'https://ws.audioscrobbler.com/2.0/';
var lastfm_root = 'https://www.last.fm/music/';
var speaker_class = 'glyphicon glyphicon-volume-up';

var album_outer = "album-outer";
var album_class = "album-cover";
var cover_class = "album-front";
var link_class = "album-link";
var text_class = "album-text";
var text_container_class = "album-back";
var album_count = 0;

var artist_outer = "artist-outer";
var artist_image = "artist-image";
var artist_link = "artist-link";
var artist_text = "artist-text";

function drawAlbums(){
    // request albums
    var albumsRequest = new XMLHttpRequest();
    albumsRequest.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            processAlbumsRequest(JSON.parse(this.response));
        }
    };

    albumsRequest.open("GET", api_root + "?method=user.gettopalbums&period=1month&user=" + user + "&api_key=" + api_key + "&format=json")
    albumsRequest.send();
}

function drawAlbumsSixMonths(){
    // request albums
    var albumsRequest = new XMLHttpRequest();
    albumsRequest.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            processAlbumsRequest(JSON.parse(this.response));
        }
    };

    albumsRequest.open("GET", api_root + "?method=user.gettopalbums&period=6month&user=" + user + "&api_key=" + api_key + "&format=json")
    albumsRequest.send();
}

function drawAlbumsOverall(){
    // request albums
    var albumsRequest = new XMLHttpRequest();
    albumsRequest.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            processAlbumsRequest(JSON.parse(this.response));
        }
    };

    albumsRequest.open("GET", api_root + "?method=user.gettopalbums&period=overall&user=" + user + "&api_key=" + api_key + "&format=json")
    albumsRequest.send();
}

// loads the album cover grid based on the api response when top albums is requested.
function processAlbumsRequest(response) {
    
    removeAlbums(album_count);
    var container = document.getElementById("album-collage");
    var albums = response.topalbums.album;
    album_count = albums.length;

    var i;
    for (i = 0; i < albums.length; i++){
        var album = albums[i];
        var imageURL = album.image[3]['#text'];

        // create the album-cover.
        var outer = document.createElement("div");
        outer.className = album_outer;
        var flip_card = document.createElement("div");
        flip_card.className = album_class;
        outer.appendChild(flip_card);

        flip_card.addEventListener('click', function() {
            if (!this.classList.contains('on')) {
                this.classList.remove('off');
                this.classList.add('on');
            } else {
                this.classList.remove('on');
                this.classList.add('off');
            }
        });

        // construct the text div to overlay it and append it to flip card
        var textDiv = constructAlbumTextDiv(album);
        flip_card.appendChild(textDiv);
        
        var cover = document.createElement("div");
        cover.className = cover_class;
        cover.style.backgroundImage = "url('" + imageURL + "')";
        
        flip_card.appendChild(cover);

        // make the album cover into a link
        var albumLink = album.url;
        var albumLinkElement = document.createElement("a");
        albumLinkElement.href = albumLink;
        albumLinkElement.target = '_blank';
        var linkSpan = document.createElement("span");
        linkSpan.className = link_class;
        albumLinkElement.appendChild(linkSpan);
        flip_card.appendChild(albumLinkElement);

        container.appendChild(outer);
    }
}


// helper to create the div that will be added to the album-cover, holding info about the album.
function constructAlbumTextDiv(albumObj) {
    var artistName = albumObj.artist.name;
    var albumName = albumObj.name;
    var plays = albumObj.playcount;
    var textContainer = document.createElement("div");
    textContainer.className = text_class;

    var titleEl = document.createElement("h5");
    titleEl.appendChild(document.createTextNode(albumName));
    textContainer.appendChild(titleEl);

    var artistEl = document.createElement("h6");
    artistEl.appendChild(document.createTextNode(artistName));
    textContainer.appendChild(artistEl);

    var playCountEl = document.createElement("p");
    playCountEl.appendChild(document.createTextNode("Plays: " + plays));
    textContainer.appendChild(playCountEl);

    var textWrapper = document.createElement("div");
    textWrapper.className = text_container_class;
    textWrapper.appendChild(textContainer);

    return textWrapper;
}

function removeAlbums(albumCount){
    var container = document.getElementById("album-collage");
    for (var i = 0; i < albumCount; i++){
        container.removeChild(container.childNodes[0]);
    }
    album_count = 0;
}

window.onload = drawAlbums();
