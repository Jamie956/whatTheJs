##### 正则表达式

| 字符 | 描述 |
| :--- | ------------------------------------------------- |
| $    | 匹配输入字符串的结尾位置                          |
| ()   | 标记一个子表达式的开始和结束位置                  |
| {}   | 标记限定符表达式的开始                            |
| \w   | 匹配包括下划线的任何单词字符,等价于“[A-Za-z0-9_]” |
| \d   | 匹配一个数字字符。等价于[0-9] |
| \s   | 匹配任何空白字符，包括空格、制表符、换页符等等。等价于[ \f\n\r\t\v] |
| \D   | 匹配一个非数字字符。等价于[^0-9] |
| \W | 匹配任何非单词字符。等价于[A-Za-z0-9] |
| [] | 字符范围，匹配指定范围内的任意字符 |
| [xyz] | 字符集合。匹配所包含的任意一个字符 |
| [^xyz] | 负值字符集合。匹配未包含的任意字符。 |
| [a-z] | 字符范围。匹配指定范围内的任意字符 |
| . | 匹配除“\n”之外的任何单个字符 |
| * | 匹配前面的子表达式零次或多次 |
| + | 匹配前面的子表达式一次或多次 |
| ? | 贪婪模式则尽可能多的匹配所搜索的字符串 |
| {n} | n是一个非负整数。匹配确定的n次 |
| {n,} | 至少匹配n次 |
| {n,m} | m和n均为非负整数，其中n<=m。最少匹配n次且最多匹配m次 |



```
例子
匹配数字，无限定符
/\d/
匹配数字，一次或多次
/\d+/
匹配数字，全局
/\d+/g
匹配包含a,b,c
/[abc]
匹配a-z
/[a-z]/g
// 匹配0-9的字符
/[0-9]/g
 // 不匹配a-z的字符
/[^a-z]/g
// 不匹配a-z和0-9的字符
/[^a-z0-9]/g
 //匹配特定一个字符
/b/
 //匹配多个指定字符
/a|2|o/g
// 匹配从 < 到 > 之间的所有内容
/<.*>/
//匹配从 < 到第一个 > 之间的所有内容
/<.*?>/
//匹配开始的 < >
/<\w+?>/
```
