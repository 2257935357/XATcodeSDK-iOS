//
//  MCFictionContentFilter.h
//  MCFictionLocalTranscoding
//
//  Created by 白粿 on 2019/12/31.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface MCFictionContentFilter : NSObject
@property (strong, nonatomic, readonly) NSString *html;

+ (instancetype)new NS_UNAVAILABLE;
+ (id)allocWithZone:(nullable NSZone *)zone NS_UNAVAILABLE;
- (instancetype)init NS_UNAVAILABLE;
- (instancetype)initWithHtml:(NSString *)html NS_DESIGNATED_INITIALIZER;

- (void)filterWithMaxWords:(BOOL)needJudge callback:(void (^)(NSString * content, NSError * _Nullable error))callback;

@end

NS_ASSUME_NONNULL_END
