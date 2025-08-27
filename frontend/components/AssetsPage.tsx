'use client';
import React, { useState, useEffect } from 'react';
import Section from './Section';
import Button from './ui/Button';
import AssetCard from './AssetCard';

type Asset = {
  id: number;
  headlines: string[];
  primaryText: string[];
  emailSubject?: string;
  emailBody?: string;
  variants?: {
    id: string;
    hypothesis: string;
    headline: string;
  }[];
};

export default function AssetsPage(){
  const [assets, setAssets] = useState<Asset[]>([]);
  const [mounted, setMounted] = useState(false);
  
  useEffect(()=> setMounted(true), []);
  
  useEffect(()=> {
    if (!mounted) return;
    const raw = localStorage.getItem('ms_assets');
    if (raw) {
      try {
        setAssets(JSON.parse(raw));
      } catch (e) {
        console.error('Error parsing assets', e);
        setAssets([]);
      }
    }
  }, [mounted]);
  
  const downloadAsset = (asset: Asset) => {      
    const data = JSON.stringify(asset, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `asset-${asset.id}.json`;
    a.click();
  };
  
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Copied to clipboard!');
    });
  };
  
  const exportToExcel = () => {
    // Placeholder for Excel export functionality
    alert('Export to Excel functionality will be implemented');
  };
  
  return (
    <div className="space-y-6">
      <Section title="Generated Assets">
        <div className="flex flex-wrap gap-2 mb-4">
          <Button onClick={exportToExcel}>Export to Excel</Button>
        </div>
        {assets.length === 0 ? (
          <p className="text-gray-500">No assets generated yet. Go to the Brief tab and generate some assets.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {assets.map((asset) => (
              <AssetCard key={asset.id} asset={asset} onDownload={downloadAsset} onCopyToClipboard={copyToClipboard} />
            ))}
          </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">Primary Text</h4>
                    <ul className="list-disc pl-5">
                      {asset.primaryText.map((text, index) => (
                        <li key={index} className="mb-1">{text}</li>
                      ))}
                    </ul>
                  </div>
                  {asset.emailSubject && (
                    <div>
                      <h4 className="font-medium text-sm mb-1">Email Subject</h4>
                      <p>{asset.emailSubject}</p>
                    </div>
                  )}
                  {asset.emailBody && (
                    <div>
                      <h4 className="font-medium text-sm mb-1">Email Body</h4>
                      <pre className="whitespace-pre-wrap bg-gray-100 dark:bg-gray-700 p-2 rounded">
                        {asset.emailBody}
                      </pre>
                    </div>
                  )}
                  {asset.variants && asset.variants.length > 0 && (
                    <div>
                      <h4 className="font-medium text-sm mb-1">Variants</h4>
                      <ul className="list-disc pl-5">
                        {asset.variants.map((variant) => (
                          <li key={variant.id} className="mb-1">
                            <strong>{variant.hypothesis}</strong>: {variant.headline}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </Section>
    </div>
  );
}
