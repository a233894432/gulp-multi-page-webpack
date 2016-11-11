wx.ttyun.com 项目相关文章说明

- 支持类似fis的`__inline`和`__sprite`语法（base64和雪碧图）(需要修改 依赖包`gulp-css-base64`和`gulp-css-spriter`都做了修改)
- 支持保存刷新

安装依赖包：
`npm install`

建议用 ` cnpm install  `

开发：
`gulp dev`

发布：
`gulp`

 

项目说明

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
 

