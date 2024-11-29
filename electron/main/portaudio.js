import ffmpeg from 'fluent-ffmpeg'
import fs from 'fs'
import  { Writable }  from 'stream';
let audioStream
export const startRecord = ()=>{
   // 创建一个 writable 流，用来接收音频数据
  let audioBufferStream = new Writable({
    write(chunk, encoding, callback) {
      console.log('Received audio chunk:', chunk);
      // 在这里，你可以将音频数据传输给其他服务（比如语音识别API）
      // 例如，使用 chunk 来调用语音识别 API
      callback();
    }
  });
//   // 配置 FFmpeg 命令以捕获音频流
  audioStream = ffmpeg()
  .input(':BlackHole 2ch') // 输入音频设备名称
  .inputFormat('avfoundation') // 使用 macOS 的 avfoundation 格式
  .audioChannels(2) // 设置音频为立体声
  .audioFrequency(44100) // 设置采样率为 44100 Hz
  .audioCodec('pcm_s16le')
  .format('s16le') // 设置音频格式
  .pipe(audioBufferStream); // 将音频数据传输到 writable 流
  // .save('./output.wav')
  // .pipe(); // 使用 16 位 PCM 格式
  // 处理音频流
  audioStream.on('data', (chunk) => {
    console.log('chunk', chunk);
    
  });
  audioStream.on('start', (...arg)=>{
    console.log('start', arg);
  })
  // 启动音频流
  console.log('Listening for audio...');
}

export const stopCapture = ()=> {
  console.log('audioStream', audioStream);
  
  // audioStream.closed(); // 发送中断信号停止 ffmpeg 进程
  console.log('Audio capture stopped');
}

