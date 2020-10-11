const { Readable, PassThrough } = require("stream");

module.exports = async function (srv) {
  const db = await cds.connect.to("db");
  const { Pictures } = db.entities("MediaService");
/*
  srv.on('UPDATE', Pictures, async (req, next) => {
    const url = req._.req.path
    if (url.includes('content')) {
      const id = req.data.id
      const stream = new PassThrough()
      const chunks = []
      stream.on('data', chunk => {
        chunks.push(chunk)
      })
      stream.on('end', () => {
        let content = Buffer.concat(chunks)
        // Upload via Browser:
        // Buffer(4874) [45, 45, 45, 45, 45, 45, 87, 101, 98, 75, 105, 116,
        // Via REST Client
        // Buffer(4429) [255, 216, 255, 224, 0, 16, 74, 70, 73, 70, 0, 1, 1,
        // Upload via Browser - UseMultipart = false
        // Buffer(4429) [255, 216, 255, 224, 0, 16, 74, 70, 73, 70, 0, 1
        return next()
      })
      req.data.content.pipe(stream)
    } else return next()
  })
*/
  srv.on("READ", Pictures, async (req, next) => {
    // console.log("Read");
    return next();
  });
};
