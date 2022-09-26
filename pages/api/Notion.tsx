import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

export const getPage = async (pageId:string) => {
  const response = await notion.pages.retrieve({
    page_id: pageId,
  })
  return response
}