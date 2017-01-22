//
//  RootViewController.m
//  myAppWithRNDemo
//
//  Created by chang on 2017/1/22.
//  Copyright © 2017年 chang. All rights reserved.
//

#import "RootViewController.h"
#import "RCTRootView.h"

@interface RootViewController ()

@end

@implementation RootViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view from its nib.
}

// 进入react native 页面
- (IBAction)enterRNViewBtnClicked:(id)sender {
    
    NSLog(@"High Score Button Pressed");
    NSURL *jsCodeLocation = [NSURL
                             URLWithString:@"http://localhost:8081/index.ios.bundle?platform=ios"];
    
    RCTRootView *rootView =
    [[RCTRootView alloc] initWithBundleURL : jsCodeLocation
                         moduleName        : @"Playground"
                         initialProperties : nil
                          launchOptions    : nil];
    
    // 测试1：
//    RCTRootView *rootView =
//    [[RCTRootView alloc] initWithBundleURL : jsCodeLocation
//                         moduleName        : @"Playground"
//                         initialProperties : @{@"scores" :@[@{@"name" : @"Alex", @"value": @"42"},@{@"name" : @"Joel",@"value": @"10"}]}
//                          launchOptions    : nil];
    
    
    
    UIViewController *vc = [[UIViewController alloc] init];
    vc.view = rootView;
    [self presentViewController:vc animated:YES completion:nil];
}



- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}



@end
