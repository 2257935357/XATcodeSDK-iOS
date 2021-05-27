//
//  NSData+MCNovelString.h
//  MCNovelString
//
//  Created by 白粿 on 2019/10/11.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface NSData (MCNovelString)

- (nullable NSString *)mc_autoString API_AVAILABLE(macos(10.13), ios(11.0), watchos(4.0), tvos(11.0));

@end

NS_ASSUME_NONNULL_END
