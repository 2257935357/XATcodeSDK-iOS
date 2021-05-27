//
//  XAWebJSSubscriManager.h
//  XATcodeSDK
//
//  Created by SJQ on 2021/3/9.
//

#import <Foundation/Foundation.h>
#import "XATcodeManager.h"

NS_ASSUME_NONNULL_BEGIN

@interface XAWebJSSubscriManager : NSObject

+ (instancetype)sharedSubscriDataMark;

//初始化
- (void)setupData;

- (void)loadWebViewWithSearchType:(XASearchWebSupportType)searchType keyWords:(NSString *)keyWords backData:(void (^)(NSArray *dataResultArr))callback;

@end

NS_ASSUME_NONNULL_END
