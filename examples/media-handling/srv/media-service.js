module.exports = srv => {
  const { Pictures } = cds.entities;

  /*
  srv.on('UPDATE', 'Pictures', async req => {
    console.log("Udate");

    if (req.data.content) {
      const contentType = req._.req.headers['content-type']
      // Content-Type: multipart/form-data; boundary=----WebKitFormBoundaryBDeMle41o08M3pD0
      let content;

      // https://areknawo.com/node-js-file-streams-explained/
  
      // Read stream
      req.data.content.on("data", dataChunk => {
        console.log(dataChunk);
        content += dataChunk;
        // content += <someTransformation>(dataChunk)
      });
  
      // Output stream
      req.data.content.on("end", () => {
        console.log("Stream ended");
        console.log(content);
      });  
    } else {
      return next()
    }
  })
  */
 srv.on('READ', 'Pictures', req => {
    console.log("Read");
  })
}