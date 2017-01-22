# myAppWithRNDemo
react native 集成到原生app示例


步骤：

1.创建空项目

2.添加RN依赖包
React Native的植入过程同时需要React和React Native两个node依赖包。

package.json
我们把具体的依赖包记录在package.json文件中。如果项目根目录中没有这个文件，那就自己创建一个。

对于一个典型的React Native项目来说，一般package.json和index.ios.js等文件会放在项目的根目录下。而iOS相关的原生代码会放在一个名为ios/的子目录中,这里也同时放着你的Xcode项目文件（.xcodeproj）。
下面是一个最简单的package.json的内容示例。

示例中的version字段没有太大意义（除非你要把你的项目发布到npm仓库）。scripts中是用于启动packager服务的命令。dependencies中的react和react-native的版本取决于你的具体需求。一般来说我们推荐使用最新版本。你可以使用npm info react和npm info react-native来查看当前的最新版本。另外，react-native对react的版本有严格要求，高于或低于某个范围都不可以。本文无法在这里列出所有react native和对应的react版本要求，只能提醒读者先尝试执行npm install，然后注意观察安装过程中的报错信息，例如require react@某.某.某版本, but none was installed，然后根据这样的提示，执行npm i -S react@某.某.某版本。

```
{
"name": "myAppWithRNDemo",
"version": "0.0.1",
"private": true,
"scripts": {
"start": "node node_modules/react-native/local-cli/cli.js start"
},
"dependencies": {
"react": "15.4.1",
"react-native": "0.39.2"
}
}
```

安装依赖包
使用npm（node包管理器，Node package manager）来安装React和React Native模块。这些模块会被安装到项目根目录下的node_modules/目录中。 在包含有package.json文件的目录（一般也就是项目根目录）中运行下列命令来安装：

```
$ npm install
```

3.集成pod

```
cd进入项目所在目录，命令行操作
pod init
编辑Podfile文件后执行命令：
pod install
```

4.设置info.Plist文件NSAppTransportSecurity属性，以此支持http

```
<key>NSAppTransportSecurity</key>
<dict>
<key>NSAllowsArbitraryLoads</key>
<true/>
<key>NSExceptionDomains</key>
<dict>
<key>localhost</key>
<dict>
<key>NSTemporaryExceptionAllowsInsecureHTTPLoads</key>
<true/>
</dict>
</dict>
</dict>
```
5.创建一个index.ios.js文件

```
# 在项目根目录执行以下命令创建文件：
$ touch index.ios.js

```
在index.ios.js文件中编写自己所需业务代码

6.在原生app添加RN入口

```
- (IBAction)enterRNViewBtnClicked:(id)sender {

NSLog(@"High Score Button Pressed");
NSURL *jsCodeLocation = [NSURL
URLWithString:@"http://localhost:8081/index.ios.bundle?platform=ios"];
RCTRootView *rootView =
[[RCTRootView alloc] initWithBundleURL : jsCodeLocation
moduleName        : @"Playground"
initialProperties : @{@"scores" :@[@{@"name" : @"Alex", @"value": @"42"},@{@"name" : @"Joel",@"value": @"10"}]}
launchOptions    : nil];
UIViewController *vc = [[UIViewController alloc] init];
vc.view = rootView;
[self presentViewController:vc animated:YES completion:nil];
}
```
注： moduleName参数要匹配index.ios.js文件中注册的名字

此处存在问题：可能报错RCTRootView找不到，需要到项目设置文件里设置"${PODS_ROOT}/Headers/Public/React" non-recursive 为 recursive

7.进入node_modules所在目录，启动npm服务

```
npm start
```
8.运行项目即可



参考链接： 

1. [嵌入到现有原生应用](https://reactnative.cn/docs/0.40/integration-with-existing-apps.html#content)

2. [动画](https://reactnative.cn/docs/0.40/animations.html#content)
