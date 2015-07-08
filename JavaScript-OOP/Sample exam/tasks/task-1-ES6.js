function solve() {
    'use strict';

    var Validators = {
        validateString: function (value, variableName) {
            var MIN_STRING_LENGTH = 3,
                MAX_STRING_LENGTH = 25;

            if (typeof (value) !== 'string' || value.length < 1) {
                throw new Error(variableName + " should be non-empty string.");
            }

            if (value.length < MIN_STRING_LENGTH || value.length > MAX_STRING_LENGTH) {
                throw new Error(variableName + ' should be between ' + MIN_STRING_LENGTH + ' and ' + MAX_STRING_LENGTH + 'characters');
            }
        },

        validateLength: function (value, variableName) {
            if (value !== parseInt(value, 10)) {
                throw new Error(variableName + ' should be integer.');
            }

            if (typeof value === 'undefined') {
                throw new Error(variableName + ' should be defined');
            }

            if (value < 1) {
                throw new Error(variableName + ' should be positive number');
            }
        },

        validateRating: function (value, variableName) {
            var IMDB_MIN_RATING = 1,
                IMDB_MAX_RATING = 5;

            if (typeof value === 'undefined') {
                throw new Error(variableName + ' should be defined');
            }

            if (typeof value !== 'number') {
                throw new Error(variableName + ' should be a number');
            }

            if (value < IMDB_MIN_RATING || value > IMDB_MAX_RATING) {
                throw new Error(variableName + ' should be between ' + IMDB_MIN_RATING
                    + ' and ' + IMDB_MAX_RATING + 'characters');
            }
        }
    };

    var playableID = 0;
    var playlistID = 0;
    var playerID   = 0;

    class Playable {
        constructor(title, author) {
            this.id = ++playableID;
            this.title = title;
            this.author = author;
        }

        get title() {
            return this._title;
        }

        set title(value) {
            Validators.validateString(value, 'Playable title');
            this._title = value;
        }

        get author() {
            return this._author;
        }

        set author(value) {
            Validators.validateString(value, 'Playable title');
            this._author = value;
        }

        play() {
            return `[${this.id}]. [${this.title}] - [${this.author}}]`
        }
    }

    class Audio extends Playable {
        constructor(title, author, length) {
            super(title, author);
            this.length = length;
        }

        get length() {
            return this._length;
        }

        set length(value) {
            Validators.validateLength(value, 'Audio length');
            this._length = value;
        }

        play() {
            var playableString = super.play();
            return playableString + `- [${this.length}}]`;
        }
    }

    class Video extends Playable {
        constructor(title, author, imdbRating) {
            super(title, author);
            this.imdbRating = imdbRating;
        }

        get imdbRating() {
            return this._imdbRating;
        }

        set imdbRating(value) {
            Validators.validateRating(value, 'IMDB Rating');
            this._imdbRating = value;
        }

        play() {
            var playableString = super.play();
            return playableString + `- [${this.imdbRating}}]`;
        }
    }

    class Playlist {
        constructor(name) {
            this.name = name;
            this.id = ++playlistID;
            this.playables = [];
        }

        get name() {
            return this._name;
        }
        set name(value) {
            Validators.validateString(value, 'Playlist name');
            this._name = value;
        }

        addPlayable(playable) {
            this.playables.push(playable);
            return this;
        }

        getPlayableById(id){
            return this.playables[id-1] || null;
        }

        removePlayable(property) {
            var index = property.id || property;
            if(index > this.playables.length || this.playables.length > index){
                throw new Error('A playable with the provided id is not contained in the playlist');
            }

            this.playables.splice(index-1, 1);
            return this;
        }

        listPlayables(page, size){
            if(page*size > this.playables.length || page < 0 || size <= 0){
                throw new Error('Invalid blah blah');
            }

            // TODO: Sorting

            return this.playables.slice(page * size, (page + 1) * size);
        }
    }

    class Player{
        constructor(name){
            this.name = name;
            this.id = ++playerID;
            this.playlists = [];
        }

        get name(){
            return this._name;
        }
        set name(value){
            Validators.validateString(value, 'Player name');
            this._name = value;
        }

        addPlaylist(playlist){
            this.playlists.push(playlist);
            return this;
        }

        getPlaylistById(id) {
            for(var playlist of this.playlists){
                if(playlist.id === id){
                    return playlist;
                }
            }

            return null;
        }

        removePlaylist(property){
            var index = property.id || property;
            for(var playlist of this.playlists){
                var playListIndex = this.playlists.indexOf(playlist);
                if(playlist.id === index){
                    this.playlists.splice(playListIndex, 1);
                    return this;
                }
            }

            throw new Error('Playlist not found');
        }

    }

    var module = {
        getPlayer: function (name) {
            // returns a new player instance with the provided name
            return new Player(name);
        },
        getPlaylist: function (name) {
            //returns a new playlist instance with the provided name
            return new Playlist(name);
        },
        getAudio: function (title, author, length) {
            //returns a new audio instance with the provided title, author and length
            return new Audio(title, author, length);
        },
        getVideo: function (title, author, imdbRating) {
            //returns a new video instance with the provided title, author and imdbRating
            return new Video(title, author, imdbRating);
        }
    };

    return module;
}

module.exports = solve;
