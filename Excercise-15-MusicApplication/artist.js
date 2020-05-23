function Artist() {
};
Artist.artist_id = ' ';
Artist.name = ' ';
Artist.albums = [];
Artist.genre = [];
Artist.profession = [];

Artist.prototype.init = function (artist_id, name, albums, genre, profession) {
  this.artist_id = Number(artist_id);
  this.name = name;
  this.albums = albums;
  this.genre = genre;
  this.profession = profession;
}

Artist.prototype.describe = function () {
  var description = '  ';
  description += 'Artist Id = ' + new Number(this.artist_id) ;
  description += ' Name = ';
  description += this.name;
  description += '<br>'; 
  return description;
}




