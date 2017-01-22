# Uncomment the next line to define a global platform for your project
# platform :ios, '9.0'

target 'myAppWithRNDemo' do
  # Uncomment the next line if you're using Swift or would like to use dynamic frameworks
  # use_frameworks!

  # Pods for myAppWithRNDemo
  # 'node_modules'目录一般位于根目录中
  # 但是如果你的结构不同，那你就要根据实际路径修改下面的`:path`
  pod 'React', :path => '/Users/chang/Desktop/myAppWithRNDemo/node_modules/react-native', :subspecs => [
    'Core',
    'RCTText',
    'RCTNetwork',
    'RCTWebSocket', # 这个模块是用于调试功能的
    # 在这里继续添加你所需要的模块
    'RCTImage'
  ]
end
