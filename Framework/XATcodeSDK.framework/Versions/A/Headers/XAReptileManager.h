//
//  XAReptileManager.h
//  XATcodeSDK
//
//  Created by SJQ on 2021/3/9.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface XAReptileManager : NSObject

+ (instancetype)sharedReptile;

//对网址速度进行排序
- (void)checkWebNetSpeedAction;

//获取适配过网址的搜索链接
- (void)arrayWithKeywords:(NSString *)keyWords result:(void (^)(NSArray *dataResultArr, BOOL isLoaded))callback;

@end

NS_ASSUME_NONNULL_END
