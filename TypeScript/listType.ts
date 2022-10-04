export interface Getlist {
  object : string
  results : GetlistResult[]
  next_cursor : string | null
  has_more : boolean | null
  type : string
}

export interface GetlistResult {
  object : string
  id : string
  created_time : string
  last_edited_time: string
  created_by : Time
  last_edited_by : Time
  cover : Cover
  icon : Icon
  parent : Parent
  archived : boolean
  properties : Properties
  url : string
}

export interface Time {
  object : string
  id :  string
}

export interface Cover {
  type : string
  external? : External | null
  file? : External
}

export interface Icon {
  type : string
  emoji : string
}

export interface External {
  url? : string | null
}

export interface Parent {
  type : string
  database_id : string
}

export interface Properties {
  태그 : Tag
  Status : Status
  이름 : Properties_Name
}

export interface Tag {
  id : string
  type : string
  multi_select : Multi_select[]
 }

export interface Multi_select {
  id : string
  name : string
  color : string
}

export interface Status {
  id: string
  name : string
  color : string
}

export interface Properties_Name {
  id: string
  type : string
  title : Properties_Name_Title[]
}

export interface Properties_Name_Title {
  type : string
  text : Properties_Name_Title_Text
  annotations : Properties_Name_Title_Annotations
  plain_text : string
  href : string | null
}


export interface Properties_Name_Title_Text {
  content : string
  link : string | null
}

export interface Properties_Name_Title_Annotations {
  bold : boolean
  italic : boolean
  strikethrough : boolean
  underline : boolean
  code : boolean
  color : string
}