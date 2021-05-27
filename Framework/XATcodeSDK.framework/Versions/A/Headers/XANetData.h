//
//  XANetData.h
//  XATcodeSDK
//
//  Created by SJQ on 2021/3/9.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface XANetData : NSObject

@property (nonatomic) BOOL success;
@property (nonatomic, copy) NSString *errMessage;
@property (nonatomic, strong) id retData;
@property (nonatomic, copy) NSString *code;

- (instancetype)initWithData:(id)data;

@end

NS_ASSUME_NONNULL_END
