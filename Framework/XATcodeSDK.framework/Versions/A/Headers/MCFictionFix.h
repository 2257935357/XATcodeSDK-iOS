//
//  MCFictionFix.h
//  MCFictionLocalTranscoding
//
//  Created by 白粿 on 2020/8/21.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface MCFictionFix : NSObject
+ (instancetype)new NS_UNAVAILABLE;
+ (instancetype)alloc NS_UNAVAILABLE;

+ (NSArray <NSString *>*)characterEntity:(NSArray<NSString *>*)lineAry;

@end

NS_ASSUME_NONNULL_END
