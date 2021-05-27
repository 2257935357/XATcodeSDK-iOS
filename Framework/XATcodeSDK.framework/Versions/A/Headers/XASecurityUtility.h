//
//  XASecurityUtility.h
//  XATcodeSDK
//
//  Created by SJQ on 2021/3/11.
//

#import <Foundation/Foundation.h>
#import <CommonCrypto/CommonDigest.h>
#import <CommonCrypto/CommonCryptor.h>

NS_ASSUME_NONNULL_BEGIN

@interface XASecurityUtility : NSObject

//SHA256加密
+ (NSString *)sha256HashFor:(NSString *)input;

+ (NSString *)dictSortWithAllkey:(NSDictionary *)dict;

// AES加密
+ (NSString *)aesEncrypt:(NSString *)sourceStr;

// AES解密
+ (NSString *)aesDecrypt:(NSString *)secretStr;

@end

NS_ASSUME_NONNULL_END
