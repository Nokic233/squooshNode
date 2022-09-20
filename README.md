# squooshNode

## 目前是一个demo仓库，在node环境下调用google的squoosh的API来进行压缩图片

### 过程中踩了一些坑，跟着文档走被坑了
### 1、[在拿图片的binary时就跟官网的不一样](https://github.com/GoogleChromeLabs/squoosh/tree/dev/libsquoosh#writing-encoded-images-to-the-file-system)

**官网的做法**
```js
const rawEncodedImage = image.encodedWith.mozjpeg.binary;

fs.writeFile('/path/to/new/image.jpg', rawEncodedImage);
```

**但实际上mozijpeg是作为promise返回的，所以需要await一下**
```js
const result = await image.encodedWith.mozjpeg

fs.writeFileSync('./imgAfter/2.jpg', result.binary);
```

