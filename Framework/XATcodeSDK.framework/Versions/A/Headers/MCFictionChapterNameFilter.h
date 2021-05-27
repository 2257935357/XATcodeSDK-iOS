//
//  MCFictionChapterNameFilter.h
//  MCFictionLocalTranscoding
//
//  Created by 白粿 on 2020/1/9.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface MCFictionChapterNameFilter : NSObject
@property (copy, nonatomic, readonly) NSString *orgHTML;
@property (copy, nonatomic, readonly) NSString *url;
@property (copy, nonatomic, readonly) NSString *bookName;

+ (instancetype)new NS_UNAVAILABLE;
+ (id)allocWithZone:(nullable NSZone *)zone NS_UNAVAILABLE;
- (instancetype)init NS_UNAVAILABLE;
- (instancetype)initWithHtml:(NSString *)orgHTML url:(NSString *)url bookName:(NSString *)bookName NS_DESIGNATED_INITIALIZER;

- (nullable NSString *)getChapterName;

@end

NS_ASSUME_NONNULL_END
