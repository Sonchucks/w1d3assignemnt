var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },

  printPlaylists: function () {
    for (var listPlaylists in this.playlists) {
      var tPLP = this.playlists[listPlaylists];
      console.log(`${listPlaylists}: ${tPLP.name} - ${tPLP.tracks.length} tracks`);
    }
  },

  printTracks: function () {
    for (var listTracks in this.tracks) {
      var tTLT = this.tracks[listTracks];
      console.log(`${listTracks}: ${tTLT.name} by ${tTLT.artist} (${tTLT.album})`);
    }
  },

  printPlaylist: function (playlistId) {
    selectTracks = this.playlists[playlistId];

    if (library.playlists.hasOwnProperty(playlistId)) {

      trackInformation = selectTracks.tracks;

      console.log(`${selectTracks.id}: ${selectTracks.name} - ${selectTracks.tracks.length} tracks`);

      for (var i = 0; i < trackInformation.length; i++) {
        var track = trackInformation[i];
        var trackDetails = library.tracks[track];

        console.log(`${track}: ${trackDetails.name} by ${trackDetails.artist} (${trackDetails.album})`);
      }
    } else {
      console.log("Selected playlist doesn't exist");
    }
  },

  addTrackToPlaylist: function (trackId, playlistId) {
      this.playlists[playlistId].tracks.push(trackId);
      console.log(`Added ${trackId} to ${playlistId}`);

      return this.printPlaylist(playlistId);
  },

  uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },

  addTrack: function (name, artist, album) {
    trackId = this.uid();
    this['tracks'][trackId] = {id: trackId, name: name, artist: artist, album: album};
    console.log(this['tracks'])

  },

  addPlaylist: function (name) {
    playlistId = this.uid();
    this['playlists'][playlistId] = {id: playlistId, name: name, tracks: []};
    console.log(this['playlists']);

  },
};

console.log(library.addPlaylist("New Playlist #1"))
