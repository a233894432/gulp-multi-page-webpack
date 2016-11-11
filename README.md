wx.ttyun.com 项目相关文章说明


- 支持保存刷新
- 使用 sass
- 支持 htm 与 html 嵌套
- 使用 webpack 打包(暂时只用了js打包功能,分模块打包) 
 

安装依赖包：
`npm install`

建议用 ` cnpm install  `

开发：
`gulp dev`

开发SASS
`dev:css`

发布：
`gulp`


开发目录:

       src
        ├── app
        │   ├── header.htm // 头部文件
        │   ├── foot.htm   // 底部文件
        │   ├── index.html  // 首页 
        │   ├── news-detail.html // 各入口
        │   └── news-list.html
        ├── sass
            ├── diocss     // dio.css 框架
            ├── base        // 田田云基础方法
            ├── customer    // 各页面的
            └── style.scss  //     
        ├── css 
        │   ├── icon.css
        │   └── slider.css
        ├── images
        └── js
            ├── core  // 基础方法类
            ├── lib   // 引用类
            ├── ui   // UI类
            ├── news-detail.js  // 各页面的入口文件
            ├── news-list.js
            └── main.js
 

# PX to rem
http://mxd.tencent.com/wp-content/uploads/2014/11/rem.html