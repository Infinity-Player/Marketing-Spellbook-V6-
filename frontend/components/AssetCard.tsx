import React from 'react';
import Button from './ui/Button';
import GlassmorphismCard from './ui/GlassmorphismCard';

type Asset = {
  id: number;
  headlines: string[] | string;  // allow string or array
  primaryText: string[] | string; // allow string or array
  emailSubject?: string;
  emailBody?: string;
  variants?: {
    id: string;
    hypothesis: string;
    headline: string;
  }[];
};

type Props = {
  asset: Asset;
  onDownload: (asset: Asset) => void;
  onCopyToClipboard: (text: string) => void;
};

export default function AssetCard({ asset, onDownload, onCopyToClipboard }: Props) {
  return (
    <GlassmorphismCard>
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-semibold text-lg">Asset #{asset.id}</h3>
        <Button variant="ghost" onClick={() => onDownload(asset)}>
          Download JSON
        </Button>
      </div>
      <div className="space-y-4">
        {/* Headlines */}
        <div>
          <h4 className="font-medium text-md mb-2">Headlines</h4>
          <div className="flex flex-wrap gap-2">
            {Array.isArray(asset.headlines) ? (
              asset.headlines.map((headline, index) => (
                <div
                  key={index}
                  className="bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-lg flex items-center gap-2"
                >
                  <span className="mr-2 text-sm">{headline}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onCopyToClipboard(headline)}
                  >
                    Copy
                  </Button>
                </div>
              ))
            ) : (
              <div className="bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-lg flex items-center gap-2">
                <span className="mr-2 text-sm">{asset.headlines}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onCopyToClipboard(String(asset.headlines))}
                >
                  Copy
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Primary Text */}
        <div>
          <h4 className="font-medium text-md mb-2">Primary Text</h4>
          <ul className="list-disc pl-5 space-y-1">
            {Array.isArray(asset.primaryText) ? (
              asset.primaryText.map((text, index) => (
                <li key={index} className="text-sm">{text}</li>
              ))
            ) : (
              asset.primaryText && <li className="text-sm">{asset.primaryText}</li>
            )}
          </ul>
        </div>

        {/* Email Subject */}
        {asset.emailSubject && (
          <div>
            <h4 className="font-medium text-md mb-2">Email Subject</h4>
            <p className="text-sm">{asset.emailSubject}</p>
          </div>
        )}

        {/* Email Body */}
        {asset.emailBody && (
          <div>
            <h4 className="font-medium text-md mb-2">Email Body</h4>
            <pre className="whitespace-pre-wrap bg-gray-100 dark:bg-gray-800 p-3 rounded-lg text-sm">
              {asset.emailBody}
            </pre>
          </div>
        )}

        {/* Variants */}
        {asset.variants && asset.variants.length > 0 && (
          <div>
            <h4 className="font-medium text-md mb-2">Variants</h4>
            <ul className="list-disc pl-5 space-y-1">
              {asset.variants.map((variant) => (
                <li key={variant.id} className="text-sm">
                  <strong>{variant.hypothesis}</strong>: {variant.headline}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </GlassmorphismCard>
  );
}
