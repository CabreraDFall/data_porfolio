import { useEffect } from 'react';

const SEO = ({ title, description, keywords }) => {
    useEffect(() => {
        // Update Title
        const baseTitle = "CabreraDFall | Data Portfolio";
        document.title = title ? `${title} | ${baseTitle}` : baseTitle;

        // Update Meta Description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.name = "description";
            document.head.appendChild(metaDescription);
        }
        metaDescription.content = description || "Data Architecture and Engineering Portfolio of CabreraDFall. Focused on high-performance data systems.";

        // Update Keywords
        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (!metaKeywords) {
            metaKeywords = document.createElement('meta');
            metaKeywords.name = "keywords";
            document.head.appendChild(metaKeywords);
        }
        metaKeywords.content = keywords || "Data Engineering, Architecture, SQL, Python, Snowflake, Supabase, React";

    }, [title, description, keywords]);

    return null;
};

export default SEO;
