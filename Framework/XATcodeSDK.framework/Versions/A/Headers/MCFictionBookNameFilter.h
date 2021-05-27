//
//  MCFictionBookNameFilter.h
//  MCFictionLocalTranscoding
//
//  Created by 白粿 on 2020/3/10.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface MCFictionBookNameFilter : NSObject
@property (copy, nonatomic, readonly) NSString *orgHTML;
@property (copy, nonatomic, readonly) NSString *url;

+ (instancetype)new NS_UNAVAILABLE;
+ (id)allocWithZone:(nullable NSZone *)zone NS_UNAVAILABLE;
- (instancetype)init NS_UNAVAILABLE;
- (instancetype)initWithHtml:(NSString *)html url:(NSString *)url NS_DESIGNATED_INITIALIZER;

- (void)filterWithCallback:(void (^)(NSString *bookName, NSError * _Nullable error))callback;
@end

NS_ASSUME_NONNULL_END
