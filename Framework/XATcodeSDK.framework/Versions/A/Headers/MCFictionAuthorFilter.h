//
//  MCFictionAuthorFilter.h
//  MCFictionLocalTranscoding
//
//  Created by 白粿 on 2020/7/17.
//

#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

@interface MCFictionAuthorFilter : NSObject
+ (instancetype)new NS_UNAVAILABLE;
+ (id)allocWithZone:(nullable NSZone *)zone NS_UNAVAILABLE;
- (instancetype)init NS_UNAVAILABLE;

+ (NSString *)fileterWithHTML:(NSString *)orgHTML;

@end

NS_ASSUME_NONNULL_END
