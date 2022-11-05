const boom = require('@hapi/boom');
const fs = require("fs");

class VideoService {
    constructor() {}

    async getVideo(show_id, range) {
      const videoPath = 'DPS_ENTREGA2.mp4';
      if (!fs.existsSync(videoPath)) {
        throw boom.notFound('Video not found');
      }

      const videoSize = fs.statSync(videoPath).size;
      const CHUNK_SIZE = 10 ** 6;
      const start = Number(range.replace(/\D/g, ""));
      const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
      const contentLength = end - start + 1;
      const headers = {
          "Content-Range": `bytes ${start}-${end}/${videoSize}`,
          "Accept-Ranges": "bytes",
          "Content-Length": contentLength,
          "Content-Type": "video/mp4",
      };
      const videoStream = fs.createReadStream(videoPath, { start, end });
     return {headers, videoStream};
    }
}

module.exports = VideoService;



