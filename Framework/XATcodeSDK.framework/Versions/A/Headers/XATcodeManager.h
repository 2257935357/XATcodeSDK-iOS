//
//  XATcodeManager.h
//  XATcodeSDK
//
//  Created by SJQ on 2021/3/9.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

// 搜索引擎支持类型
typedef NS_ENUM(NSInteger, XASearchWebSupportType) {
    XASearchWebSupportType_shenma = 0,      //神马搜索
    XASearchWebSupportType_toutiao,         //头条搜索
    XASearchWebSupportType_360,             //360搜索
    XASearchWebSupportType_baidu            //百度搜索
};

typedef NS_ENUM(NSInteger, XAWebsiteType) {
    XAWebsiteType_Other = 0,
    XAWebsiteType_Content, // 正文
    XAWebsiteType_Catalog, // 目录
    XAWebsiteType_Count,
};

typedef NS_ENUM(NSInteger, XAEnvironmentType) {
    XAEnvironmentType_Release = 0,      //线上环境
    XAEnvironmentType_Debug,            //调试环境
};

@interface XATcodeManager : NSObject


/// 初始化
/// @param appid APPID
+ (void)initWithAppId:(NSString *)appid;

/// 设置环境
+ (void)setOnLineEnvironment:(XAEnvironmentType)type;


/// 获取转码网址
/// @param type 搜索引擎
/// @param searchKey 搜索关键词
/// @param callback 返回链接数组
+ (void)transcodingSearchType:(XASearchWebSupportType)type searchKeyWords:(NSString *)searchKey result:(void (^)(NSArray *dataResultArr, BOOL isAllLoadEnd))callback;


/// 正文页转码
+ (void)fictionFormURL:(NSString *)orgURL callback:(void (^)(NSString *baseURL, NSDictionary<NSString *, NSString *> *fictionDic, NSError * _Nullable error))callback;
/// 目录页转码
+ (void)catalogFormURL:(NSString *)orgURL callback:(void (^)(NSString *baseURL, NSDictionary<NSString *, NSString *> *infoDic, NSArray<NSDictionary<NSString *, NSString *> *> *catalogAry, NSError * _Nullable error))callback;
/// 网页判断
+ (void)webTypeFormURL:(NSString *)orgURL callback:(void (^)(NSString *baseURL, XAWebsiteType websiteType, NSError * _Nullable error))callback API_AVAILABLE(macos(10.14), ios(12.0), watchos(5.0), tvos(12.0));

/// 上报转码结果
/// @param isSuccess 转码成功失败
/// @param urlStr 转码链接
+ (void)reportTranscodingResult:(BOOL)isSuccess urlStr:(NSString *)urlStr;






@end

NS_ASSUME_NONNULL_END
