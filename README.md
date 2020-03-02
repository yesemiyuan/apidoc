# apidoc应用

## apidoc安装

1.安装node.js
官网地址https://nodejs.org/en/
进入官网下载对应版本并安装，安装好后可以在命令行输入

    node --version

如果返回当前版本好说明安装成功

2.安装apidoc
命令行执行
    
    npm install apidoc -g
    
-g 表示全局安装，安装完成后输入

    apidoc -h

出现options说明安装成功

## apidoc配置
在项目的根据了下增加文件apidoc.json

    {"name": "api_info",
    "version": "1.0.1",
    "description": "该文件显示apidoc的显示名称，版本号，url等内容",
    "title": "apidoc_test",
    "url": "http://api.demo.com"}
详细配置参数如下：

| 参数 | 描述 |
| --- | ---|
| name | 工程名称 |
| version |	版本 |
| description | 工程描述 |
| title | 浏览器标题 |
| url | api路径前缀 |
| sampleUrl | 如果设置了该参数，那么在文档中便可以看到用于测试接口的一个表单 |
| header.title | 页眉导航标题 |
| header.filename | 页眉文件名 |
| footer.title | 页脚导航标题 |
| footer.filename | 页脚文件名 |
| order | 接口名称或接口组名称的排序列表如果未定义，那么所有名称会自动排序"order": [ "Error", "Define", "PostTitleAndError", PostError"] |

## apidoc参数
参考文档https://blog.csdn.net/qq_14824885/article/details/87793476

## apidoc生成接口文档
参考文档https://blog.csdn.net/qq_14824885/article/details/87793476

项目根目录运行apidoc -i path1 -o path2

path1 读取源文件的目录

path2 指定输出文档的目录

然后进入新生成的path2目录，点击index.html就可以在浏览器查看接口信息了。
    