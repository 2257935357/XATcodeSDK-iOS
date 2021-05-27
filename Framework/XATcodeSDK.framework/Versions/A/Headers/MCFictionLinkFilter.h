//
//  MCFictionLinkFilter.h
//  MCFictionLocalTranscoding
//
//  Created by 白粿 on 2019/12/31.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface MCFictionLinkFilter : NSObject
@property (copy, nonatomic, readonly) NSString *html;
@property (copy, nonatomic, readonly) NSString *url;

+ (instancetype)new NS_UNAVAILABLE;
+ (id)allocWithZone:(nullable NSZone *)zone NS_UNAVAILABLE;
- (instancetype)init NS_UNAVAILABLE;
- (instancetype)initWithHtml:(NSString *)html url:(NSString *)url NS_DESIGNATED_INITIALIZER;

- (NSDictionary<NSString *,NSString *> * _Nullable)getLinkDic;

@end

NS_ASSUME_NONNULL_END
