//
//  XAGetAllLinkManager.h
//  XATcodeSDK
//
//  Created by SJQ on 2021/3/10.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface XAGetAllLinkManager : NSObject

/// 权重排序
+ (void)weightChangeListWith:(NSArray *)subscriData complete:(void (^)(NSMutableArray *arr))complete;

/// 黑名单筛选
+ (BOOL)couldSubscriWithBlackList:(NSString *)url;

@end

NS_ASSUME_NONNULL_END
