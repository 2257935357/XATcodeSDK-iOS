//
//  NSRegularExpression+MCFT.h
//  MCFictionLocalTranscoding
//
//  Created by 白粿 on 2020/7/13.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface NSRegularExpression (MCFT)

+ (nullable NSRegularExpression *)mcft_regularExpressionWithPattern:(NSString *)pattern;

- (nullable NSString *)mcft_firstMatchInString:(NSString *)string;

- (NSArray<NSTextCheckingResult *> *)mcft_matchesInString:(NSString *)string;

@end

NS_ASSUME_NONNULL_END
