class BuildRightPlugin {
  constructor(options) {
    console.log('插件被使用了', options)
  }
  apply(compiler) {
    compiler.hooks.emit.tapAsync('BuildRightPlugin', (compilation, cb) => {
      //在dist目录下生成一个版权文件
      compilation.assets['copyright.txt'] = {
        //内容
        source: function(){
          return 'copyright by kate'
        },
        //文件大小
        size: function() {
          return 17
        }
      }
      cb()
    })
    compiler.hooks.compile.tap('BuildRightPlugin', (compilation) => {
      console.log('compiler')
    })
  }
}
module.exports = BuildRightPlugin