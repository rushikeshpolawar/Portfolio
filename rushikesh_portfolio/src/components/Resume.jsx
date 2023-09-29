import React, { useEffect } from 'react';
import { SectionWrapper } from "../hoc";

const ResumeComponent = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cloudpdf.io/viewer.min.js';
    document.head.appendChild(script);

    const config = {
      documentId: '001acc44-c63d-4034-8ca9-ae50ea2457c0',
      darkMode: true,
      themeColor: '#5163ba',
      appBarColored: true,
      disableToolbar: false,
      disableElements: [],
    };

    script.onload = () => {
      window.CloudPDF(config, document.getElementById('viewer')).then((instance) => {});
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <div>
      <div
        id="viewer"
        style={{ width: '100%', height: '85vh' }}
      ></div>
    </div>
  );
};

export default SectionWrapper(ResumeComponent, "resume");
