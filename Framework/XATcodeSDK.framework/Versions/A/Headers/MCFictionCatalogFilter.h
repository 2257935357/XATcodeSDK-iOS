//
//  MCFictionCatalogFilter.h
//  MCFictionLocalTranscoding
//
//  Created by 白粿 on 2020/1/1.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface MCFictionCatalogFilter : NSObject
@property (copy, nonatomic, readonly) NSString *html;
@property (copy, nonatomic, readonly) NSString *url;

+ (instancetype)new NS_UNAVAILABLE;
+ (id)allocWithZone:(nullable NSZone *)zone NS_UNAVAILABLE;
- (instancetype)init NS_UNAVAILABLE;
- (instancetype)initWithHtml:(NSString *)html url:(NSString *)url NS_DESIGNATED_INITIALIZER;

- (void)filterWithCallback:(void (^)(NSString *author, NSArray<NSDictionary<NSString *, NSString *> *> *catalogAry, NSError * _Nullable error))callback;

@end

NS_ASSUME_NONNULL_END
