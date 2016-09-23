
var app = angular.module('demo', []).controller('DemoCtrl', function($scope) {
    $scope.modules = [
        {
            name: '事件绑定',
            desc: '绑定回调由本身不支持任何事件 AngularJS',
            src: 'https://github.com/angular-ui/ui-event',
            home: 'https://htmlpreview.github.io/?https://github.com/angular-ui/ui-event/master/demo/index.html'
        },
        {
            name: '模拟',
            desc: '应用掩模在输入字段，以便用户可以只键入预定图案.',
            src: 'https://github.com/angular-ui/ui-mask',
            home: 'https://htmlpreview.github.io/?https://github.com/angular-ui/ui-mask/master/demo/index.html'
        },
        {
            name: '不定',
            desc: '提供了一种简单的方法来切换一个复选框，输入的特殊的不确定的属性。这是一个视觉的切换只，绝不会影响本地浏览器的行为之外的型号或价值在这个时候.',
            src: 'https://github.com/angular-ui/ui-indeterminate',
            home: 'https://htmlpreview.github.io/?https://github.com/angular-ui/ui-indeterminate/master/demo/index.html'
        },
        {
            name: '验证',
            desc: '通用验证器ngModel.',
            src: 'https://github.com/angular-ui/ui-validate',
            home: 'https://htmlpreview.github.io/?https://github.com/angular-ui/ui-validate/master/demo/index.html'
        },
        {
            name: '滚动点',
            desc: '添加“UI-scrollpoint”类元素时，页面滚动过去他们。（以前称为scrollfix）',
            src: 'https://github.com/angular-ui/ui-scrollpoint',
            home: 'https://htmlpreview.github.io/?https://github.com/angular-ui/ui-scrollpoint/master/demo/index.html'
        },
        {
            name: '上传',
            desc: '可定制的文件上传',
            src: 'https://github.com/angular-ui/ui-uploader',
            home: 'https://htmlpreview.github.io/?https://github.com/angular-ui/ui-uploader/master/demo/index.html'
        },
        {
            name: '代码镜子',
            desc: '该指令可以让你代码镜子编辑器添加到您的文本元素.',
            src: 'https://github.com/angular-ui/ui-codemirror',
            home: 'https://angular-ui.github.io/ui-codemirror/'
        },
        {
            name: 'Ace',
            desc: '该指令允许您添加ACE编辑器要素.',
            src: 'https://github.com/angular-ui/ui-ace',
            home: 'https://angular-ui.github.io/ui-ace/'
        },
        {
            name: '日历',
            desc: '一个完整的AngularJS指令的Arshaw 完整的日历.',
            src: 'https://github.com/angular-ui/ui-calendar',
            home: 'https://angular-ui.github.io/ui-calendar/'
        },
        {
            name: 'Map',
            desc: '该指令允许您添加谷歌地图API的JavaScript元素.',
            src: 'https://github.com/angular-ui/ui-map',
            home: 'http://angular-ui.github.io/ui-map/'
        },
                {
            name: '传单',
            desc: '该指令允许你嵌入并与单张库管理的地图互动.',
            src: 'https://github.com/angular-ui/ui-leaflet',
            home: 'http://angular-ui.github.io/ui-leaflet/'
        },
        {
            name: '日期',
            desc: 'jQuery UI 对于日期选择器 AngularJS',
            src: 'https://github.com/angular-ui/ui-date',
            home: 'https://angular-ui.github.io/ui-date/'
        },
        {
            name: '选择',
            desc: '选择二和Selectize的AngularJS原生版本',
            src: 'https://github.com/angular-ui/ui-select',
            home: ''
        },
        {
            name: 'TinyMCE',
            desc: '该指令可以让你TinyMCE的编辑器添加到您的表单元素.',
            src: 'https://github.com/angular-ui/ui-tinymce',
            home: ''
        },
        {
            name: '可排序',
            desc: 'jQuery用户界面可排序为AngularJS',
            src: 'https://github.com/angular-ui/ui-sortable',
            home: 'https://angular-ui.github.io/ui-sortable/'
        },
        {
            name: 'Alias',
            desc: '创建第三方指令和模板简洁的别名',
            src: 'https://github.com/angular-ui/ui-alias',
            home: ''
        },
        {
            name: 'Bootstrap',
            desc: '用纯AngularJS引导组件',
            src: 'https://github.com/angular-ui/bootstrap',
            home: 'https://angular-ui.github.io/bootstrap/'
        },
        {
            name: '网格',
            desc: '网格虚拟化本身写 AngularJS',
            src: 'https://github.com/angular-ui/ui-grid',
            home: 'http://ui-grid.info/'
        },
        {
            name: '路由器',
            desc: '事实上的解决方案，以灵活的路由与嵌套视图 AngularJS',
            src: 'https://github.com/angular-ui/ui-router',
            home: 'https://angular-ui.github.io/ui-router/site/'
        },
        {
            name: '谷歌地图',
            desc: 'AngularJS 指令对谷歌地图的Javascript API',
            src: 'https://github.com/angular-ui/angular-google-maps',
            home: 'https://angular-ui.github.io/angular-google-maps'
        },
        {
            name: '滑块',
            desc: 'jQuery UI的滑块 AngularJS',
            src: 'https://github.com/angular-ui/ui-slider',
            home: 'https://htmlpreview.github.io/?https://github.com/angular-ui/ui-slider/master/demo/index.html'
        },
        {
            name: '布局',
            desc: '该指令可以让你拆东西',
            src: 'https://github.com/angular-ui/ui-layout',
            home: 'https://angular-ui.github.io/ui-layout/'
        },
        {
            name: '图与jQplot',
            desc: '该指令允许您将jqPlot图形添加到您的应用程序',
            src: 'https://github.com/angular-ui/ui-chart',
            home: 'https://angular-ui.github.io/ui-chart'
        },
        {
            name: '游览',
            desc: '一个土生土长的旅游型指令，将在您的应用程序很容易花边可控提示',
            src: 'https://github.com/angular-ui/ui-tour',
            home: 'https://angular-ui.github.io/ui-tour/demo/demo.html'
        },
        {
            name: '滚动',
            desc: 'uiScroll指令通过动态破坏因素，因为他们成为无形和重建他们，如果他们再次成为可见的解决了这个问题',
            src: 'https://github.com/angular-ui/ui-scroll',
            home: 'http://angular-ui.github.io/ui-scroll/demo/'
        },
        {
            name: '提到',
            desc: '文本输入类似Facebook的@mentions各地可组合构建',
            src: 'https://github.com/angular-ui/ui-mention',
            home: 'http://angular-ui.github.io/ui-mention/example/'
        }
    ];

});
