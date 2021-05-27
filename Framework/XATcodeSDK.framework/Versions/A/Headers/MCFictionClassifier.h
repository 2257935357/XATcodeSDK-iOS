//
//  MCFictionClassifier.h
//  MCFictionLocalTranscoding
//
//  Created by 白粿 on 2020/11/4.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

API_AVAILABLE(macos(10.14), ios(12.0), watchos(5.0), tvos(12.0))
@interface MCFictionClassifier : NSObject

+ (void)websiteFrom:(NSString *)html callback:(void (^)(NSString *typeStr, NSError * _Nullable error))callback;

@end

NS_ASSUME_NONNULL_END
