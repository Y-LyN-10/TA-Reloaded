function solve() {
    'use strict';

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    var Validators = {
        validateString: function validateString(value, variableName) {
            var MIN_STRING_LENGTH = 3,
                MAX_STRING_LENGTH = 25;

            if (typeof value !== 'string' || value.length < 1) {
                throw new Error(variableName + ' should be non-empty string.');
            }

            if (value.length < MIN_STRING_LENGTH || value.length > MAX_STRING_LENGTH) {
                throw new Error(variableName + ' should be between ' + MIN_STRING_LENGTH + ' and ' + MAX_STRING_LENGTH + 'characters');
            }
        },

        validateLength: function validateLength(value, variableName) {
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

        validateRating: function validateRating(value, variableName) {
            var IMDB_MIN_RATING = 1,
                IMDB_MAX_RATING = 5;

            if (typeof value === 'undefined') {
                throw new Error(variableName + ' should be defined');
            }

            if (typeof value !== 'number') {
                throw new Error(variableName + ' should be a number');
            }

            if (value < IMDB_MIN_RATING || value > IMDB_MAX_RATING) {
                throw new Error(variableName + ' should be between ' + IMDB_MIN_RATING + ' and ' + IMDB_MAX_RATING + 'characters');
            }
        }
    };

    var playableID = 0;
    var playlistID = 0;
    var playerID = 0;

    var Playable = (function () {
        function Playable(title, author) {
            _classCallCheck(this, Playable);

            this.id = ++playableID;
            this.title = title;
            this.author = author;
        }

        _createClass(Playable, [{
            key: 'play',
            value: function play() {
                return '[' + this.id + ']. [' + this.title + '] - [' + this.author + '}]';
            }
        }, {
            key: 'title',
            get: function get() {
                return this._title;
            },
            set: function set(value) {
                Validators.validateString(value, 'Playable title');
                this._title = value;
            }
        }, {
            key: 'author',
            get: function get() {
                return this._author;
            },
            set: function set(value) {
                Validators.validateString(value, 'Playable title');
                this._author = value;
            }
        }]);

        return Playable;
    })();

    var Audio = (function (_Playable) {
        function Audio(title, author, length) {
            _classCallCheck(this, Audio);

            _get(Object.getPrototypeOf(Audio.prototype), 'constructor', this).call(this, title, author);
            this.length = length;
        }

        _inherits(Audio, _Playable);

        _createClass(Audio, [{
            key: 'play',
            value: function play() {
                var playableString = _get(Object.getPrototypeOf(Audio.prototype), 'play', this).call(this);
                return playableString + ('- [' + this.length + '}]');
            }
        }, {
            key: 'length',
            get: function get() {
                return this._length;
            },
            set: function set(value) {
                Validators.validateLength(value, 'Audio length');
                this._length = value;
            }
        }]);

        return Audio;
    })(Playable);

    var Video = (function (_Playable2) {
        function Video(title, author, imdbRating) {
            _classCallCheck(this, Video);

            _get(Object.getPrototypeOf(Video.prototype), 'constructor', this).call(this, title, author);
            this.imdbRating = imdbRating;
        }

        _inherits(Video, _Playable2);

        _createClass(Video, [{
            key: 'play',
            value: function play() {
                var playableString = _get(Object.getPrototypeOf(Video.prototype), 'play', this).call(this);
                return playableString + ('- [' + this.imdbRating + '}]');
            }
        }, {
            key: 'imdbRating',
            get: function get() {
                return this._imdbRating;
            },
            set: function set(value) {
                Validators.validateRating(value, 'IMDB Rating');
                this._imdbRating = value;
            }
        }]);

        return Video;
    })(Playable);

    var Playlist = (function () {
        function Playlist(name) {
            _classCallCheck(this, Playlist);

            this.name = name;
            this.id = ++playlistID;
            this.playables = [];
        }

        _createClass(Playlist, [{
            key: 'addPlayable',
            value: function addPlayable(playable) {
                this.playables.push(playable);
                return this;
            }
        }, {
            key: 'getPlayableById',
            value: function getPlayableById(id) {
                return this.playables[id - 1] || null;
            }
        }, {
            key: 'removePlayable',
            value: function removePlayable(property) {
                var index = property.id || property;
                if (index > this.playables.length || this.playables.length > index) {
                    throw new Error('A playable with the provided id is not contained in the playlist');
                }

                this.playables.splice(index - 1, 1);
                return this;
            }
        }, {
            key: 'listPlayables',
            value: function listPlayables(page, size) {
                if (page * size > this.playables.length || page < 0 || size <= 0) {
                    throw new Error('Invalid blah blah');
                }

                // TODO: Sorting

                return this.playables.slice(page * size, (page + 1) * size);
            }
        }, {
            key: 'name',
            get: function get() {
                return this._name;
            },
            set: function set(value) {
                Validators.validateString(value, 'Playlist name');
                this._name = value;
            }
        }]);

        return Playlist;
    })();

    var Player = (function () {
        function Player(name) {
            _classCallCheck(this, Player);

            this.name = name;
            this.id = ++playerID;
            this.playlists = [];
        }

        _createClass(Player, [{
            key: 'addPlaylist',
            value: function addPlaylist(playlist) {
                this.playlists.push(playlist);
                return this;
            }
        }, {
            key: 'getPlaylistById',
            value: function getPlaylistById(id) {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = this.playlists[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var playlist = _step.value;

                        if (playlist.id === id) {
                            return playlist;
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator['return']) {
                            _iterator['return']();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }

                return null;
            }
        }, {
            key: 'removePlaylist',
            value: function removePlaylist(property) {
                var index = property.id || property;
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = this.playlists[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var playlist = _step2.value;

                        var playListIndex = this.playlists.indexOf(playlist);
                        if (playlist.id === index) {
                            this.playlists.splice(playListIndex, 1);
                            return this;
                        }
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2['return']) {
                            _iterator2['return']();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }

                throw new Error('Playlist not found');
            }
        }, {
            key: 'name',
            get: function get() {
                return this._name;
            },
            set: function set(value) {
                Validators.validateString(value, 'Player name');
                this._name = value;
            }
        }]);

        return Player;
    })();

    var module = {
        getPlayer: function getPlayer(name) {
            // returns a new player instance with the provided name
            return new Player(name);
        },
        getPlaylist: function getPlaylist(name) {
            //returns a new playlist instance with the provided name
            return new Playlist(name);
        },
        getAudio: function getAudio(title, author, length) {
            //returns a new audio instance with the provided title, author and length
            return new Audio(title, author, length);
        },
        getVideo: function getVideo(title, author, imdbRating) {
            //returns a new video instance with the provided title, author and imdbRating
            return new Video(title, author, imdbRating);
        }
    };

    return module;
}

module.exports = solve;

