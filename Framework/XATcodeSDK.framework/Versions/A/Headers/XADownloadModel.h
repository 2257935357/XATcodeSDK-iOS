//
//  XADownloadModel.h
//  XATcodeSDK
//
//  Created by SJQ on 2021/3/10.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface XADownloadModel : NSObject

//下载JS转码规则文件
+(void)downloadJSTransCodingURL:(NSString *) downloadURL progress:(void (^)(NSProgress *downloadProgress))progress destination:(void (^)(NSURL *targetPath))destination failure:(void(^)(NSError *error))faliure;

@end

NS_ASSUME_NONNULL_END
