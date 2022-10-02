export interface Welcome {
  object:      string;
  results:     Result[];
  next_cursor: null;
  has_more:    boolean;
  type:        string;
  page:        Page;
}

export interface Page {
}

export interface Result {
  object:           string;
  id:               string;
  created_time:     Date;
  last_edited_time: Date;
  created_by:       TedBy;
  last_edited_by:   TedBy;
  cover:            Cover | null;
  icon:             Icon | null;
  parent:           Parent;
  archived:         boolean;
  properties:       Properties;
  url:              string;
}

export interface Cover {
  type:     string;
  external: External;
}

export interface External {
  url: string;
}

export interface TedBy {
  object: Object;
  id:     string;
}

export enum Object {
  User = "user",
}

export interface Icon {
  type:  string;
  emoji: string;
}

export interface Parent {
  type:        string;
  database_id: string;
}

export interface Properties {
  태그:     태그;
  Status: Status;
  이름:     이름;
}

export interface Status {
  id:     string;
  type:   string;
  status: StatusElement | null;
}

export interface StatusElement {
  id:    string;
  name:  string;
  color: string;
}

export interface 이름 {
  id:    string;
  type:  string;
  title: Title[];
}

export interface Title {
  type:        string;
  text:        Text;
  annotations: Annotations;
  plain_text:  string;
  href:        null;
}

export interface Annotations {
  bold:          boolean;
  italic:        boolean;
  strikethrough: boolean;
  underline:     boolean;
  code:          boolean;
  color:         string;
}

export interface Text {
  content: string;
  link:    null;
}

export interface 태그 {
  id:           string;
  type:         string;
  multi_select: StatusElement[];
}
