//
//  MCFictionDownload.h
//  MCFictionLocalTranscoding
//
//  Created by 白粿 on 2019/12/31.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface MCFictionDownload : NSObject
@property (strong, nonatomic, readonly) NSString *orgURL;
@property (strong, nonatomic, readonly) NSString *pcURL;
@property (strong, nonatomic, readonly) NSString *nowURL;

+ (instancetype)new NS_UNAVAILABLE;
- (instancetype)init NS_UNAVAILABLE;
- (instancetype)initWithOrgURL:(NSString *)orgURL pcURL:(NSString *)pcURL NS_DESIGNATED_INITIALIZER;
- (void)html:(void (^)(NSString *html, NSError * _Nullable error))callback;
- (void)cache;

+ (nullable NSString *)hrefURLWithBaseURL:(NSString *)baseURL href:(NSString *)href;

+ (NSString *)pcUrlFromWap:(NSString *)url;

@end

NS_ASSUME_NONNULL_END
