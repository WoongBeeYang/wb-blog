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
  callout : Callout
}

export interface Callout {
  icon : Icon
  rich_text:Rich_text
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
  file : Icon_File
}

export interface Icon_File {
  url : string
  expiry_time : string
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
  tag : Tag
  Description : Description
  Youtube: URL
  Github : URL
  Result : URL
}

export interface URL {
  id : string
  type : string
  url : string
}
export interface Description {
  id: string
  type:string
  rich_text: Rich_text[]
}

export interface Rich_text{
  type:string
  text: Rich_textType
  annotations: Annotations
  plain_text:string
  href?: string
}

export interface Annotations{
  bold : boolean | string
  italic : boolean
  strikethrough : boolean
  underline : boolean
  code : boolean
  color : string
}

export interface Rich_textType{
  content:string
  link?:string
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