//
//  XAReptileHTMLManager.h
//  XATcodeSDK
//
//  Created by SJQ on 2021/3/9.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface XAReptileHTMLManager : NSObject

//传入链接,搜索关键字,获取
+ (void)arrayHtmlWith:(NSString *)url keyWord:(NSString *)keyWords index:(NSInteger)index result:(void (^)(NSDictionary *dataResultDict))callback;

//获取网页HTML
+ (void)speedHtmlUrl:(NSString *)urlPath index:(NSInteger)index result:(void (^)(NSString *html, NSError *error, NSInteger dex, NSString *urlPath))callback;

@end

NS_ASSUME_NONNULL_END
