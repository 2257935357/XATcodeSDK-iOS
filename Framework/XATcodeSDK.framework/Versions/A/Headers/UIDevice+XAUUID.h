//
//  UIDevice+XAUUID.h
//  XATcodeSDK
//
//  Created by SJQ on 2021/3/9.
//

#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

@interface UIDevice (XAUUID)

+ (NSString *)xa_uuid;

/**
 获取设备型号, e.g. iPhone 2G (A1203)
 */
+ (NSString *)xa_getCurrentDeviceModel;

@end

NS_ASSUME_NONNULL_END
