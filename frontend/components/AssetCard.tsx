import React from "react"
import { Button } from "./ui/Button"
import GlassmorphismCard from "./ui/GlassmorphismCard"

type Asset = {
  id: number | string
  headlines?: string[] | string
  primaryText?: string[] | string
  emailSubject?: string
  emailBody?: string
  keywords?: string[] | string
  variants?: {
    id: string
    hypothesis: string
    headline: string
  }[]
}

type Props = {
  asset: Asset
  onCopyToClipboard: (text: string) => void
}

function toArray(x?: string[] | string): string[] {
  if (!x) return []
  return Array.isArray(x) ? x : [x]
}

export default function AssetCard({ asset, onCopyToClipboard }: Props) {
  const headlines = toArray(asset.headlines)
  const primaryText = toArray(asset.primaryText)
  const keywords = toArray(asset.keywords)

  return (
    <GlassmorphismCard className="space-y-3">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold">Asset {asset.id}</h4>
      </div>

      {headlines.length > 0 && (
        <div>
          <div className="text-sm font-medium mb-1">Headlines</div>
          <div className="flex flex-wrap gap-2">
            {headlines.map((headline, index) => (
              <div key={index} className="bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-lg flex items-center gap-2">
                <span className="mr-2 text-sm">{headline}</span>
                <Button variant="ghost" size="sm" onClick={() => onCopyToClipboard(headline)}>
                  Copy
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}

      {primaryText.length > 0 && (
        <div>
          <div className="text-sm font-medium mb-1">Primary Text</div>
          <div className="space-y-2">
            {primaryText.map((p, i) => (
              <div key={i} className="bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-lg flex items-center justify-between gap-2">
                <span className="text-sm">{p}</span>
                <Button variant="ghost" size="sm" onClick={() => onCopyToClipboard(p)}>
                  Copy
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}

      {keywords.length > 0 && (
        <div className="text-xs text-gray-500">Keywords: {keywords.join(", ")}</div>
      )}

      {asset.emailSubject && (
        <div>
          <div className="text-sm font-medium mb-1">Email Subject</div>
          <div className="bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-lg flex items-center justify-between gap-2">
            <span className="text-sm">{asset.emailSubject}</span>
            <Button variant="ghost" size="sm" onClick={() => onCopyToClipboard(asset.emailSubject!)}>
              Copy
            </Button>
          </div>
        </div>
      )}

      {asset.emailBody && (
        <div>
          <div className="text-sm font-medium mb-1">Email Body</div>
          <div className="bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-lg">
            <pre className="whitespace-pre-wrap text-sm">{asset.emailBody}</pre>
          </div>
        </div>
      )}
    </GlassmorphismCard>
  )
}
