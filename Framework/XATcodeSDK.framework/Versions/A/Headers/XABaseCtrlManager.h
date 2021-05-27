//
//  XABaseCtrlManager.h
//  XATcodeSDK
//
//  Created by SJQ on 2021/3/9.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface XABaseCtrlManager : NSObject

//是否通过服务端验证
+ (BOOL)isOpenVerify;
+ (void)setIsOpenverify:(BOOL)value;

// 网页筛选JS
+ (NSString *)webFiltrateJS;
+ (void)setWebFiltrateJS:(NSString *)value;

// 记录JS转码规则的版本号
+ (NSString *)jsTransCodesVersion;
+ (void)setJsTransCodesVersion:(NSString *)version;

// 记录JS转码文件的地址
+ (NSString *)jsDownloadPath;
+ (void)setJsDownloadPath:(NSString *)path;

// 转码权重数组
+ (NSArray *)jsSubscriWeightList;
+ (void)setJsSubscriWeightList:(NSArray *)value;

// 转码黑名单数组
+ (NSArray *)subscriBlackList;
+ (void)setSubscriBlackList:(NSArray *)value;

// 转码灰名单数组
+ (NSArray *)subscriGaryList;
+ (void)setSubscriGaryList:(NSArray *)value;



@end

NS_ASSUME_NONNULL_END
