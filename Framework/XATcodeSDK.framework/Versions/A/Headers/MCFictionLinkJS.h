//
//  MCFictionLinkJS.h
//  MCFictionLocalTranscoding
//
//  Created by 白粿 on 2020/7/14.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface MCFictionLinkJS : NSObject

// 获取预处理js函数
+ (NSString *)pretreatmentFunction;

// 设置预处理js函数
+ (void)setPretreatmentFunction:(NSString *)str;

+ (NSString *)pretreatment:(NSString *)html;

@end

NS_ASSUME_NONNULL_END
