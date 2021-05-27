//
//  NSObject+XAGCD.h
//  XATcodeSDK
//
//  Created by SJQ on 2021/3/9.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

/// 异步内存释放 vc无效 img >= 100x100 直接使用
#define asyncFree(obj) { id asyncObj = obj; obj = nil; asyncGlobalBlock(^{ [asyncObj class]; }); }

@interface NSObject (XAGCD)
@end

#pragma mark - Main Queue
FOUNDATION_EXTERN void xa_syncMainBlock(void (^block)(void));
FOUNDATION_EXTERN void xa_asyncMainBlock(double second, void (^block)(void)) __attribute__((overloadable));
FOUNDATION_EXTERN void xa_asyncMainBlock(void (^block)(void))                __attribute__((overloadable));

#pragma mark - Global Queue
//性能下限 [10, 1w] [36, 67]ms
FOUNDATION_EXTERN void xa_asyncGlobalBlock(double second, void (^block)(void)) __attribute__((overloadable));
FOUNDATION_EXTERN void xa_asyncGlobalBlock(void (^block)(void))                __attribute__((overloadable));

NS_ASSUME_NONNULL_END
