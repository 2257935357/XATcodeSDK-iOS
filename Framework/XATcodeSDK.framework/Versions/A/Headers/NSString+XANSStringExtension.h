//
//  NSString+XANSStringExtension.h
//  XATcodeSDK
//
//  Created by SJQ on 2021/3/9.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface NSString (XANSStringExtension)

- (NSString *)xa_trim;

//获取首尾中间的字符串
- (NSArray *)componentsSeparatedFromString:(NSString *)fromString toString:(NSString *)toString;

//GB2312加密
- (NSString *)GBKTransCoding;
//GB2312解密
- (NSString *)GBKTransDeCode;

//code-UTF-8编码
- (NSString *)UT8DecodedString;

//格式转换
- (NSString *)contentTransFix;

@end

NS_ASSUME_NONNULL_END
