import { Helmet, HelmetProvider } from "react-helmet-async";
import React from "react";

interface SEOProps {
  title: string;
  description?: string;
  canonical?: string;
}

export const SEO: React.FC<SEOProps> = ({ title, description, canonical }) => (
  <HelmetProvider>
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {canonical && <link rel="canonical" href={canonical} />}
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  </HelmetProvider>
);
