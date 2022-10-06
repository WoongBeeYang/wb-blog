import { GetlistResult } from "../../TypeScript/listType"

export default function PortfolioList({data}) {
  const portfolioList:GetlistResult = data
  const bgImg = portfolioList.cover.file?.url || portfolioList.cover.external?.url || null
  const gitUrl = portfolioList.properties.Github.rich_text[0].text.content

  return (
    <>
    {gitUrl}
    </>
  )
}