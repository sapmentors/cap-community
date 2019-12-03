module.exports = srv => {
  const { Pictures } = cds.entities;

  /*
  srv.on('UPDATE', 'Pictures', async req => {
    console.log("Udate");

    let content;

    // https://areknawo.com/node-js-file-streams-explained/

    // 
    req.data.content.on("data", dataChunk => {
      console.log(dataChunk);
      content += dataChunk;
      // content += <someTransformation>(dataChunk)
    });

    req.data.content.on("finish", () => {
      console.log("Stream finish");
      console.log(content.toString('base64'));
    });

  })
  */
  srv.on('READ', 'Pictures', req => {
    "";
    console.log("Read");
  })
}