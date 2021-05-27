# XATcodeSDK

[![CI Status](https://img.shields.io/travis/maiyaSJQ/XATcodeSDK.svg?style=flat)](https://travis-ci.org/maiyaSJQ/XATcodeSDK)
[![Version](https://img.shields.io/cocoapods/v/XATcodeSDK.svg?style=flat)](https://cocoapods.org/pods/XATcodeSDK)
[![License](https://img.shields.io/cocoapods/l/XATcodeSDK.svg?style=flat)](https://cocoapods.org/pods/XATcodeSDK)
[![Platform](https://img.shields.io/cocoapods/p/XATcodeSDK.svg?style=flat)](https://cocoapods.org/pods/XATcodeSDK)

## Example

提供转码服务与搜索链接

## Requirements

## 安装

```ruby
pod 'XATcodeSDK'
```

###初始化

```
#import <XATcodeSdk.h>
```

```
[XATcodeManager initWithAppId:@"appid"];

//设置环境
#if DEBUG
    [XATcodeManager setOnLineEnvironment:XAEnvironmentType_Debug];
#else
    [XATcodeManager setOnLineEnvironment:XAEnvironmentType_Release];
#endif
```

###获取阅读搜索链接

```
/// 获取转码网址
/// @param type 搜索引擎
/// @param searchKey 搜索关键词
/// @param callback 返回链接数组
+ (void)transcodingSearchType:(XASearchWebSupportType)type searchKeyWords:(NSString *)searchKey result:(void (^)(NSArray *dataResultArr, BOOL isAllLoadEnd))callback
```

##### 搜索引擎枚举

```
XASearchWebSupportType_shenma = 0,      //神马搜索
XASearchWebSupportType_toutiao,         //头条搜索
XASearchWebSupportType_360,             //360搜索
XASearchWebSupportType_baidu            //百度搜索
```

##### 返回数据类型

```
{
    href = "网址链接";
    title = "书名";
},
{
    href = "网址链接";
    title = "书名";
},
```



###根据链接进行转码

转码流程：先进行网页类型判断，然后分别调用转目录和转内容方法，最后根据结果开发者自行进行结果上报

##### 网页判断(需iOS系统大于12，慎用！！)

```
+ (void)webTypeFormURL:(NSString *)orgURL callback:(void (^)(NSString *baseURL, XAWebsiteType websiteType, NSError * _Nullable error))callback API_AVAILABLE(macos(10.14), ios(12.0), watchos(5.0), tvos(12.0));
```

##### 判断枚举

```
XAWebsiteType_Other = 0,
XAWebsiteType_Content, // 正文
XAWebsiteType_Catalog, // 目录
XAWebsiteType_Count,
```

##### 目录转码

```
+ (void)catalogFormURL:(NSString *)orgURL callback:(void (^)(NSString *baseURL, NSDictionary<NSString *, NSString *> *infoDic, NSArray<NSDictionary<NSString *, NSString *> *> *catalogAry, NSError * _Nullable error))callback;
```

* 返回值

  ```
  infoDic
  {
      author = "作者名";//作者
      pagerNext = "";//下一页目录地址
      pagerPrev = "";//上一页目录地址
  }
  
  catalogAry
  {
      chapterName = "第一章 章标题";
      chapterUrl = "网址链接";
  },
  {
      chapterName = "第二章 章标题";
      chapterUrl = "网址链接";
  },
  
  ```

##### 内容转码

```
+ (void)fictionFormURL:(NSString *)orgURL callback:(void (^)(NSString *baseURL, NSDictionary<NSString *, NSString *> *fictionDic, NSError * _Nullable error))callback
```

* 返回值

  ```
  {
      bookName = "书名";
      chapterName = "章节名";
      content = "章节内容";
      pagerCurrent = "目录链接";//目录链接
      pagerNext = "下一章链接";//下一章链接
      pagerNow = "本章链接";//本章链接
      pagerPrev = "下一章链接";//下一章链接
  }
  ```



### 上报转码结果

```
/// 上报转码结果
+ (void)reportTranscodingResult:(BOOL)isSuccess urlStr:(NSString *)urlStr;
```




### 使用合作

客户接入前，需要签订协议，按流程发送至商务邮箱：2257935357@qq.com，邮箱确认后方可接入


协议书见项目文件

