//
//  XAHttpService.h
//  Pods
//
//  Created by SJQ on 2021/3/9.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

FOUNDATION_EXTERN NSString *const GET;
FOUNDATION_EXTERN NSString *const POST;
typedef void(^completionHandler)(id data,NSError *error);
typedef void(^successHandler)(id data);
typedef void(^errHandler)(NSError *error);

@interface XAHttpService : NSObject

+ (XAHttpService *)httpService;

- (void)sendRequestWithHttpMethod:(NSString *)method
                          URLPath:(NSString *)pathString
                       parameters:(NSDictionary *)parameters
                completionHandler:(completionHandler)completionHandler;

@end

NS_ASSUME_NONNULL_END
