import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

import { Box } from "@material-ui/core";
import { Button } from "@material-ui/core";
import pdf from "./cv.pdf";

function Pdf(props) {
  const { language } = props;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const handleChange = (event, value) => {
    setPageNumber(value);
  };

  return (
    <Box style={{
        background: "#511",
        width: "250",
        textAlign: "center",
        padding: "23px"       
      }}>
      <a style={{textDecoration: "none"}} href={pdf} download>
      <Button  style={{borderColor: "tomato", textTransform: "none", backgroundColor: "#511" ,color: "tan", textDecoration: "none", fontSize: "1rem", margin: "10px"}} variant="outlined">Download CV</Button>
        <Document file={pdf}>
          <Page width="200" pageNumber={pageNumber}/>
        </Document>
      </a>
    </Box>
  );
}

export default Pdf;
