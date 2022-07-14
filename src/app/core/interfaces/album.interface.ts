// Generated by https://quicktype.io

export interface IAlbum {
  id:              string;
  title:           string;
  link:            string;
  cover:           string;
  cover_small:     string;
  cover_medium:    string;
  cover_big:       string;
  cover_xl:        string;
  md5_image:       string;
  nb_tracks:       number;
  release_date:    string;
  record_type:     string;
  available:       boolean;
  tracklist:       string;
  explicit_lyrics: boolean;
  time_add:        number;
  artist:          Artist;
  type:            string;
}

export interface Artist {
  id:             string;
  name:           string;
  picture:        string;
  picture_small:  string;
  picture_medium: string;
  picture_big:    string;
  picture_xl:     string;
  tracklist:      string;
  type:           string;
}
