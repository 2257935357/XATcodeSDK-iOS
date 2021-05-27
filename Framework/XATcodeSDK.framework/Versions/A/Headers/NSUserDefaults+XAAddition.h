//
//  NSUserDefaults+XAAddition.h
//  XATcodeSDK
//
//  Created by SJQ on 2021/3/9.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface NSUserDefaults (XAAddition)

//可序列化保存
- (void)xa_setArchived:(id)obj forKey:(NSString *)defaultName;
//可序列化提取
- (id)xa_archivedForKey:(NSString *)defaultName;

@end

NS_ASSUME_NONNULL_END
