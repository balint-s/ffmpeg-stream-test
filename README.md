# FFMPEG-stream-tester

## Getting started

- install ffmpeg

- install node.js

- `node sender.js | ffmpeg -f mjpeg -i pipe:0 -f mpegts -vcodec mpeg1video -loglevel panic pipe:1 | node receiver.js`
