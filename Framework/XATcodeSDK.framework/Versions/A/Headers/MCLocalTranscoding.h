//
//  MCLocalTranscoding.h
//  MCFictionLocalTranscoding
//
//  Created by 白粿 on 2019/12/31.
//

#import <Foundation/Foundation.h>

typedef NS_ENUM(NSInteger, MCWebsiteType) {
    MCWebsiteType_Other = 0,
    MCWebsiteType_Content, // 正文
    MCWebsiteType_Catalog, // 目录
    MCWebsiteType_Count,
};

NS_ASSUME_NONNULL_BEGIN

@interface MCFictionLocalTranscoding : NSObject
/// 正文页转码
+ (void)fictionFormURL:(NSString *)orgURL needMaxWord:(BOOL)needJudge callback:(void (^)(NSString *baseURL, NSDictionary<NSString *, NSString *> *fictionDic, NSError * _Nullable error))callback;
/// 目录页转码
+ (void)catalogFormURL:(NSString *)orgURL callback:(void (^)(NSString *baseURL, NSDictionary<NSString *, NSString *> *infoDic, NSArray<NSDictionary<NSString *, NSString *> *> *catalogAry, NSError * _Nullable error))callback;
/// 网页判断
+ (void)webTypeFormURL:(NSString *)orgURL callback:(void (^)(NSString *baseURL, MCWebsiteType websiteType, NSError * _Nullable error))callback API_AVAILABLE(macos(10.14), ios(12.0), watchos(5.0), tvos(12.0));

/// 根据response head中的缓存策略缓存网页
+ (void)cacheURL:(NSString *)url;

+ (NSString *)jsFunction;
+ (void)setJSFunction:(NSString *)func;

@end

NS_ASSUME_NONNULL_END
